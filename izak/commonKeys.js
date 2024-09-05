import { faker } from "@faker-js/faker";

export default function commonKeys() {
  const randomData = {
    homeowner_id: `homeowner_${faker.datatype.number({ min: 1, max: 1000 })}`,
    device_id: `device_${faker.datatype.number({ min: 1, max: 1000 })}`,
    feature_id: `feature_${faker.datatype.number({ min: 1, max: 1000 })}`,
    playbook_id: `playbook_${faker.datatype.number({ min: 1, max: 1000 })}`,
    playbook_device_id: `playbook_device_${faker.datatype.number({
      min: 1,
      max: 1000,
    })}`,
    alert_id: `alert_${faker.datatype.number({ min: 1, max: 1000 })}`,
    homeowner_security_alert_id: `homeowner_security_alert_${faker.datatype.number(
      { min: 1, max: 1000 }
    )}`,
    update_id: `update_${faker.datatype.number({ min: 1, max: 1000 })}`,
    device_update_id: `device_update_${faker.datatype.number({
      min: 1,
      max: 1000,
    })}`,
    energy_device_id: `energy_device_${faker.datatype.number({
      min: 1,
      max: 1000,
    })}`,
    homeowner_device_id: `homeowner_device_${faker.datatype.number({
      min: 1,
      max: 1000,
    })}`,
  };

  return randomData;
}
