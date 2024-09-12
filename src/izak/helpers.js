import { faker } from "../faker/faker.js";

// Homeowner Entity Generator
const createHomeowner = (purgeId) => ({
  homeowner_id: faker.string.uuid(),
  name: faker.person.fullName(),
  email: faker.internet.email(),
  phone: faker.phone.number({ style: 'national' }),
  address: JSON.stringify({
    street: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    country: faker.location.country(),
    postalCode: faker.location.zipCode(),
  }),
  purge_id: purgeId,
});

// Device Entity Generator
const createDevice = (purgeId) => ({
  device_id: faker.string.uuid(),
  device_name: faker.helpers.arrayElement([
    "Laptop Pro 2024",
    "Galaxy Tab S9",
    "iPhone 14 Pro",
    "Surface Laptop 4",
    "iPad Air 5th Gen",
    "Samsung Galaxy S22",
    "MacBook Air M2",
    "Google Pixel 7",
    "Lenovo Yoga 9i",
  ]),
  device_type: faker.helpers.arrayElement([
    "Light",
    "Thermostat",
    "Lock",
    "Camera",
  ]),
  status: faker.helpers.arrayElement(["On", "Off"]),
  location: faker.location.streetAddress(),
  purge_id: purgeId,
});

// Feature Entity Generator
const createFeature = (deviceId, purgeId) => ({
  feature_id: faker.string.uuid(),
  feature_name: faker.helpers.arrayElement([
    "Wireless Charging",
    "Voice Assistants",
  ]),
  feature_type: faker.helpers.arrayElement(["Switch", "Sensor", "Alarm"]),
  status: faker.helpers.arrayElement(["Active", "Inactive"]),
  device_id: deviceId,
  purge_id: purgeId,
});

// Automation Playbook Entity Generator
const createAutomationPlaybook = (purgeId) => ({
  playbook_id: faker.string.uuid(),
  name: faker.helpers.arrayElement([
    "Smart Lighting",
    "Home Security System",
    "Climate Control Optimization",
    "Smart Appliance Management ",
    "Energy Efficiency Automation",
  ]),
  description: faker.lorem.sentence(),
  trigger_event: faker.helpers.arrayElement([
    "Device status updation",
    "Measured value crossed threshold",
  ]),
  action: faker.helpers.arrayElement(["Activate", "Adjust", "Monitor"]),
  purge_id: purgeId,
});

// Playbook Device Entity Generator
const createPlaybookDevice = (playbookId, deviceId, purgeId) => ({
  playbook_device_id: faker.string.uuid(),
  playbook_id: playbookId,
  device_id: deviceId,
  action: faker.helpers.arrayElement([
    "Turn On",
    "Turn Off",
    "Set Temperature",
  ]),
  purge_id: purgeId,
});

// Security Alert Entity Generator
const createSecurityAlert = (deviceId, purgeId) => ({
  alert_id: faker.string.uuid(),
  alert_type: faker.helpers.arrayElement([
    "Motion Detected",
    "Door Opened",
    "Glass Break",
  ]),
  alert_time: faker.date.recent(),
  device_id: deviceId,
  purge_id: purgeId,
});

// Homeowner Security Alert Entity Generator
const createHomeownerSecurityAlert = (homeownerId, alertId, purgeId) => ({
  homeowner_alert_id: faker.string.uuid(),
  homeowner_id: homeownerId,
  alert_id: alertId,
  alert_time: faker.date.recent(),
  purge_id: purgeId,
});

// Software Update Entity Generator
const createSoftwareUpdate = (deviceId, purgeId) => ({
  update_id: faker.string.uuid(),
  update_version: faker.string.uuid(),
  release_date: faker.date.recent(),
  device_id: deviceId,
  purge_id: purgeId,
});

// Device Software Update Entity Generator
const createDeviceSoftwareUpdate = (deviceId, updateId, purgeId) => ({
  device_update_id: faker.string.uuid(),
  device_id: deviceId,
  update_id: updateId,
  update_status: faker.helpers.arrayElement(["Pending", "Completed", "Failed"]),
  purge_id: purgeId,
});

// Energy Playbook Entity Generator
const createEnergyPlaybook = (purgeId) => ({
  energy_playbook_id: faker.string.uuid(),
  name: faker.helpers.arrayElement([
    "Smart Thermostats",
    "Renewable Energy Integration",
  ]),
  description: faker.lorem.sentence(),
  trigger_event: faker.helpers.arrayElement([
    "Device status updation",
    "Measured value crossed threshold",
  ]),
  action: faker.helpers.arrayElement(["Activate", "Adjust", "Monitor"]),
  purge_id: purgeId,
});

// Energy Device Entity Generator
const createEnergyDevice = (energyPlaybookId, deviceId, purgeId) => ({
  energy_device_id: faker.string.uuid(),
  energy_playbook_id: energyPlaybookId,
  device_id: deviceId,
  action: faker.helpers.arrayElement(["Increase Efficiency", "Decrease Usage"]),
  purge_id: purgeId,
});

// Homeowner Device Entity Generator
const createHomeownerDevice = (homeownerId, deviceId, purgeId) => ({
  homeowner_device_id: faker.string.uuid(),
  homeowner_id: homeownerId,
  device_id: deviceId,
  assigned_date: faker.date.recent(),
  purge_id: purgeId,
});

export {
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
};
