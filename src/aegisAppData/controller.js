import {
  createCameraData,
  createFirstResponderData,
  createCMSData,
  createEvacuationCenters,
  createLog,
  createIncident,
  createCivilianChat,
  createFrsChat,
} from "./helpers.js";

export function generateAegisAppData(
  purgeId,
  totalCount = 1000,
  incrementEachLevel = 5
) {
  // Initialize data storage
  const data = {
    cameras: [],
    firstResponders: [],
    cmsData: [],
    evacuationCenters: [],
    incidents: [],
    firstResponderChats: [],
    civilianChats: [],
    logs: [],
  };

  // Step 1: Generate camera data
  for (let i = 0; i < totalCount; i++) {
    const camera = createCameraData(purgeId);
    data.cameras.push(camera);
  }

  // Step 2: Generate first responder data
  for (let i = 0; i < totalCount; i++) {
    const firstResponder = createFirstResponderData(purgeId);
    data.firstResponders.push(firstResponder);
  }

  // Step 3: Generate CMS data
  for (let i = 0; i < totalCount; i++) {
    const cms = createCMSData(purgeId);
    data.cmsData.push(cms);
  }

  // Step 4: Generate evacuation centers
  for (let i = 0; i < totalCount; i++) {
    const evacuationCenter = createEvacuationCenters(purgeId);
    data.evacuationCenters.push(evacuationCenter);
  }

  // Step 5: Generate incidents and related data (Logs, First Responder Chat, Civilian Chat)
  for (let i = 0; i < totalCount; i++) {
    const incident = createIncident(purgeId);
    data.incidents.push(incident);

    for (let j = 0; j < incrementEachLevel; j++) {
      // Generate incident logs
      const log = createLog(purgeId);
      log.incident_id = incident.incident_id;
      data.logs.push(log);

      // Generate First Responder Chats
      const frsChat = createFrsChat(purgeId);
      frsChat.incident_id = incident.incident_id;
      data.firstResponderChats.push(frsChat);

      // Generate Civilian Chats
      const civilianChat = createCivilianChat(purgeId);
      civilianChat.incident_id = incident.incident_id;
      data.civilianChats.push(civilianChat);
    }
  }

  return data;
}
