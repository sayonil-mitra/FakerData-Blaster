import {
	createIncident,
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
} from "./helpersAegis.js";
import { getRandomNumber } from "../faker/faker.js";

export function generateDataForAegis(
	purgeId,
	totalCount = 1000,
	incrementEachLevel = 5
) {
	// Initialize data storage
	const data = {
		incidents: [],
		tasks: [],
		responders: [],
		civilians: [],
		nocs: [],
		vehicles: [],
		resources: [],
		emergencyTeams: [],
		communicationLogs: [],
		safetyAlerts: [],
		incidentLogs: [],
	};

	// Step 1: Generate NOCs (Top Level)
	for (let i = 0; i < totalCount; i++) {
		const noc = createNOC(purgeId);
		data.nocs.push(noc);
	}

	// Step 2: Generate Incidents for each NOC
	data.nocs.forEach((noc) => {
		for (let i = 0; i < incrementEachLevel; i++) {
			const incident = createIncident(noc.noc_id, purgeId); // Link incident to NOC using noc_id
			data.incidents.push(incident);
		}
	});

	// Step 3: Generate Responders for each Incident and NOC
	data.incidents.forEach((incident) => {
		for (let i = 0; i < incrementEachLevel; i++) {
			const noc =
				data.nocs[getRandomNumber(0, data.nocs.length - 1)];
			const responder = createResponder(incident.incident_id, noc.noc_id, purgeId);
			data.responders.push(responder);

			// Generate Tasks for each Responder
			const task = createTask(responder.fr_id, purgeId);
			data.tasks.push(task);
		}
	});

	// Step 4: Generate Civilians for each Incident
	data.incidents.forEach((incident) => {
		for (let i = 0; i < incrementEachLevel; i++) {
			const civilian = createCivilian(incident.incident_id, purgeId);
			data.civilians.push(civilian);
		}
	});

	// Step 5: Generate Vehicles for each Responder
	data.responders.forEach((responder) => {
		const vehicle = createVehicle(responder.fr_id, purgeId);
		data.vehicles.push(vehicle);
	});

	// Step 6: Generate Resources for each NOC
	data.nocs.forEach((noc) => {
		for (let i = 0; i < incrementEachLevel; i++) {
			const resource = createResource(noc.noc_id, purgeId);
			data.resources.push(resource);
		}
	});

	// Step 7: Generate Emergency Teams for each NOC
	data.nocs.forEach((noc) => {
		for (let i = 0; i < incrementEachLevel; i++) {
			const emergencyTeam = createEmergencyTeam(noc.noc_id, purgeId);
			data.emergencyTeams.push(emergencyTeam);
		}
	});

	// Step 8: Generate Communication Logs for each Incident
	data.incidents.forEach((incident) => {
		for (let i = 0; i < incrementEachLevel; i++) {
			const communicationLog = createCommunicationLog(incident.incident_id, purgeId);
			data.communicationLogs.push(communicationLog);
		}
	});

	// Step 9: Generate Safety Alerts for each Incident
	data.incidents.forEach((incident) => {
		for (let i = 0; i < incrementEachLevel; i++) {
			const safetyAlert = createSafetyAlert(incident.incident_id, purgeId);
			data.safetyAlerts.push(safetyAlert);
		}
	});

	// Step 10: Generate Incident Logs for each Responder
	data.responders.forEach((responder) => {
		for (let i = 0; i < incrementEachLevel; i++) {
			const incidentLog = createIncidentLog(responder.fr_id, purgeId);
			data.incidentLogs.push(incidentLog);
		}
	});

	return data;
}
