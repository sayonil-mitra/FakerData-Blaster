import { faker } from "@faker-js/faker";
import {
  firstNames,
  lastNames,
  gujaratiHouseholdNames,
  zipcodesInGujarat,
  streetsInGujarat,
  device_types,
  energySavingServices,
  energySavingServiceNames,
  eligibilityCriteriaOptions,
  safetySecurityServiceNames,
  safetySecurityServiceDescriptions,
  safetySecurityEligibilityCriteria,
  rewardsProgramNames,
  rewardsProgramDescriptions,
  pointsCriteriaOptions,
  marketplaceOperatorNames,
  marketplaceOperatorDescriptions,
  subsidyProviderNames,
  subsidyProviderDescriptions,
  insuranceCompanyNames,
  insuranceCompanyDescriptions,
  laborUnionNames,
  laborUnionDescriptions,
} from "./helperData.js";

const generateIndianPhoneNumber = () => {
  const indianPrefix = "+91";
  const randomTenDigits = faker.number
    .int({ min: 6000000000, max: 9999999999 })
    .toString();
  return `${indianPrefix} ${randomTenDigits}`;
};

function getRandomName() {
  const randomFirstName =
    firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLastName =
    lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${randomFirstName} ${randomLastName}`;
}

// Helper to generate User data
const createUser = (purgeId) => {
  return {
    user_id: faker.string.uuid(),
    username: getRandomName(),
    role: faker.helpers.arrayElement(["Admin", "User", "Guest"]),
    password: faker.internet.password(),
    contact_info: generateIndianPhoneNumber(),
    purge_id: purgeId,
  };
};

// Helper to generate Household data
const createHousehold = (purgeId, userId) => {
    const cities = Object.keys(zipcodesInGujarat);
    const selectedCity = faker.helpers.arrayElement(cities);

    // Pick a random street and zipcode for the selected city
    const street = faker.helpers.arrayElement(streetsInGujarat[selectedCity]);
    const zipcode = faker.helpers.arrayElement(zipcodesInGujarat[selectedCity]);

  return {
    household_id: faker.string.uuid(),
    name: faker.helpers.arrayElement(gujaratiHouseholdNames),
    address: `${street}, ${selectedCity}, Gujarat - ${zipcode}`,
    income_level: faker.helpers.arrayElement(["Low", "Middle", "High"]),
    program: faker.helpers.arrayElement([
      "Energy Savings",
      "Safety Security",
      "Rewards",
    ]),
    user_id: userId,
    security_level: faker.helpers.arrayElement(["Low", "Medium", "High"]),
    is_energy_saving_eligible: faker.datatype.boolean(),
    is_safety_security_eligible: faker.datatype.boolean(),
    is_rewards_eligible: faker.datatype.boolean(),
    purge_id: purgeId,
  };
};

// Helper to generate Device data
const createDevice = (
  purgeId,
  householdId,
  userId,
  operatorId,
  laborUnionId,
  securityServiceId,
  rewardsId,
  energySavingServiceId,
  insurance_company_id
) => {
  return {
    device_id: faker.string.uuid(),
    device_icon: faker.image.url(),
    turned_on: faker.datatype.boolean(),
    description: faker.commerce.productDescription(),
    device_type: faker.helpers.arrayElement(device_types),
    language: faker.helpers.arrayElement(["en"]),
    ip_address: faker.internet.ip(),
    battery_percentage: parseFloat(
      faker.number.float({ min: 5, max: 100 }).toFixed(2)
    ),
    mac_address: faker.internet.mac(),
    warranty: `${faker.number.int({ min: 1, max: 5 })} years`,
    model_number: faker.string.alphanumeric(10),
    brand: faker.company.name(),
    last_updated: faker.date.recent(),
    household_id: householdId,
    operator_id: operatorId,
    labor_union_id: laborUnionId,
    securiy_service_id: securityServiceId,
    insurance_company_id: insurance_company_id,
    rewards_id: rewardsId,
    user_id: userId,
    energy_savings_service_id: energySavingServiceId,
    purge_id: purgeId,
  };
};

// Helper to generate Energy Saving Service data
const createEnergySavingService = (purgeId, operatorId) => {
    const selectedService = faker.helpers.arrayElement(energySavingServices);
    const serviceName = faker.helpers.arrayElement(energySavingServiceNames);
  return {
    energy_savings_service_id: faker.string.uuid(),
    name: serviceName,
    description: selectedService.description,
    type: selectedService.type,
    operator_id: operatorId,
    eligibility_criteria: faker.helpers.arrayElement(
      eligibilityCriteriaOptions
    ),
    purge_id: purgeId,
  };
};

// Helper to generate Safety Security Service data
const createSafetySecurityService = (purgeId, operatorId) => {
  return {
    securiy_service_id: faker.string.uuid(),
    name: faker.helpers.arrayElement(safetySecurityServiceNames),
    description: faker.helpers.arrayElement(safetySecurityServiceDescriptions),
    operator_id: operatorId,
    eligibility_criteria: faker.helpers.arrayElement(
      safetySecurityEligibilityCriteria
    ),
    security_level: faker.helpers.arrayElement(["Low", "Medium", "High"]),
    purge_id: purgeId,
  };
};

// Helper to generate Rewards Program data
const createRewardsProgram = (purgeId, operatorId) => {
  return {
    rewards_id: faker.string.uuid(),
    name: faker.helpers.arrayElement(rewardsProgramNames),
    description: faker.helpers.arrayElement(rewardsProgramDescriptions),
    operator_id: operatorId,
    points_criteria: faker.helpers.arrayElement(pointsCriteriaOptions),
    reward_value: faker.number.float({ min: 10, max: 1000 }),
    purge_id: purgeId,
  };
};

// Helper to generate Marketplace Operator data
const createMarketplaceOperator = (purgeId) => {
  return {
    operator_id: faker.string.uuid(),
    name: faker.helpers.arrayElement(marketplaceOperatorNames),
    description: faker.helpers.arrayElement(marketplaceOperatorDescriptions),
    contact_info: generateIndianPhoneNumber(),
    purge_id: purgeId,
  };
};

// Helper to generate Subsidy Provider data
const createSubsidyProvider = (purgeId) => {
  return {
    subsidy_provider_id: faker.string.uuid(),
    name: faker.helpers.arrayElement(subsidyProviderNames),
    description: faker.helpers.arrayElement(subsidyProviderDescriptions),
    contact_info: generateIndianPhoneNumber(),
    purge_id: purgeId,
  };
};

// Helper to generate Insurance Company data
const createInsuranceCompany = (purgeId) => {
  return {
    insurance_company_id: faker.string.uuid(),
    name: faker.helpers.arrayElement(insuranceCompanyNames),
    description: faker.helpers.arrayElement(insuranceCompanyDescriptions),
    contact_info: generateIndianPhoneNumber(),
    purge_id: purgeId,
  };
};

// Helper to generate Labor Union data
const createLaborUnion = (purgeId) => {
  return {
    labor_union_id: faker.string.uuid(),
    name: faker.helpers.arrayElement(laborUnionNames),
    description: faker.helpers.arrayElement(laborUnionDescriptions),
    contact_info: generateIndianPhoneNumber(),
    purge_id: purgeId,
  };
};


export {
  createUser,
  createHousehold,
  createDevice,
  createEnergySavingService,
  createSafetySecurityService,
  createRewardsProgram,
  createMarketplaceOperator,
  createSubsidyProvider,
  createInsuranceCompany,
  createLaborUnion,
};