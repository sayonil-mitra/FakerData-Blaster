import {
  createCameraData,
  createFirstResponderData,
  createCMSData,
  createEvacuationCenters,
} from "./helpers.js";
import { getRandomNumber } from "../faker/faker.js";

export function generateData(
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

  // Step 4: Generate evacuation centers data
  for (let i = 0; i < totalCount; i++) {
    const evacuationCenter = createEvacuationCenters(purgeId);
    data.evacuationCenters.push(evacuationCenter);
  }

 
  data.cameras.forEach((camera) => {
    for (let i = 0; i < incrementEachLevel; i++) {
     
    }
  });

  data.firstResponders.forEach((firstResponder) => {
    for (let i = 0; i < incrementEachLevel; i++) {
      
    }
  });

  data.cmsData.forEach((cms) => {
    for (let i = 0; i < incrementEachLevel; i++) {
      
    }
  });

  data.evacuationCenters.forEach((center) => {
    for (let i = 0; i < incrementEachLevel; i++) {
      
    }
  });

  return data;
}
