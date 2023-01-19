import { SupabaseClient, User } from "@supabase/auth-helpers-react";
import { SetStateAction } from "react";
import { MapboxGeoJSONFeature } from "mapbox-gl";
import { Adoption, Watering } from "../pages";

export const TreeInfo = ({
	currentFeature,
	supabaseClient,
	setUserWaterings,
	setUserAdoptions,
	user,
}: {
	currentFeature: MapboxGeoJSONFeature | null;
	supabaseClient: SupabaseClient;
	user: User | null;
	setUserAdoptions: (value: SetStateAction<Adoption[]>) => void;
	setUserWaterings: (value: SetStateAction<Watering[]>) => void;
}) => {
	return (
		<div className="tree-info">
			<div>
				<strong>Tree id:</strong>{" "}
				<span>{currentFeature ? currentFeature?.properties?.id : ""}</span>
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
								.from("adoptions")
								.insert([{ tree_id, user_id }])
								.select();
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
								.from("waterings")
								.insert([{ tree_id, amount, user_id }])
								.select();
							if (error) {
								console.error(error);
								return;
							}
							console.log(data);
							setUserWaterings((prev) => {
								return [...prev, data[0] as Required<Watering>];
							});
						}
						const amount = prompt("How much water do you want to add?", "25");
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
	);
};
