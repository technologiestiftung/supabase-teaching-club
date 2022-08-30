export function createFeatureCollection<
	T extends { geom: GeoJSON.Geometry; id: number },
>(data: T[]) {
	const features = data.map((row) => {
		const { geom, id, ...others } = row;
		return {
			type: "Feature",
			geometry: geom as GeoJSON.Geometry,
			id,
			properties: { id, ...others },
		};
	});
	const featureCollection = {
		type: "FeatureCollection",
		features,
	} as GeoJSON.FeatureCollection<GeoJSON.Geometry>;
	return featureCollection;
}
