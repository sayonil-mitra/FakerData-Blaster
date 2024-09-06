import { Router } from "express";
import { ingestInSchema } from "../helpers/ingest-data.js";
import { deleteData } from "../helpers/delete-data.js";
import { generateAegisAppData } from "./controller.js";
import { schemas } from "./schemas.js";
import {
  addPurgeId,
  getFirstPurgeId,
  removePurgeId,
  getPurgeId,
} from "../db/db.js";
import { purgeNames } from "../helpers/purge-names.js";

const router = Router();

const ingestHandler = async (firstLevel, incrementOnEachLevel) => {
  const purgeId = await addPurgeId(purgeNames.AEGISAPPDATA);
  const data = generateAegisAppData(purgeId, firstLevel, incrementOnEachLevel);
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
    const purgeId = await getFirstPurgeId(purgeNames.AEGISAPPDATA);

    if (!purgeId) {
      return res.status(404).json({
        status: false,
        message: "No purgeId found for around",
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
        message: "No purgeId found for around",
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

// import { Router } from "express";
// import { generateAegisData } from "./controller.js";

// // Create a new router instance
// const router = Router();

// // Define the route to handle POST requests
// router.post("/", async (req, res) => {
//   try {
//     // Destructure values from req.body
//     console.log(req.body);

//     const { totalCount, incrementEachLevel, purgeId } = req.body;

//     // Input validation: Check if required fields are present
//     if (!totalCount || !incrementEachLevel || !purgeId) {
//       return res
//         .status(400)
//         .json({
//           message: "totalCount, incrementEachLevel, purgeId can't be empty.",
//         });
//     }

//     // Call the function to process the data
//     let data = generateAegisData(totalCount, incrementEachLevel, purgeId);

//     // Respond with success
//     res
//       .status(200)
//       .json({
//         message: "Success: Aegis synthetic data generated!",
//         data: data,
//       });
//   } catch (error) {
//     // Catch and handle any errors
//     console.error("Error occurred:", error);
//     res
//       .status(500)
//       .json({ message: "An error occurred while processing the request" });
//   }
// });

// export default router;
