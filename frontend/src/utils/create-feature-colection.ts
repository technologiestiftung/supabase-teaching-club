export function createFeatureCollection(
	data: {
		geom: unknown;
		id: number;
		[key: string]: any;
	}[],
) {
	if (!Array.isArray(data)) {
		throw new Error("Data is not an array");
	}
	const features = data.map((row: unknown) => {
		if (typeof row !== "object" || row === null) {
			throw new Error("Row is not an object");
		}

		// check if property geom exists
		if (!("geom" in row)) {
			throw new Error("Row does not have a geom property");
		}
		// check if property id exists
		if (!("id" in row)) {
			throw new Error("Row does not have an id property");
		}
		if (typeof row.geom !== "object" || row.geom === null) {
			throw new Error("Row.geom is not an object");
		}
		// check if property geom is a GeoJSON.Geometry
		if (!("coordinates" in row.geom)) {
			throw new Error("Row.geom is not a GeoJSON.Geometry");
		}

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
