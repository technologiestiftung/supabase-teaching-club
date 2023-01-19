import type { NextPage } from "next";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useRef, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl, { GeoJSONSource, Map } from "mapbox-gl";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;
import type { Database } from "../src/common/database-types";
import { createFeatureCollection } from "../src/utils/create-feature-colection";
import { AuthDetail } from "../components/AuthDetail";
import { TreeInfo } from "../components/TreeInfo";
import { AdoptonsDetail } from "../components/AdoptionsDetail";
import { useGeojson } from "../src/lib/hooks/useGeojson";
import { Seperator } from "../components/Seperator";
import { WateringsDetail } from "../components/WateringsDetail";
import { Adoption, Watering } from "../src/common/types";
import { useDistricts } from "../src/lib/hooks/useDistricts";

const Home: NextPage = () => {
	const supabaseClient = useSupabaseClient<Database>();
	const map = useRef<Map | null>(null);

	async function getFilteredTrees({
		distance,
		lat,
		lon,
	}: {
		distance: number;
		lat: number;
		lon: number;
	}): Promise<void> {
		const { data, error } = await supabaseClient.rpc(
			"__rpc_trees_within_radius",
			{
				lat,
				lon,
				distance,
			},
		);

		if (error) {
			console.error(error);
			return;
		}
		//@ts-ignore
		const featureCollection = createFeatureCollection(data);

		setGeojson((_) => {
			return featureCollection;
		});
	}
	async function getDistrictsTrees({ id }: { id: number }) {
		const { data, error } = await supabaseClient.rpc(
			"__rpc_trees_within_district",
			{
				district_id: id,
			},
		);

		if (error) {
			console.error(error);
			return;
		}
		// @ts-ignore
		const featureCollection = createFeatureCollection(data);

		setGeojson((_) => {
			return featureCollection;
		});
	}

	async function getUserAdoptions(user_id: string) {
		const { data, error } = await supabaseClient
			.from("adoptions")
			.select("*")
			.eq("user_id", user_id);
		if (error) {
			console.error(error);
			return;
		}
		setUserAdoptions(data);
	}
	async function getUserWaterings(user_id: string) {
		const { data, error } = await supabaseClient
			.from("waterings")
			.select("*")
			.eq("user_id", user_id);
		if (error) {
			console.error(error);
			return;
		}
		setUserWaterings(data);
	}
	const user = useUser();
	const { geojson, setGeojson, initGeojson } = useGeojson(supabaseClient);
	const districts = useDistricts(supabaseClient);

	const [isGeolocating, setIsGeolocating] = useState<boolean>(false);
	const [range, setRange] = useState<number>(100);
	const [currentLoction, setcurrentLoction] = useState<GeoJSON.Point>();
	const [currentFeature, setcurrentFeature] =
		useState<mapboxgl.MapboxGeoJSONFeature | null>(null);
	const [userAdoptions, setUserAdoptions] = useState<Adoption[]>([]);
	const [userWaterings, setUserWaterings] = useState<Watering[]>([]);
	useEffect(() => {
		map.current = new mapboxgl.Map({
			container: "map", // container ID
			style: "mapbox://styles/mapbox/dark-v10", // style URL
			center: [13.404954, 52.520008], // starting position [lng, lat]
			zoom: 10, // starting zoom
		});
		if (!map || !map.current) return;

		let selectedTreeId: string | null = null;

		map.current.on("load", async () => {
			// const data = await getGeoJson();
			// Add geolocate control to the map.
			const geolocate = new mapboxgl.GeolocateControl({
				positionOptions: {
					enableHighAccuracy: true,
				},
				// When active the map will receive updates to the device's location as it changes.
				trackUserLocation: true,
				// Draw an arrow next to the location dot to indicate which direction the device is heading.
				showUserHeading: true,
			});
			map.current!.addControl(geolocate);
			geolocate.on("geolocate", function locateUser(e: any | undefined) {
				if (!e) return;
				console.log(e);
				// if (
				// 	Object.hasOwn(e, "coords") &&
				// 	Object.hasOwn(e.coords, "longitude") &&
				// 	Object.hasOwn(e.coords, "latitude")
				// ) {
				setcurrentLoction({
					type: "Point",
					coordinates: [e.coords.longitude, e.coords.latitude],
				});
				// }

				// console.log("lng:" + e.coords.longitude + ", lat:" + e.coords.latitude);
			});
			geolocate.on("trackuserlocationstart", () => {
				// console.log("A trackuserlocationstart event has occurred.");
				setIsGeolocating(true);
			});
			geolocate.on("trackuserlocationend", () => {
				// console.log("A trackuserlocationend event has occurred.");
				setIsGeolocating(false);
				setcurrentLoction(undefined);
			});
		});

		map.current.on("click", "trees", function (e) {
			if (!e.features) return;
			const { features } = e;
			setcurrentFeature(features[0]);

			if (selectedTreeId) {
				map.current?.setFeatureState(
					{
						source: "trees",
						id: selectedTreeId,
					},
					{ selected: false },
				);
			}
			if (e.features[0].id) {
				selectedTreeId = e.features[0].id as string;

				map.current?.setFeatureState(
					{
						source: "trees",
						id: e.features[0].id,
					},
					{ selected: true },
				);
			}
		});
	}, []);
	useEffect(() => {
		if (!user) {
			setUserAdoptions([]);
			setUserWaterings([]);
			return;
		}
		getUserAdoptions(user.id).catch(console.error);
		getUserWaterings(user.id).catch(console.error);
	}, [user]);

	useEffect(() => {
		if (!map) return;
		if (!map.current) return;
		if (!geojson) return;

		if (map.current.getSource("trees") === undefined) {
			map.current!.addSource("trees", {
				type: "geojson",
				data: geojson,
			});
			map.current!.addLayer({
				id: "trees",
				type: "circle",
				source: "trees",
				paint: {
					"circle-color": [
						"case",
						["boolean", ["feature-state", "selected"], false],
						"#ff6347",
						"#dddddd",
					],
					"circle-radius": 5,
				},
			});
		}

		(map.current.getSource("trees") as GeoJSONSource).setData(geojson);
	}, [geojson]);

	return (
		<>
			<div className="container">
				<div className="column">
					{/*
					----------------------------------------------------------------
					The Auth detail section allowing the user to login
					----------------------------------------------------------------
					*/}
					<AuthDetail
						user={user}
						supabaseClient={supabaseClient}
						setUserAdoptions={setUserAdoptions}
						setUserWaterings={setUserWaterings}
					/>
				</div>
				{/*
				----------------------------------------------------------------
				The map
				----------------------------------------------------------------
				*/}
				<div className="column">
					<div className="row">
						<div className="map row-item" id="map"></div>
					</div>
					{isGeolocating ? (
						<div className="row">
							<div className="row-item" id="controlls">
								<div>
									<form
										onSubmit={(e) => {
											console.log("submit rang");
											e.preventDefault();
											if (!isGeolocating) {
												console.log("not geolocating");
												return;
											}
											if (!currentLoction) {
												console.log("no current location");
												return;
											}
											//@ts-ignore
											setRange(parseInt(e.target.range.value));
											getFilteredTrees({
												lat: currentLoction.coordinates[1],
												lon: currentLoction.coordinates[0],
												//@ts-ignore
												distance: parseInt(e.target.range.value),
											}).catch(console.error);
										}}
									>
										<label htmlFor="range">
											Trees {range} in distance around user
										</label>
										<input
											onChange={(e) => {
												setRange(parseInt(e.target.value));
											}}
											value={range}
											type="range"
											id="range"
											name="range"
											min="0"
											max="1000"
										/>
										<button>Filter</button>
									</form>
								</div>
							</div>
						</div>
					) : null}
					{Seperator("Tree infos")}
					<div className="row">
						{/*
					----------------------------------------------------------------
					The Tree info section Shows infrmation about the currently
					selected tree
					----------------------------------------------------------------
					*/}
						<TreeInfo
							currentFeature={currentFeature}
							user={user}
							supabaseClient={supabaseClient}
							setUserAdoptions={setUserAdoptions}
							setUserWaterings={setUserWaterings}
						/>
					</div>
					{Seperator("Filter trees by radius")}

					<div className="row">
						<div className="row-item">
							<form
								onSubmit={(e) => {
									e.preventDefault();

									if (!currentFeature) {
										alert("No tree selected");
										return;
									}
									if (currentFeature?.id) {
										const pos = geojson?.features.filter(
											(feature) =>
												feature?.properties?.id === currentFeature?.id,
										);
										if (pos && pos.length > 0) {
											//@ts-ignore
											if (isNaN(parseInt(e.target.radius.value))) {
												alert("No value in radius input");
												return;
											}
											getFilteredTrees({
												//@ts-ignore
												lon: pos[0].geometry.coordinates[0],
												//@ts-ignore
												lat: pos[0].geometry.coordinates[1],
												//@ts-ignore
												distance: parseInt(e.target.radius.value),
											}).catch(console.error);
										} else {
											alert("Please select a tree");
										}
									}
								}}
							>
								<label htmlFor="radius">
									Radius in meters from{" "}
									{currentFeature ? currentFeature?.properties?.id : "..."}:
								</label>
								<input type="number" name="radius" id="radius" />
								<button type="submit" className="btn">
									Filter
								</button>
							</form>
						</div>
					</div>
					{Seperator("Filter trees by district")}
					{/*
					----------------------------------------------------------------
					The district filter section allows selection of districs by dropdown selection. Filters using a remote procedure call
					----------------------------------------------------------------
					*/}
					<div className="row">
						<div className="row-item">
							<form
								onSubmit={(e) => {
									e.preventDefault();

									//@ts-ignore
									if (e.target.district.value === "0") {
										initGeojson().catch(console.error);
									} else {
										getDistrictsTrees({
											//@ts-ignore
											id: parseInt(e.target.district.value),
										}).catch(console.error);
									}
								}}
							>
								<label htmlFor="district">District: </label>
								<select name="district" id="district">
									<option value="0">All</option>
									{districts?.features.map((district) => (
										<option key={district.id} value={district.id}>
											{district.properties?.name}
										</option>
									))}
								</select>
								<button type="submit" className="btn">
									Filter
								</button>
							</form>
						</div>
					</div>
					{Seperator("Waterings and Adoptions")}
					<div className="row">
						<div className="row-item">
							<WateringsDetail
								userWaterings={userWaterings}
								map={map}
								geojson={geojson}
							/>
						</div>
						<div className="row-item" id="" style={{ margin: "0" }}>
							<AdoptonsDetail
								map={map}
								geojson={geojson}
								userAdoptions={userAdoptions}
								supabaseClient={supabaseClient}
								setUserAdoptions={setUserAdoptions}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
