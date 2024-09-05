import { faker } from "@faker-js/faker";
import fs from "fs";

// Helper function to generate a random number between min and max
const getRandomNumber = (min, max) =>
	Math.floor(Math.random() * (max - min + 1)) + min;

faker.random = {
	arrayElement: (arr) => {
		let choice = getRandomNumber(0, arr.length - 1);
		return arr[choice];
	},
};

export function test() {
	// Generate Incidents
	const incidents = Array.from({ length: 10 }, () => ({
		incident_id: faker.string.uuid(),
		incident_name: faker.company.catchPhrase(),
		incident_type: {
			type: faker.random.arrayElement(["Fire", "Flood", "Earthquake"]),
		},
		incident_coordinates: {
			lat: faker.location.latitude(),
			lng: faker.location.longitude(),
		},
		incident_affected_area: { area: faker.location.city() },
		location: faker.location.streetAddress(),
		issuing_authority: faker.company.name(),
		description: faker.lorem.paragraph(),
		status: faker.random.arrayElement(["Open", "Closed", "In Progress"]),
		officer_in_charge: faker.person.fullName(),
		severity: faker.random.arrayElement(["Low", "Medium", "High"]),
		latest_report: faker.lorem.sentence(),
		date: faker.date.past().toISOString().split("T")[0],
		time: faker.date.past(),
		language: faker.random.arrayElement(["English", "Spanish", "French"]),
		cityname: faker.location.city(),
	}));

	// Generate NOCs
	const nocs = Array.from({ length: 5 }, () => ({
		noc_id: faker.string.uuid(),
		noc_name: faker.company.name(),
		noc_location: faker.location.city(),
	}));

	// Generate Responders
	const responders = incidents.flatMap((incident) =>
		Array.from({ length: getRandomNumber(3, 6) }, () => ({
			fr_id: faker.string.uuid(),
			name: faker.person.fullName(),
			officer_id: faker.string.uuid(),
			type: faker.random.arrayElement([
				"Police",
				"Firefighter",
				"Paramedic",
			]),
			category: faker.random.arrayElement(["Ground", "Air", "Water"]),
			speed: faker.number.int({ min: 20, max: 100 }) + " km/h",
			ETA: faker.date.recent().toISOString().split("T")[1],
			status: faker.random.arrayElement([
				"Active",
				"Inactive",
				"In Transit",
			]),
			assets: { equipment: faker.commerce.productName() },
			current_coordinates: {
				lat: faker.location.latitude(),
				lng: faker.location.longitude(),
			},
			incident_coordinates: incident.incident_coordinates,
			language: faker.random.arrayElement([
				"English",
				"Spanish",
				"French",
			]),
			cityname: faker.location.city(),
			incident_id: incident.incident_id,
			noc_id: faker.random.arrayElement(nocs.map((noc) => noc.noc_id)),
		}))
	);

	// Generate Civilians
	const civilians = incidents.flatMap((incident) =>
		Array.from({ length: getRandomNumber(3, 6) }, () => ({
			civilian_id: faker.string.uuid(),
			name: faker.person.fullName(),
			sender_type: faker.random.arrayElement(["Citizen", "Authority"]),
			message: faker.lorem.sentence(),
			time: faker.date.past(),
			date: faker.date.past().toISOString().split("T")[0],
			id: faker.string.uuid(),
			images: { url: faker.image.url() },
			videos: { url: faker.internet.url() },
			message_type: faker.random.arrayElement(["Text", "Image", "Video"]),
			language: faker.random.arrayElement([
				"English",
				"Spanish",
				"French",
			]),
			incident_id: incident.incident_id,
		}))
	);

	// Generate Communication Logs
	const communicationLogs = incidents.flatMap((incident) =>
		Array.from({ length: getRandomNumber(3, 6) }, () => ({
			log_id: faker.string.uuid(),
			sender_name: faker.person.fullName(),
			sender_id: faker.string.uuid(),
			sender_type: faker.random.arrayElement(["Responder", "Civilian"]),
			time: faker.date.past(),
			date: faker.date.past().toISOString().split("T")[0],
			log_message: faker.lorem.sentence(),
			language: faker.random.arrayElement([
				"English",
				"Spanish",
				"French",
			]),
			incident_id: incident.incident_id,
		}))
	);

	// Generate Safety Alerts
	const safetyAlerts = incidents.flatMap((incident) =>
		Array.from({ length: getRandomNumber(3, 6) }, () => ({
			alert_id: faker.string.uuid(),
			alert_message: faker.lorem.sentence(),
			alert_type: faker.random.arrayElement([
				"Weather",
				"Security",
				"Health",
			]),
			local_authority_id: faker.number.hex(),
			date: faker.date.past().toISOString().split("T")[0],
			time: faker.date.past(),
			incident_id: incident.incident_id,
		}))
	);

	// Generate Vehicles
	const vehicles = responders.flatMap((responder) =>
		Array.from({ length: getRandomNumber(1, 3) }, () => ({
			vehicle_id: faker.string.uuid(),
			vehicle_type: faker.random.arrayElement([
				"Ambulance",
				"Fire Truck",
				"Police Car",
			]),
			vehicle_status: faker.random.arrayElement(["Active", "Inactive"]),
			responder_id: responder.fr_id,
		}))
	);

	// Generate Resources
	const resources = nocs.flatMap((noc) =>
		Array.from({ length: getRandomNumber(3, 6) }, () => ({
			resource_id: faker.string.uuid(),
			resource_type: faker.commerce.productName(),
			availability_status: faker.random.arrayElement([
				"Available",
				"Unavailable",
			]),
			noc_id: noc.noc_id,
		}))
	);

	// Generate Emergency Teams
	const emergencyTeams = nocs.flatMap((noc) =>
		Array.from({ length: getRandomNumber(1, 3) }, () => ({
			team_id: faker.string.uuid(),
			team_name: faker.company.name(),
			noc_id: noc.noc_id,
		}))
	);

	// Combine all data into a single object
	const data = {
		Incidents: incidents,
		Responders: responders,
		Civilians: civilians,
		NOCs: nocs,
		Vehicles: vehicles,
		Resources: resources,
		EmergencyTeams: emergencyTeams,
		CommunicationLogs: communicationLogs,
		SafetyAlerts: safetyAlerts,
	};

	// Write data to JSON file
	fs.writeFileSync(
		"generated_data_with_uuids.json",
		JSON.stringify(data, null, 2)
	);

	console.log(
		"Data generated with UUIDs and stored in generated_data_with_uuids.json"
	);
}
