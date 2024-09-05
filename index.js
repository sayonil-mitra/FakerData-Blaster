import express from "express";
import aroundRouter from "./src/around/route.js";
import { config } from "dotenv";
config();

// Initialize the Express app
const app = express();

// Define a simple route
app.get("/test", (req, res) => {
	res.send("service running!");
});

app.use("/around", aroundRouter);

// Define another route
// app.get("/api", (req, res) => {
//   res.json({ message: "Hello from the API!" });
// });

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
