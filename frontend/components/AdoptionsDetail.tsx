import { SupabaseClient } from "@supabase/auth-helpers-react";
import { MutableRefObject, SetStateAction } from "react";
import { Adoption } from "../src/common/types";

export const AdoptonsDetail = ({
	userAdoptions,
	supabaseClient,
	setUserAdoptions,
	geojson,
	map,
}: {
	map: MutableRefObject<mapboxgl.Map | null>;
	geojson: GeoJSON.FeatureCollection<GeoJSON.Geometry> | undefined;
	userAdoptions: Adoption[];
	supabaseClient: SupabaseClient;
	setUserAdoptions: (value: SetStateAction<Adoption[]>) => void;
}) => {
	return (
		<>
			<strong>Adoptions</strong>
			{userAdoptions.map((adoption) => (
				<div key={`${adoption.tree_id}:${adoption.user_id}`}>
					<button
						onClick={() => {
							const pos = geojson?.features.filter(
								(feature) => feature?.properties?.id === adoption.tree_id,
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
		</>
	);
};
