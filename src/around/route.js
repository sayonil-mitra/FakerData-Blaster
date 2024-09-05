import { Router } from "express";
import { ingestInSchema } from "../helpers/ingest-data.js";
import { generateData } from "./controller.js";
import { schemas } from "./schemas.js";
import { addPurgeId } from "../db/db.js";
import { purgeNames } from "../helpers/purge-names.js";

const router = Router();

const ingestHandler = async (firstLevel, incrementOnEachLevel) => {
	const purgeId = await addPurgeId(purgeNames.AROUND);
	const data = generateData(purgeId, firstLevel, incrementOnEachLevel);
	const keys = [...Object.keys(data)];

	const ingestionPromises = [];

	keys.forEach((key) => {
		ingestionPromises.push(ingestInSchema(schemas[key], data[key]));
	});

	const ingestionResponses = await Promise.allSettled(ingestionPromises);

	const results = {
		success: [],
		failed: [],
		purgeId,
	};

	ingestionResponses.forEach((result) => {
		if (result.status === "fulfilled") {
			const { schemaID, succeededCount } = result.value.data;

			results.success.push({
				schemaId: schemaID,
				succeededCount: succeededCount,
			});
		} else {
			results.failed.push({
				error: result.reason,
			});
		}
	});

	return results;
};

router.post("/ingest", async (req, res) => {
	try {
		const purge = req.query.purge === "true";
		const firstLevel = parseInt(req.query.firstLevel) || 1000;
		const incrementOnEachLevel =
			parseInt(req.query.incrementOnEachLevel) || 5;

		const results = ingestHandler(firstLevel, incrementOnEachLevel);

		res.json(results);
	} catch (error) {
		res.status(500).json({
			status: "Failed",
			errorMessage: error.message,
		});
	}
});

export default router;
