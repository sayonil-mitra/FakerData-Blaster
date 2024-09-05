import api from "../axios/axios.js";

export function deleteData(schemaId, purgeId) {
	if (!schemaId) {
		throw new Error("SchemaId is required");
	}
	if (!purgeId) {
		throw new Error("purgeId is required");
	}

	return api.delete(
		`/tf-entity-ingestion/v1.0/schemas/${schemaId}/instances`,
		{
			data: { purge_id: purgeId },
		}
	);
}
