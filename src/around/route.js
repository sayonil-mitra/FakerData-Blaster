import {
	createUser,
	createEvent,
	createAlert,
	createBusiness,
	createEventOrganizer,
	createGasStation,
	createLocalAuthority,
	createLocation,
	createPromotion,
	createWeatherReport,
	createWeatherStation,
} from "./helpers.js"; // Import helpers

import fs from "fs";

// Helper to generate a random number between min and max
const getRandomNumber = (min, max) =>
	Math.floor(Math.random() * (max - min + 1)) + min;

const purgeIds = new Set();

export function generateData() {
	// Initialize data storage
	const data = {
		Users: [],
		Locations: [],
		LocalAuthorities: [],
		Businesses: [],
		WeatherStations: [],
		Events: [],
		Alerts: [],
		EventOrganizers: [],
		GasStations: [],
		Promotions: [],
		WeatherReports: [],
	};

	// Step 1: Generate Users (Top Level)
	for (let i = 0; i < 1000; i++) {
		const user = createUser();
		data.Users.push(user);
	}

	// Step 2: Generate Locations and Local Authorities
	for (let i = 0; i < 200; i++) {
		const location = createLocation();
		const authority = createLocalAuthority();
		data.Locations.push(location);
		data.LocalAuthorities.push(authority);
	}

	// Step 3: Generate Businesses and Weather Stations
	for (let i = 0; i < 200; i++) {
		const business = createBusiness();
		const location = data.Locations[i];
		const weatherStation = createWeatherStation(location.location_id);
		data.Businesses.push(business);
		data.WeatherStations.push(weatherStation);
	}

	// Step 4: Generate Events, Alerts, Organizers, and Gas Stations (Second Level)
	data.Users.forEach((user) => {
		for (let i = 0; i < 5; i++) {
			const location =
				data.Locations[getRandomNumber(0, data.Locations.length - 1)];
			const authority =
				data.LocalAuthorities[
					getRandomNumber(0, data.LocalAuthorities.length - 1)
				];

			// Generate Events
			const event = createEvent(
				user.user_id,
				location.location_id,
				authority.authority_id
			);
			data.Events.push(event);

			// Generate Alerts
			const alert = createAlert(user.user_id, authority.authority_id);
			data.Alerts.push(alert);

			// Generate Event Organizers
			const organizer = createEventOrganizer(event.event_id);
			data.EventOrganizers.push(organizer);

			// Generate Gas Stations
			const gasStation = createGasStation(
				user.user_id,
				location.location_id
			);
			data.GasStations.push(gasStation);
		}
	});

	// Step 5: Generate Promotions for each Business
	data.Businesses.forEach((business) => {
		for (let i = 0; i < 5; i++) {
			const promotion = createPromotion(business.business_id);
			data.Promotions.push(promotion);
		}
	});

	// Step 6: Generate Weather Reports for each Weather Station (Third Level)
	data.WeatherStations.forEach((station) => {
		for (let i = 0; i < 125; i++) {
			const weatherReport = createWeatherReport(station.station_id);
			data.WeatherReports.push(weatherReport);
		}
	});

	// Save Generated Data to JSON File
	fs.writeFileSync("relational_data.json", JSON.stringify(data, null, 2));

	console.log("Relational data generated and stored in relational_data.json");
}
