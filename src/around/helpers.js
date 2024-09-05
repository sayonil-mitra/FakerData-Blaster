import { faker } from "../faker/faker.js";
import { eventNames } from "./event-names.js";

const createUser = (purgeId) => ({
	user_id: faker.string.uuid(),
	name: faker.person.fullName(),
	email: faker.internet.email(),
	phone: faker.phone.number(),
	address: {
		street: faker.location.streetAddress(),
		city: faker.location.city(),
		state: faker.location.state(),
		country: faker.location.country(),
		postalCode: faker.location.zipCode(),
	},
	purge_id: purgeId,
});

// Event Entity Generator
const createEvent = (userId, locationId, organizerId, purgeId) => ({
	event_id: faker.string.uuid(),
	title: faker.lorem.words(3),
	description: faker.lorem.sentence(),
	event_date: faker.date.future().toISOString().split("T")[0],
	event_start_time: faker.date.recent(),
	event_end_time: faker.date.recent(),
	location: {
		street: faker.location.streetAddress(),
		city: faker.location.city(),
		state: faker.location.state(),
		country: faker.location.country(),
		postalCode: faker.location.zipCode(),
	},
	total_capacity: faker.random.getRandomNumber(50, 500),
	total_attended: faker.random.getRandomNumber(0, 50),
	user_id: userId,
	location_id: locationId,
	organizer_id: organizerId,
	event_name: faker.random.arrayElement(eventNames),
	purge_id: purgeId,
});

// Alert Entity Generator
const createAlert = (userId, authorityId, purgeId) => ({
	alert_id: faker.string.uuid(),
	message: faker.lorem.sentence(),
	alert_time: faker.date.recent(),
	alert_status: faker.random.arrayElement(["Active", "Inactive", "Resolved"]),
	user_id: userId,
	authority_id: authorityId,
	purge_id: purgeId,
});

// Event Organizer Entity Generator
const createEventOrganizer = (eventId, purgeId) => ({
	organizer_id: faker.string.uuid(),
	name: faker.person.fullName(),
	event_id: eventId,
	contact_info: faker.phone.number(),
	location: {
		street: faker.location.streetAddress(),
		city: faker.location.city(),
		state: faker.location.state(),
		country: faker.location.country(),
		postalCode: faker.location.zipCode(),
	},
	purge_id: purgeId,
});

// Business Entity Generator
const createBusiness = (purgeId) => ({
	business_id: faker.string.uuid(),
	name: faker.company.name(),
	address: {
		street: faker.location.streetAddress(),
		city: faker.location.city(),
		state: faker.location.state(),
		country: faker.location.country(),
		postalCode: faker.location.zipCode(),
	},
	purge_id: purgeId,
});

// Promotion Entity Generator
const createPromotion = (businessId, purgeId) => ({
	promotion_id: faker.string.uuid(),
	description: faker.lorem.sentence(),
	start_date: faker.date.future().toISOString().split("T")[0],
	end_date: faker.date.future().toISOString().split("T")[0],
	promotion_status: faker.random.arrayElement([
		"Active",
		"Expired",
		"Upcoming",
	]),
	business_id: businessId,
	purge_id: purgeId,
});

// Location Entity Generator
const createLocation = (purgeId) => ({
	location_id: faker.string.uuid(),
	address: {
		street: faker.location.streetAddress(),
		city: faker.location.city(),
		state: faker.location.state(),
		country: faker.location.country(),
		postalCode: faker.location.zipCode(),
	},
	country: faker.location.country(),
	city: faker.location.city(),
	state: faker.location.state(),
	postal_code: faker.location.zipCode(),
	purge_id: purgeId,
});

// Weather Station Entity Generator
const createWeatherStation = (locationId, purgeId) => ({
	station_id: faker.string.uuid(),
	location: faker.location.streetAddress(),
	latitude: faker.location.latitude(),
	longitude: faker.location.longitude(),
	location_id: locationId,
	purge_id: purgeId,
});

// Weather Report Entity Generator
const createWeatherReport = (stationId, purgeId) => ({
	report_id: faker.string.uuid(),
	station_id: stationId,
	temperature: faker.random.getRandomNumber(-30, 50),
	wind_speed: faker.random.getRandomNumber(0, 100),
	wind_direction: faker.random.arrayElement(["N", "S", "E", "W"]),
	precipitation: faker.random.getRandomNumber(0, 100),
	snow: faker.random.getRandomNumber(0, 100),
	rain: faker.random.getRandomNumber(0, 100),
	air_quality: faker.random.getRandomNumber(0, 500),
	report_time: faker.date.recent(),
	purge_id: purgeId,
});

// Local Authority Entity Generator
const createLocalAuthority = (purgeId) => ({
	authority_id: faker.string.uuid(),
	name: faker.company.name(),
	jurisdiction: faker.location.city(),
	contact_info: faker.phone.number(),
	purge_id: purgeId,
});

// Gas Station Entity Generator
const createGasStation = (userId, locationId, purgeId) => ({
	check_id: faker.string.uuid(),
	price: parseFloat(faker.commerce.price(1, 5)),
	gas_type: faker.random.arrayElement(["Petrol", "Diesel", "Electric"]),
	user_id: userId,
	check_time: faker.date.recent(),
	location_id: locationId,
	gas_station_name: faker.company.name(),
	purge_id: purgeId,
});

export {
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
};
