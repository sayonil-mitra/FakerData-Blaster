import { faker } from "../faker/faker.js";
import { eventNames } from "./event-names.js";
const incidentType = [
    "Fire",
    "Flood",
    "Earthquake",
    "Accident",
    "Robbery"
]
const status=["Active", "Resolved", "Pending"]
const severity=["Low", "Medium", "High"]
const language=["English", "Spanish", "French"];

const createIncident = () => ({
    incident_id: faker.string.uuid(), // Generating an integer ID
    incident_name: faker.lorem.words(3), // Random incident name
    incident_type: faker.random.arrayElement(incidentType), // Incident type options
    incident_coordinates: {
        latitude: faker.location.latitude(), // Random latitude
        longitude: faker.location.longitude(), // Random longitude
    },
    incident_affected_area: faker.location.streetAddress(), // Affected area address
    location: faker.location.city(), // Incident location (city)
    issuing_authority: faker.company.name(), // Authority issuing the incident
    description: faker.lorem.sentences(2), // Random description of the incident
    status: faker.random.arrayElement(status), // Status of the incident
    officer_in_charge: faker.person.fullName(), // Officer in charge of the incident
    severity: faker.random.arrayElement(severity), // Severity level
    latest_report: faker.lorem.sentence(), // Latest report description
    date: faker.date.recent().toISOString().split("T")[0], // Incident date
    time: faker.date.recent().toISOString().split("T")[1].split(".")[0], // Incident time
    language: faker.random.arrayElement(language), // Language
    cityname: faker.location.city(), // City name
});

export { createIncident };