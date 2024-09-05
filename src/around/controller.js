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
} from "./helpers.js";
import { getRandomNumber } from "../faker/faker.js";

export function generateData(totalCount = 1000, incrementEachLevel = 5) {
	// Initialize data storage
	const data = {
		users: [],
		locations: [],
		localAuthorities: [],
		businesses: [],
		weatherStations: [],
		events: [],
		alerts: [],
		eventOrganizers: [],
		gasStations: [],
		promotions: [],
		weatherReports: [],
	};

	// Step 1: Generate users (Top Level)
	for (let i = 0; i < totalCount; i++) {
		const user = createUser();
		data.users.push(user);
	}

	// Step 2: Generate locations and Local Authorities
	for (let i = 0; i < parseInt(totalCount); i++) {
		const location = createLocation();
		const authority = createLocalAuthority();
		data.locations.push(location);
		data.localAuthorities.push(authority);
	}

	// Step 3: Generate businesses and Weather Stations
	for (let i = 0; i < parseInt(totalCount); i++) {
		const business = createBusiness();
		const location = data.locations[i];
		const weatherStation = createWeatherStation(location.location_id);
		data.businesses.push(business);
		data.weatherStations.push(weatherStation);
	}

	// Step 4: Generate events, alerts, Organizers, and Gas Stations (Second Level)
	data.users.forEach((user) => {
		for (let i = 0; i < incrementEachLevel; i++) {
			const location =
				data.locations[getRandomNumber(0, data.locations.length - 1)];
			const authority =
				data.localAuthorities[
					getRandomNumber(0, data.localAuthorities.length - 1)
				];

			// Generate events
			const event = createEvent(
				user.user_id,
				location.location_id,
				authority.authority_id
			);
			data.events.push(event);

			// Generate alerts
			const alert = createAlert(user.user_id, authority.authority_id);
			data.alerts.push(alert);

			// Generate Event Organizers
			const organizer = createEventOrganizer(event.event_id);
			data.eventOrganizers.push(organizer);

			// Generate Gas Stations
			const gasStation = createGasStation(
				user.user_id,
				location.location_id
			);
			data.gasStations.push(gasStation);
		}
	});

	// Step 5: Generate promotions for each Business
	data.businesses.forEach((business) => {
		for (let i = 0; i < incrementEachLevel; i++) {
			const promotion = createPromotion(business.business_id);
			data.promotions.push(promotion);
		}
	});

	// Step 6: Generate Weather Reports for each Weather Station (Third Level)
	data.weatherStations.forEach((station) => {
		for (let i = 0; i < incrementEachLevel; i++) {
			const weatherReport = createWeatherReport(station.station_id);
			data.weatherReports.push(weatherReport);
		}
	});

	return data;
}
