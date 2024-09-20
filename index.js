import express from "express";
import aroundRouter from "./src/around/route.js";
import aegisData from "./src/Aegis/routesAegis.js";
import izakRouter from "./src/izak/route.js";
import aegisDataRouter from "./src/aegisAppData/routes.js";;
import vision2030Router from "./src/vision2030/route.js";
import aroundDataRouter from "./src/aroundAPPData/routes.js";
import tatweerProgramRouter from "./src/tatweerProgram/route.js";
import noorSystemDataRouter from "./src/Noor System/routes.js";
import moeDataRouter from "./src/minOfEdu/routesMOE.js"
import schoolProgramRouter from "./src/School/routes.js"
import contentProviderRouter from "./src/contentProvider/routes.js"
import studentRouter from "./src/Student/routes.js"
import { config } from "dotenv";
import { initDB } from "./src/db/db.js";
import morgan from "morgan";
config();

// Initialize the Express app
const app = express();
app.use(express.json());
app.use(morgan("combined"));

// Define a simple route
app.get("/test", (req, res) => {
  res.send("service running!");
});

app.use("/around", aroundRouter);
app.use("/aegis", aegisData);
app.use("/izak", izakRouter);
app.use("/aegisAppData", aegisDataRouter);
app.use("/vision2030", vision2030Router);
app.use("/aroundAppData", aroundDataRouter);
app.use("/tatweerProgram", tatweerProgramRouter);
app.use("/noorSystemData", noorSystemDataRouter);
app.use("/moe",moeDataRouter)
app.use("/schoolProgram", schoolProgramRouter);
app.use("/contentProvider", contentProviderRouter);
app.use("/studentData", studentRouter);


const PORT = process.env.PORT || 3000;
initDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
