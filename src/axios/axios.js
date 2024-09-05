import axios from "axios";
import { config } from "dotenv";
config();

// Create an axios instance with default settings
const api = axios.create({
	baseURL: process.env.PI_BASE_PATH,
	headers: {
		"Content-Type": "application/json",
		Authorization: `Bearer ${process.env.PI_TOKEN}`,
	},
});

export default api;
