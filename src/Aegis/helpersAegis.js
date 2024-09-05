import { faker ,getRandomNumber} from "../faker/faker.js";
const incidentType = ["Fire", "Flood", "Earthquake", "Accident", "Robbery"];
const status = ["Active", "Resolved", "Pending"];
const severity = ["Low", "Medium", "High"];
const language = ["English", "Spanish", "French"];
const senderType = ["Civilian", "Responder", "Authority"];
const messageType = ["Text", "Image", "Video"];
const vehicleType = ["Ambulance", "Fire Truck", "Police Car"];
const vehicleStatus = ["Available", "In Service", "Out of Service"];
const responderType = ["Firefighter", "Police", "Paramedic"];
const responderCategory = ["Human", "Robot", "Drone"];


const createIncident = (nocId, purgeId) => ({
	incident_id: faker.string.uuid(), // Unique incident ID
	incident_name: faker.lorem.words(3), // Random incident name
	incident_type: faker.random.arrayElement(["Fire", "Flood", "Earthquake", "Accident", "Robbery"]), // Random incident type
	incident_coordinates: {
		latitude: faker.location.latitude(),
		longitude: faker.location.longitude(),
	},
	incident_affected_area: faker.location.streetAddress(),
	location: faker.location.city(),
	issuing_authority: faker.company.name(),
	description: faker.lorem.sentences(2),
	status: faker.random.arrayElement(status),
	officer_in_charge: faker.person.fullName(),
	severity: faker.random.arrayElement(severity),
	latest_report: faker.lorem.sentence(),
	date: faker.date.recent().toISOString().split("T")[0],
	time: faker.date.recent().toISOString().split("T")[1].split(".")[0],
	language: faker.random.arrayElement(language),
	cityname: faker.location.city(),
	noc_id: nocId, // Foreign key to link to NOC
	purge_id: purgeId, // Optional: for purging or filtering
});

const createTask = (responderId,purgeId) => ({
    task_id: faker.string.uuid(),
    task_name: faker.lorem.words(2),
    fr_id: responderId, // Foreign key to Responder
    status: faker.random.arrayElement(status),
    assigned_date: faker.date.recent().toISOString().split("T")[0], // Assigned date
    purge_id: purgeId
});

const createResponder = (incidentId, nocId,purgeId) => ({
    fr_id: faker.string.uuid(),
    name: faker.person.fullName(),
    officer_id: faker.string.uuid(),
    type: faker.random.arrayElement(responderType),
    category: faker.random.arrayElement(responderCategory),
    speed: `${getRandomNumber(10, 100)} km/h`,
    ETA: `${getRandomNumber(1, 60)} min`,
    status: faker.random.arrayElement(status),
    assets: {
        vehicle: faker.random.arrayElement(vehicleType),
        equipment: faker.lorem.words(3),
    },
    current_coordinates: {
        latitude: faker.location.latitude(),
        longitude: faker.location.longitude(),
    },
    incident_coordinates: {
        latitude: faker.location.latitude(),
        longitude: faker.location.longitude(),
    },
    language: faker.random.arrayElement(language),
    cityname: faker.location.city(),
    incident_id: incidentId, // Foreign key to Incident
    noc_id: nocId, // Foreign key to NOC
    department: faker.company.name(), // Department field
    purge_id: purgeId
});

const createCivilian = (incidentId,purgeId) => ({
    civilianchat_id: faker.string.uuid(),
    name: faker.person.fullName(),
    sender_type: faker.random.arrayElement(senderType),
    message: faker.lorem.sentence(),
    time: faker.date.recent().toISOString().split("T")[1].split(".")[0], // Time of message
    date: faker.date.recent().toISOString().split("T")[0], // Date of message
    id: faker.string.uuid(),
    images: {
        image_url: faker.image.avatar
    },
    videos: {
        video_url: faker.image.avatar
    },
    message_type: faker.random.arrayElement(messageType),
    language: faker.random.arrayElement(language),
    incident_id: incidentId, // Foreign key to Incident
    purge_id: purgeId
});

const createNOC = (purgeId) => ({
	noc_id: faker.string.uuid(), // Unique ID for NOC
	noc_name: faker.company.name(), // Random NOC name
	noc_location: faker.location.city(), // Random city location for NOC
	purge_id: purgeId // Optional: for purging or filtering
});

const createVehicle = (responderId,purgeId) => ({
    vehicle_id: faker.string.uuid(),
    vehicle_type: faker.random.arrayElement(vehicleType),
    vehicle_status: faker.random.arrayElement(vehicleStatus),
    responder_id: responderId, // Foreign key to Responder
    purge_id: purgeId
});

const createResource = (nocId,purgeId) => ({
    resource_id: faker.string.uuid(),
    resource_type: faker.lorem.word(),
    availability_status: faker.random.arrayElement(status),
    noc_id: nocId, // Foreign key to NOC
    purge_id: purgeId
});

const createEmergencyTeam = (nocId,purgeId) => ({
    team_id: faker.string.uuid(),
    team_name: faker.company.name(),
    noc_id: nocId, // Foreign key to NOC
    purge_id: purgeId
});

const createCommunicationLog = (incidentId,purgeId) => ({
    log_id: faker.string.uuid(),
    sender_name: faker.person.fullName(),
    sender_id: faker.string.uuid(),
    sender_type: faker.random.arrayElement(senderType),
    time: faker.date.recent().toISOString().split("T")[1].split(".")[0], // Log time
    date: faker.date.recent().toISOString().split("T")[0], // Log date
    log_message: faker.lorem.sentences(2),
    language: faker.random.arrayElement(language),
    incident_id: incidentId, // Foreign key to Incident
    purge_id: purgeId
});

const createSafetyAlert = (incidentId,purgeId) => ({
    alert_id: faker.string.uuid(),
    alert_message: faker.lorem.sentence(),
    alert_type: faker.lorem.word(),
    local_authority_id: faker.string.uuid(),
    date: faker.date.recent().toISOString().split("T")[0], // Alert date
    time: faker.date.recent().toISOString().split("T")[1].split(".")[0], // Alert time
    incident_id: incidentId, // Foreign key to Incident
    purge_id: purgeId
});

const createIncidentLog = (incidentId,purgeId) => ({
    log_id: faker.string.uuid(),
    sender_name: faker.person.fullName(),
    sender_id: faker.string.uuid(),
    sender_type: faker.random.arrayElement(senderType),
    time: faker.date.recent().toISOString().split("T")[1].split(".")[0], // Log time
    date: faker.date.recent().toISOString().split("T")[0], // Log date
    log_message: faker.lorem.sentences(2),
    language: faker.random.arrayElement(language),
    incident_id: incidentId, // Foreign key to Incident
    purge_id: purgeId
});


export {
    createTask,
    createResponder,
    createCivilian,
    createNOC,
    createVehicle,
    createResource,
    createEmergencyTeam,
    createCommunicationLog,
    createSafetyAlert,
    createIncidentLog,
    createIncident
};