import {
  createEvent,
  createUnemploymentData,
  createEarthquakeData,
  createCrimeData,
  createNetworkData,
  createGasStationData,
  createSocialMediaData,
  createFuelData,
} from "./helpers.js"; // Assuming you have all your helper functions in helpers.js

export function generateAroundAppData(
  purgeId,
  totalCount = 1000,
  incrementEachLevel = 5
) {
  // Initialize data storage for different entities
  const data = {
    events: [],
    gasStations: [],
    unemployment: [],
    earthquakes: [],
    crimes: [],
    networks: [],
    socialMedia: [],
    fuels: [],
  };

  // Step 1: Generate Events
  for (let i = 0; i < totalCount; i++) {
    const event = createEvent(purgeId);
    data.events.push(event);
  }

  // Step 2: Generate Gas Stations and Fuels
  for (let i = 0; i < totalCount; i++) {
    const gasStation = createGasStationData(purgeId);
    data.gasStations.push(gasStation);

    // Generate fuel data for each gas station
    for (let j = 0; j < incrementEachLevel; j++) {
      const fuelData = createFuelData(purgeId, gasStation.station_id);
      data.fuels.push(fuelData);
    }
  }

  // Step 3: Generate Unemployment Data (City-wise)
  for (let i = 0; i < totalCount; i++) {
    const unemploymentData = createUnemploymentData(purgeId);
    data.unemployment.push(unemploymentData);
  }

  // Step 4: Generate Earthquake Data (City-wise)
  for (let i = 0; i < totalCount; i++) {
    const earthquakeData = createEarthquakeData(purgeId);
    data.earthquakes.push(earthquakeData);
  }

  // Step 5: Generate Crime Data (Street-wise for Ahmedabad)
  for (let i = 0; i < totalCount; i++) {
    const crimeData = createCrimeData(purgeId);
    data.crimes.push(crimeData);
  }

  // Step 6: Generate Network Data (Street-wise for Ahmedabad)
  for (let i = 0; i < totalCount; i++) {
    const networkData = createNetworkData(purgeId);
    data.networks.push(networkData);
  }

  // Step 7: Generate Social Media Data (Street-wise for Ahmedabad)
  for (let i = 0; i < totalCount; i++) {
    const socialMediaData = createSocialMediaData(purgeId);
    data.socialMedia.push(socialMediaData);
  }

  return data;
}
