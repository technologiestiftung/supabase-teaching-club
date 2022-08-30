import type { NextPage } from "next";
import { useUser } from "@supabase/supabase-auth-helpers/react";
import { supabaseClient } from "@supabase/supabase-auth-helpers/nextjs";
import { forwardRef, useEffect, useRef, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl, { GeoJSONSource, Map } from "mapbox-gl";
import { Feature } from "geojson";
import { useForm, useField, splitFormProps } from "react-form";

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

const Home: NextPage = () => {
	const map = useRef<Map | null>(null);
	// TO MAKE THE MAP APPEAR YOU MUST
	// ADD YOUR ACCESS TOKEN FROM
	// https://account.mapbox.com

	// const getGeoJson = async () => {
	// 	const delayPromise = (ms: number) =>
	// 		new Promise((res) => setTimeout(res, ms));
	// 	await delayPromise(1000);

	// 	return {
	// 		type: "FeatureCollection",
	// 		features: [
	// 			{
	// 				type: "Feature",
	// 				geometry: {
	// 					type: "Point",
	// 					coordinates: [13.404954, 52.520008],
	// 				},
	// 			},
	// 		],
	// 	} as GeoJSON.FeatureCollection<GeoJSON.Geometry>;
	// };

	const { user, error } = useUser();
	const [data, setData] = useState<any[] | null>(null);
	const [geojson, setGeojson] = useState<
		GeoJSON.FeatureCollection<GeoJSON.Geometry> | undefined
	>(undefined);
	const [districts, setDistricts] = useState<
		GeoJSON.FeatureCollection<GeoJSON.Geometry> | undefined
	>(undefined);
	const [currentLoction, setcurrentLoction] = useState<GeoJSON.Point>();
	const [currentFeature, setcurrentFeature] = useState<Feature | null>(null);
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
				if (
					Object.hasOwn(e, "coords") &&
					Object.hasOwn(e.coords, "longitude") &&
					Object.hasOwn(e.coords, "latitude")
				) {
					setcurrentLoction({
						type: "Point",
						coordinates: [e.coords.longitude, e.coords.latitude],
					});
				}

				// console.log("lng:" + e.coords.longitude + ", lat:" + e.coords.latitude);
			});
		});

		map.current.on("click", "trees", function (e) {
			if (!e.features) return;

			const features = e.features;

			console.log(features[0].id);
			setcurrentFeature(features[0]);

			if (selectedTreeId) {
				map.current?.setFeatureState(
					{
						source: "trees",
						// sourceLayer: "trees",
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
						// sourceLayer: "trees",
						id: e.features[0].id,
					},
					{ selected: true },
				);
			}
		});
	}, []);

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
		initGeojson().catch(console.error);
	}, []);
	useEffect(() => {
		if (!map) return;
		if (!map.current) return;
		if (!geojson) return;
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

		(map.current.getSource("trees") as GeoJSONSource).setData(geojson);
	}, [geojson]);

	useEffect(() => {
		async function loadData() {
			const { data } = await supabaseClient.from("test").select("*");
			setData(data);
		}
		// Only run query once user is logged in.
		if (user) loadData();
	}, [user]);

	// if (!user)
	// 	return (
	// 		<>
	// 			{error && <p>{error.message}</p>}
	// 			<Auth
	// 				// view="update_password"
	// 				supabaseClient={supabaseClient}
	// 				socialLayout="horizontal"
	// 				socialButtonSize="xlarge"
	// 			/>
	// 		</>
	// 	);

	// return (
	// 	<>
	// 		<button onClick={() => supabaseClient.auth.signOut()}>Sign out</button>
	// 		<p>user:</p>
	// 		<pre>{JSON.stringify(user, null, 2)}</pre>
	// 		<p>client-side data fetching with RLS</p>
	// 		<pre>{JSON.stringify(data, null, 2)}</pre>
	// 	</>
	// );
	return (
		<>
			<div className="container">
				<div className="column">
					<div className="row">
						<div className="row-item" id="controlls">
							<div>Login/Signup open Modal</div>
						</div>
						<div className="row-item" id="controlls">
							<div>logout</div>
							<div>userinfo</div>
							<div>delete</div>
						</div>
					</div>
				</div>
				<div className="column">
					<div className="row">
						<div className="map row-item" id="map"></div>
					</div>
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
									{currentFeature ? currentFeature?.properties?.type : ""}
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
						</div>
					</div>
					<div className="row">
						<div className="row-item">
							<form>
								<label htmlFor="radius">Radius in meters: </label>
								<input type="number" name="radius" id="radius" />
								<button
									type="submit"
									className="btn"
									onClick={(e) => {
										e.preventDefault();
									}}
								>
									Filter
								</button>
							</form>
						</div>
					</div>
					<div className="row">
						<div className="row-item">
							show current tree infos and adopt + water input
						</div>
					</div>
					<div className="row">
						<div className="row-item" id="waterings">
							populate with waterings
						</div>
						<div className="row-item" id="adoptions">
							populate with adoptions
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
