import { SupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";
import { createFeatureCollection } from "../../utils/create-feature-colection";

export function useDistricts(supabaseClient: SupabaseClient) {
	const [districts, setDistricts] = useState<
		GeoJSON.FeatureCollection<GeoJSON.Geometry> | undefined
	>(undefined);
	useEffect(() => {
		async function initDistricts() {
			const { data, error } = await supabaseClient
				.from("districts")
				.select("*");
			if (error) {
				throw error;
			}
			const featureCollection = createFeatureCollection(data);
			setDistricts((_) => {
				return featureCollection;
			});
		}
		initDistricts().catch(console.error);
	}, [supabaseClient]);
	return districts;
}
