import axios from "axios";
import { config } from "dotenv";
config();

// Create an axios instance with default settings
const api = axios.create({
	timeout: 600000,
	baseURL: process.env.PI_BASE_PATH,
	headers: {
		"Content-Type": "application/json",
		Authorization: `Bearer ${process.env.PI_TOKEN}`,
	},
});

// Request interceptor
api.interceptors.request.use(
	(config) => {
		console.log(
			`Outgoing request: ${config.method.toUpperCase()} ${config.url}`
		);
		return config;
	},
	(error) => {
		console.error("Request error:", error);
		return Promise.reject(error);
	}
);

// Response interceptor
api.interceptors.response.use(
	(response) => {
		console.log(
			"Response ",
			response.status,
			` from: ${response.config.url}`
		);
		return response;
	},
	(error) => {
		console.error("Response error:", error);
		return Promise.reject(error);
	}
);

export default api;
