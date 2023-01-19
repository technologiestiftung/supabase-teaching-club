import { SupabaseClient } from "@supabase/auth-helpers-react";
import { useCallback, useEffect, useState } from "react";
import { createFeatureCollection } from "../../utils/create-feature-colection";
export function useGeojson(supabaseClient: SupabaseClient) {
	const [geojson, setGeojson] = useState<
		GeoJSON.FeatureCollection<GeoJSON.Geometry> | undefined
	>(undefined);
	const memoizedInitGeojson = useCallback(initGeojson, [supabaseClient]);
	async function initGeojson() {
		const { data, error } = await supabaseClient.from("trees").select("*");
		if (error) {
			throw error;
		}
		const featureCollection = createFeatureCollection(data);

		setGeojson((_) => {
			return featureCollection;
		});
	}
	useEffect(() => {
		memoizedInitGeojson().catch(console.error);
	}, [memoizedInitGeojson]);
	return { geojson, setGeojson, initGeojson };
}
