import express from "express";
import aroundRouter from "./src/around/route.js";
import aegisData from "./src/Aegis/routesAegis.js"
import izakRouter from "./src/izak/route.js";
import aegisDataRouter from "./src/aegisAppData/routes.js"
import { config } from "dotenv";
import { initDB } from "./src/db/db.js";
config();

// Initialize the Express app
const app = express();
app.use(express.json())

// Define a simple route
app.get("/test", (req, res) => {
	res.send("service running!");
});

app.use("/around", aroundRouter);
app.use("/aegis", aegisData);
app.use("/izak", izakRouter);
app.use("/aegisAppData", aegisDataRouter);

const PORT = process.env.PORT || 3000;
initDB().then(() => {
	app.listen(PORT, () => {
		console.log(`Server is running on port ${PORT}`);
	});
});
