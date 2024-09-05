import {
  createHomeowner,
  createDevice,
  createFeature,
  createAutomationPlaybook,
  createPlaybookDevice,
  createSecurityAlert,
  createHomeownerSecurityAlert,
  createSoftwareUpdate,
  createDeviceSoftwareUpdate,
  createEnergyPlaybook,
  createEnergyDevice,
  createHomeownerDevice,
} from "./helpers.js";
import { getRandomNumber } from "../faker/faker.js";
import fs from "fs/promises";

export async function generateHomeAutomationData(
  totalCount = 1000,
  incrementEachLevel = 3,
  purgeId = 1
) {
  // Initialize data storage
  const data = {
    homeowners: [],
    devices: [],
    features: [],
    automationPlaybooks: [],
    playbookDevices: [],
    securityAlerts: [],
    homeownerSecurityAlerts: [],
    softwareUpdates: [],
    deviceSoftwareUpdates: [],
    energyPlaybooks: [],
    energyDevices: [],
    homeownerDevices: [],
  };

  // Step 1: Generate homeowners (Top Level)
  for (let i = 0; i < totalCount; i++) {
    const homeowner = createHomeowner(purgeId);
    data.homeowners.push(homeowner);
  }

  // Step 2: Generate devices and features
  for (let i = 0; i < parseInt(totalCount / 2); i++) {
    const device = createDevice(purgeId);
    data.devices.push(device);

    // Generate features for each device
    for (let j = 0; j < incrementEachLevel; j++) {
      const feature = createFeature(device.device_id, purgeId);
      data.features.push(feature);
    }
  }

  // Step 3: Generate automation playbooks and link devices to playbooks
  for (let i = 0; i < parseInt(totalCount / 3); i++) {
    const playbook = createAutomationPlaybook(purgeId);
    data.automationPlaybooks.push(playbook);

    // Link devices to playbooks
    for (let j = 0; j < incrementEachLevel; j++) {
      const device = data.devices[getRandomNumber(0, data.devices.length - 1)];
      const playbookDevice = createPlaybookDevice(
        playbook.playbook_id,
        device.device_id,
        purgeId
      );
      data.playbookDevices.push(playbookDevice);
    }
  }

  // Step 4: Generate security alerts and link to homeowners
  data.devices.forEach((device) => {
    for (let i = 0; i < incrementEachLevel; i++) {
      const alert = createSecurityAlert(device.device_id, purgeId);
      data.securityAlerts.push(alert);

      const homeowner =
        data.homeowners[getRandomNumber(0, data.homeowners.length - 1)];
      const homeownerAlert = createHomeownerSecurityAlert(
        homeowner.homeowner_id,
        alert.alert_id,
        purgeId
      );
      data.homeownerSecurityAlerts.push(homeownerAlert);
    }
  });

  // Step 5: Generate software updates and link them to devices
  data.devices.forEach((device) => {
    for (let i = 0; i < incrementEachLevel; i++) {
      const update = createSoftwareUpdate(device.device_id, purgeId);
      data.softwareUpdates.push(update);

      const deviceUpdate = createDeviceSoftwareUpdate(
        device.device_id,
        update.update_id,
        purgeId
      );
      data.deviceSoftwareUpdates.push(deviceUpdate);
    }
  });

  // Step 6: Generate energy playbooks and link devices to energy playbooks
  for (let i = 0; i < parseInt(totalCount / 4); i++) {
    const energyPlaybook = createEnergyPlaybook(purgeId);
    data.energyPlaybooks.push(energyPlaybook);

    // Link devices to energy playbooks
    for (let j = 0; j < incrementEachLevel; j++) {
      const device = data.devices[getRandomNumber(0, data.devices.length - 1)];
      const energyDevice = createEnergyDevice(
        energyPlaybook.energy_playbook_id,
        device.device_id,
        purgeId
      );
      data.energyDevices.push(energyDevice);
    }
  }

  // Step 7: Generate homeowner-device relationships
  data.homeowners.forEach((homeowner) => {
    for (let i = 0; i < incrementEachLevel; i++) {
      const device = data.devices[getRandomNumber(0, data.devices.length - 1)];
      const homeownerDevice = createHomeownerDevice(
        homeowner.homeowner_id,
        device.device_id,
        purgeId
      );
      data.homeownerDevices.push(homeownerDevice);
    }
  });

  await fs.writeFile("data.json", JSON.stringify(data, null, 2));

  //   return data;
}
