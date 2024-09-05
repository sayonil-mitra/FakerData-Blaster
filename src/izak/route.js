import { Router } from "express";
import { generateHomeAutomationData } from "./controller.js";

// Create a new router instance
const router = Router();

// Define the route to handle POST requests
router.post("/", async (req, res) => {
  try {
    // Destructure values from req.body
    const { totalCount, incrementEachLevel, purgeId } = req.body;

    // Input validation: Check if required fields are present
    if (!totalCount || !incrementEachLevel || !purgeId) {
      return res.status(400).json({ message: "totalCount, incrementEachLevel, purgeId can't be empty." });
    }

    // Call the function to process the data
    await generateHomeAutomationData(totalCount, incrementEachLevel, purgeId);

    // Respond with success
    res.status(200).json({ message: "Success: Izak synthetic data generated!" });
  } catch (error) {
    // Catch and handle any errors
    console.error("Error occurred:", error);
    res
      .status(500)
      .json({ message: "An error occurred while processing the request" });
  }
});

export default router;
