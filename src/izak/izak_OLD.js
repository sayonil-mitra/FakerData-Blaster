import { faker } from "@faker-js/faker";

export default function generateIzakInstance(counter = 1, iterationNum = 100) {
  // Primary Key Values
  const homeowner_id = `homeowner_${faker.helpers.rangeToNumber({
    min: 1,
    max: iterationNum,
  })}`;

  const device_id = `device_${faker.helpers.rangeToNumber({
    min: 1,
    max: iterationNum,
  })}`;

  const feature_id = `feature_${faker.helpers.rangeToNumber({
    min: 1,
    max: iterationNum,
  })}`;

  const playbook_id = `playbook_${faker.helpers.rangeToNumber({
    min: 1,
    max: iterationNum,
  })}`;

  const playbook_device_id = `playbook_device_${faker.helpers.rangeToNumber({
    min: 1,
    max: iterationNum,
  })}`;

  const alert_id = `alert_${faker.helpers.rangeToNumber({
    min: 1,
    max: iterationNum,
  })}`;

  const homeowner_security_alert_id = `homeowner_security_alert_${faker.helpers.rangeToNumber(
    {
      min: 1,
      max: iterationNum,
    }
  )}`;

  const update_id = `update_${faker.helpers.rangeToNumber({
    min: 1,
    max: iterationNum,
  })}`;

  const device_update_id = `device_update_${faker.helpers.rangeToNumber({
    min: 1,
    max: iterationNum,
  })}`;

  const energy_playbook_id = `energy_playbook_${faker.helpers.rangeToNumber({
    min: 1,
    max: iterationNum,
  })}`;

  const homeowner_device_id = `homeowner_device_${faker.helpers.rangeToNumber({
    min: 1,
    max: iterationNum,
  })}`;

  // Entities with primary and foreign keys
  const homeownerData = {
    homeowner_id,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    phone_number: faker.phone.number(),
    address: faker.location.streetAddress(),
    counter,
  };

  const deviceData = {
    device_id,
    device_name: faker.commerce.productName(),
    device_type: faker.commerce.department(),
    installation_date: faker.date.past(),
    homeowner_id,
    counter,
  };

  const featureData = {
    feature_id,
    feature_name: faker.commerce.productAdjective(),
    description: faker.commerce.productDescription(),
    device_id,
    counter,
  };

  const playbookData = {
    playbook_id,
    playbook_name: faker.commerce.productAdjective(),
    description: faker.commerce.productDescription(),
    counter,
  };

  const playbookDeviceData = {
    playbook_device_id,
    playbook_id,
    device_id,
    counter,
  };

  const alertData = {
    alert_id,
    alert_type: faker.hacker.verb(),
    alert_description: faker.hacker.phrase(),
    alert_time: faker.date.recent(),
    device_id,
    counter,
  };

  const homeownerSecurityAlertData = {
    homeowner_security_alert_id,
    homeowner_id,
    alert_id,
    counter,
  };

  const updateData = {
    update_id,
    update_version: faker.system.semver(),
    update_description: faker.lorem.sentence(),
    update_date: faker.date.past(),
    device_id,
    counter,
  };

  const deviceSoftwareUpdateData = {
    device_update_id,
    device_id,
    update_id,
    counter,
  };

  const energyPlaybookData = {
    playbook_id: energy_playbook_id,
    playbook_name: faker.company.buzzPhrase(),
    description: faker.lorem.sentence(),
    counter,
  };

  const homeownerDeviceData = {
    homeowner_device_id,
    homeowner_id,
    device_id,
    counter,
  };

  // Logging all generated data
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
}

generateIzakInstance();
