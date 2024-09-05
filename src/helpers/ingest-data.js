import api from "../axios/axios.js";

export function ingestInSchema(schemaId, data) {
	if (!schemaId) {
		throw new Error("SchemaId is required");
	}
	return api.post(
		`/tf-entity-ingestion/v1.0/schemas/${schemaId}/instances`,
		data
	);
}
