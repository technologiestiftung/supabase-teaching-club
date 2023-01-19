import { MutableRefObject } from "react";
import { Watering } from "../src/common/types";

export const WateringsDetail = ({
	userWaterings,
	map,
	geojson,
}: {
	userWaterings: Watering[];
	map: MutableRefObject<mapboxgl.Map | null>;
	geojson: GeoJSON.FeatureCollection<GeoJSON.Geometry> | undefined;
}) => {
	return (
		<>
			<strong>Waterings</strong>
			{userWaterings.map((watering) => (
				<div key={watering.id}>
					<button
						onClick={() => {
							const pos = geojson?.features.filter(
								(feature) => feature?.properties?.id === watering.tree_id,
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
		</>
	);
};
