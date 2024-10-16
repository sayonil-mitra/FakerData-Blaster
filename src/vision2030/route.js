import { Router } from "express";
import { ingestInSchema } from "../helpers/ingest-data.js";
import { deleteData } from "../helpers/delete-data.js";
import { generateDataForVision2030 } from "./controller.js";
import { schemas } from "./schemas.js";
import { addPurgeId, getFirstPurgeId, removePurgeId } from "../db/db.js";
import { purgeNames } from "../helpers/purge-names.js";

const router = Router();

const ingestHandler = async (firstLevel, incrementOnEachLevel) => {
  const purgeId = await addPurgeId(purgeNames.VISION2030);
  const data = await generateDataForVision2030(
    firstLevel,
    incrementOnEachLevel,
    purgeId
  );
  const keys = [...Object.keys(data)];
  const ingestionPromises = [];

  keys.forEach((key) => {
    console.log(key, schemas[key], keys);
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
    const incrementOnEachLevel = parseInt(req.query.incrementOnEachLevel) || 5;
    const results = await ingestHandler(firstLevel, incrementOnEachLevel);

    return res.json(results);
  } catch (error) {
    return res.status(500).json({
      status: "Failed",
      errorMessage: error.message,
    });
  }
});

const purgeHandler = async (purgeId) => {
  const purgePromises = [];
  const keys = [...Object.keys(schemas)];

  keys.forEach((key) => {
    purgePromises.push(deleteData(schemas[key], purgeId));
  });

  const purgeResponses = await Promise.allSettled(purgePromises);

  const results = {
    success: [],
    failed: [],
    purgeId,
  };

  purgeResponses.forEach((result) => {
    if (result.status === "fulfilled") {
      const { status, msg } = result.value.data;

      results.success.push({
        status,
        msg,
      });
    } else {
      results.failed.push({
        error: result.reason,
      });
    }
  });

  return results;
};

router.post("/purge", async (req, res) => {
  try {
    const purgeId = await getFirstPurgeId(purgeNames.VISION2030);
    console.log(purgeId)

    if (!purgeId) {
      return res.status(404).json({
        status: false,
        message: "No purgeId found for Vision2030",
      });
    }

    const results = await purgeHandler(purgeId);

    await removePurgeId(purgeId);

    return res.json(results);
  } catch (error) {
    return res.status(500).json({
      status: "Failed",
      errorMessage: error.message,
    });
  }
});

router.post("/purge/:purgeId", async (req, res) => {
  try {
    const { purgeId } = req.params;

    if (!purgeId) {
      return res.status(404).json({
        status: false,
        message: "No purgeId found for vision2030",
      });
    }

    const results = await purgeHandler(purgeId);

    await removePurgeId(purgeId);

    return res.json(results);
  } catch (error) {
    return res.status(500).json({
      status: "Failed",
      errorMessage: error.message,
    });
  }
});

export default router;
