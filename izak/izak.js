import { faker } from "@faker-js/faker";

const primaryKeyValue = {
  homeowner_id: "",
  homeowner_id: "",
  homeowner_id: "",
};

const homeownerData = {
  homeowner_id: `homeowner_${faker.helpers.rangeToNumber({
    min: 1,
    max: 1000,
  })}`,
  name: faker.person.fullName(),
  email: faker.internet.email(),
  phone_number: faker.phone.number(),
  address: faker.location.streetAddress(),
};

const deviceData = {
  device_id: `device_${faker.helpers.rangeToNumber({ min: 1, max: 1000 })}`,
  device_name: faker.commerce.productName(),
  device_type: faker.commerce.department(),
  installation_date: faker.date.past(),
  homeowner_id: `homeowner_${faker.helpers.rangeToNumber({
    min: 1,
    max: 1000,
  })}`,
};

const featureData = {
  feature_id: `feature_${faker.helpers.rangeToNumber({ min: 1, max: 1000 })}`,
  feature_name: faker.commerce.productAdjective(),
  description: faker.commerce.productDescription(),
  device_id: `device_${faker.helpers.rangeToNumber({ min: 1, max: 1000 })}`,
};

const playbookData = {
  playbook_id: `playbook_${faker.helpers.rangeToNumber({ min: 1, max: 1000 })}`,
  playbook_name: faker.commerce.productAdjective(),
  description: faker.commerce.productDescription(),
};

const playbookDeviceData = {
  playbook_device_id: `playbook_device_${faker.helpers.rangeToNumber({
    min: 1,
    max: 1000,
  })}`,
  playbook_id: `playbook_${faker.helpers.rangeToNumber({ min: 1, max: 1000 })}`,
  device_id: `device_${faker.helpers.rangeToNumber({ min: 1, max: 1000 })}`,
};

const alertData = {
  alert_id: `alert_${faker.helpers.rangeToNumber({ min: 1, max: 1000 })}`,
  alert_type: faker.hacker.verb(),
  alert_description: faker.hacker.phrase(),
  alert_time: faker.date.recent(),
  device_id: `device_${faker.helpers.rangeToNumber({ min: 1, max: 1000 })}`,
};

const homeownerSecurityAlertData = {
  homeowner_security_alert_id: `homeowner_security_alert_${faker.helpers.rangeToNumber(
    { min: 1, max: 1000 }
  )}`,
  homeowner_id: `homeowner_${faker.helpers.rangeToNumber({
    min: 1,
    max: 1000,
  })}`,
  alert_id: `alert_${faker.helpers.rangeToNumber({ min: 1, max: 1000 })}`,
};

const updateData = {
  update_id: `update_${faker.helpers.rangeToNumber({ min: 1, max: 1000 })}`,
  update_version: faker.system.semver(),
  update_description: faker.lorem.sentence(),
  update_date: faker.date.past(),
  device_id: `device_${faker.helpers.rangeToNumber({ min: 1, max: 1000 })}`,
};

const deviceSoftwareUpdateData = {
  device_update_id: `device_update_${faker.helpers.rangeToNumber({
    min: 1,
    max: 1000,
  })}`,
  device_id: `device_${faker.helpers.rangeToNumber({ min: 1, max: 1000 })}`,
  update_id: `update_${faker.helpers.rangeToNumber({ min: 1, max: 1000 })}`,
};

const energyPlaybookData = {
  playbook_id: `playbook_${faker.helpers.rangeToNumber({ min: 1, max: 1000 })}`,
  playbook_name: faker.company.buzzPhrase(),
  description: faker.lorem.sentence(),
};

const homeownerDeviceData = {
  homeowner_device_id: `homeowner_device_${faker.helpers.rangeToNumber({
    min: 1,
    max: 1000,
  })}`,
  homeowner_id: `homeowner_${faker.helpers.rangeToNumber({
    min: 1,
    max: 1000,
  })}`,
  device_id: `device_${faker.helpers.rangeToNumber({ min: 1, max: 1000 })}`,
};

console.log(homeownerData);
console.log(deviceData);
console.log(featureData);
console.log(updateData);
console.log(deviceSoftwareUpdateData);
console.log(energyPlaybookData);
console.log(homeownerDeviceData);
console.log(playbookData);
console.log(playbookDeviceData);
console.log(alertData);
console.log(homeownerSecurityAlertData);
