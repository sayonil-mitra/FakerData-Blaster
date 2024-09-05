import { Router } from "express";
import { ingestInSchema } from "../helpers/ingest-data.js";
import { generateData } from "./controller.js";
import { schemas } from "./schemas.js";
import { addPurgeId } from "../db/db.js";
import { purgeNames } from "../helpers/purge-names.js";

const router = Router();

router.post("/ingest", (req, res) => {
	const purge = req.query.purge === "true";
	const firstLevel = parseInt(req.query.firstLevel) || 1000;
	const incrementOnEachLevel = parseInt(req.query.incrementOnEachLevel) || 5;

	const purgeId = addPurgeId(purgeNames.AROUND);
	const data = generateData(purgeId, firstLevel, incrementOnEachLevel);

	const ingestionPromises = [];

	Object.keys(data).forEach((key) => {
		ingestionPromises.push(ingestInSchema(schemas[key], data[key]));
	});

	const ingestionResponses = Promise.allSettled(ingestionPromises);

	res.json(ingestionResponses);
});

export default router;
