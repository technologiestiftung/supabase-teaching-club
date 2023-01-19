import type { NextPage } from "next";
import { useUser } from "@supabase/supabase-auth-helpers/react";
import { supabaseClient } from "@supabase/supabase-auth-helpers/nextjs";
import { forwardRef, useEffect, useRef, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl, { GeoJSONSource, Map } from "mapbox-gl";

import { Auth } from "@supabase/ui";
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;
import type { Database } from "../src/types";
import { createFeatureCollection } from "../src/utils/create-feature-colection";
type Tree = Omit<Database["public"]["Tables"]["trees"]["Row"], "geom"> & {
	geom: GeoJSON.Geometry;
};
type District = Omit<
	Database["public"]["Tables"]["districts"]["Row"],
	"geom"
> & { geom: GeoJSON.Geometry };

type Adoption = Database["public"]["Tables"]["adoptions"]["Row"];
type Watering = Database["public"]["Tables"]["waterings"]["Row"];

const Home: NextPage = () => {
	const map = useRef<Map | null>(null);
	async function initGeojson() {
		const { data, error } = await supabaseClient
			.from<Tree>("trees")
			.select("*");
		if (error) {
			throw error;
		}
		const featureCollection = createFeatureCollection<Tree>(data);

		setGeojson((_) => {
			return featureCollection;
		});
	}
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
		const featureCollection = createFeatureCollection<Tree>(data);

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
		const featureCollection = createFeatureCollection<Tree>(data);

		setGeojson((_) => {
			return featureCollection;
		});
	}

	async function getUserAdoptions(user_id: string) {
		const { data, error } = await supabaseClient
			.from<Adoption>("adoptions")
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
			.from<Watering>("waterings")
			.select("*")
			.eq("user_id", user_id);
		if (error) {
			console.error(error);
			return;
		}
		setUserWaterings(data);
	}
	const { user, error: userError } = useUser();
	const [geojson, setGeojson] = useState<
		GeoJSON.FeatureCollection<GeoJSON.Geometry> | undefined
	>(undefined);
	const [isGeolocating, setIsGeolocating] = useState<boolean>(false);
	const [range, setRange] = useState<number>(100);
	const [districts, setDistricts] = useState<
		GeoJSON.FeatureCollection<GeoJSON.Geometry> | undefined
	>(undefined);
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
		async function initDistricts() {
			const { data, error } = await supabaseClient
				.from<District>("districts")
				.select("*");
			if (error) {
				throw error;
			}
			const featureCollection = createFeatureCollection<District>(data);
			setDistricts((_) => {
				return featureCollection;
			});
		}
		initDistricts().catch(console.error);
	}, []);
	useEffect(() => {
		initGeojson().catch(console.error);
	}, []);
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
					<details>
						<summary>{user ? "User info" : "Signup/login"}</summary>
						<div className="row">
							<div className="row-item" id="controlls">
								{!user ? (
									<Auth
										// view="update_password"
										supabaseClient={supabaseClient}
										socialLayout="horizontal"
										socialButtonSize="small"
									/>
								) : (
									<>
										<div>
											<p>Email: {JSON.stringify(user.email, null, 2)}</p>
											<p>id: {JSON.stringify(user.id, null, 2)}</p>
											<button
												onClick={() => {
													supabaseClient.auth.signOut();
													setUserAdoptions([]);
													setUserWaterings([]);
												}}
											>
												Sign out
											</button>
										</div>
									</>
								)}
							</div>
						</div>
					</details>
				</div>
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
					<div className="row">
						<div className="tree-info">
							<div>
								<strong>Tree id:</strong>{" "}
								<span>
									{currentFeature ? currentFeature?.properties?.id : ""}
								</span>
							</div>
							<div>
								<strong>Tree Type:</strong>{" "}
								<span id="type">
									{currentFeature ? currentFeature?.properties?.tree_type : ""}
								</span>
							</div>
							<div>
								<strong>Tree Age:</strong>{" "}
								<span id="age">
									{currentFeature ? currentFeature?.properties?.age : ""}
								</span>
							</div>
							<div>
								<strong>Tree Height:</strong>{" "}
								<span id="height">
									{currentFeature ? currentFeature?.properties?.height : ""}
								</span>
							</div>
							<div>
								<button
									style={{ marginRight: "1em" }}
									onClick={(e) => {
										e.preventDefault();
										async function adoptTree({
											tree_id,
											user_id,
										}: {
											tree_id: number;
											user_id: string;
										}) {
											const { data, error } = await supabaseClient
												.from<
													Database["public"]["Tables"]["adoptions"]["Insert"]
												>("adoptions")
												.insert([{ tree_id, user_id }]);
											if (error) {
												console.error(error);
												return;
											}
											console.log(data);
											setUserAdoptions((prev) => {
												return [...prev, data[0] as Required<Adoption>];
											});
										}
										if (user) {
											adoptTree({
												tree_id: currentFeature?.properties?.id,
												user_id: user?.id,
											}).catch(console.error);
										}
									}}
									disabled={!currentFeature}
								>
									Adopt
								</button>

								<button
									onClick={() => {
										async function waterTree({
											tree_id,
											amount,
											user_id,
										}: {
											tree_id: number;
											amount: number;
											user_id: string;
										}) {
											const { data, error } = await supabaseClient
												.from<
													Database["public"]["Tables"]["waterings"]["Insert"]
												>("waterings")
												.insert([{ tree_id, amount, user_id }]);
											if (error) {
												console.error(error);
												return;
											}
											console.log(data);
											setUserWaterings((prev) => {
												return [...prev, data[0] as Required<Watering>];
											});
										}
										const amount = prompt(
											"How much water do you want to add?",
											"25",
										);
										if (user && amount) {
											waterTree({
												tree_id: currentFeature?.properties?.id,
												amount: parseInt(amount),
												user_id: user?.id,
											}).catch(console.error);
										}
									}}
									disabled={!currentFeature}
								>
									Water
								</button>
							</div>
						</div>
					</div>
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
											});
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
					<div className="row">
						<div className="row-item">adopt + water input</div>
					</div>
					<div className="row">
						<div className="row-item" id="" style={{ margin: "0" }}>
							<h2>Waterings</h2>
							{userWaterings.map((watering) => (
								<div key={watering.id}>
									<button
										onClick={() => {
											const pos = geojson?.features.filter(
												(feature) =>
													feature?.properties?.id === watering.tree_id,
											);
											if (pos && pos.length > 0) {
												console.log("fly to");
												map.current!.flyTo({
													//@ts-ignore
													center: pos[0].geometry.coordinates,
													zoom: 17,
												});
											}
										}}
										style={{ marginRight: "1em" }}
									>
										🎯
									</button>
									<button
										onClick={() => {
											console.log("unwater");
										}}
										style={{ marginRight: "1em" }}
									>
										❌
									</button>
									<span>
										Tree {watering.tree_id} got {watering.amount}l of water
									</span>
								</div>
							))}
						</div>
						<div className="row-item" id="" style={{ margin: "0" }}>
							<h2>Adoptions</h2>
							{userAdoptions.map((adoption) => (
								<div key={`${adoption.tree_id}:${adoption.user_id}`}>
									<button
										onClick={() => {
											const pos = geojson?.features.filter(
												(feature) =>
													feature?.properties?.id === adoption.tree_id,
											);
											if (pos && pos.length > 0) {
												console.log("fly to");
												map.current!.flyTo({
													//@ts-ignore
													center: pos[0].geometry.coordinates,
													zoom: 17,
												});
											}
										}}
										style={{ marginRight: "1em" }}
									>
										🎯
									</button>
									<button
										style={{ marginRight: "1em" }}
										onClick={() => {
											async function removeAdoption({
												user_id,
												tree_id,
											}: {
												user_id: string;
												tree_id: number;
											}) {
												const { data, error } = await supabaseClient
													.from("adoptions")
													.delete()
													.eq("user_id", user_id)
													.eq("tree_id", tree_id);
												if (error) {
													console.log(error);
												}

												console.log("unadopt", data);
												setUserAdoptions((prev) =>
													prev.filter(
														(adoption) =>
															adoption.user_id !== user_id &&
															adoption.tree_id !== tree_id,
													),
												);
											}
											removeAdoption({
												tree_id: adoption.tree_id,
												user_id: adoption.user_id,
											}).catch(console.error);
										}}
									>
										❌
									</button>
									<span style={{ marginRight: "1em" }}>{adoption.tree_id}</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
