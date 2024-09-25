import {
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
} from "./helpers.js";

// Function to Generate Full Data Structure
export const generateiZakGujaratData = (
  purgeId,
  totalCount = 100,
  incrementEachLevel = 3
) => {
  const data = {
    users: [],
    households: [],
    devices: [],
    energySavingServices: [],
    safetySecurityServices: [],
    rewardsPrograms: [],
    marketplaceOperators: [],
    subsidyProviders: [],
    insuranceCompanies: [],
    laborUnions: [],
  };

  // Step 1: Generate enough instances of MarketplaceOperators, SubsidyProviders, InsuranceCompanies, and LaborUnions
  const numberOfRelatedEntities = totalCount * incrementEachLevel;

  const marketplaceOperators = [];
  for (let i = 0; i < numberOfRelatedEntities; i++) {
    const marketplaceOperator = createMarketplaceOperator(purgeId);
    marketplaceOperators.push(marketplaceOperator);
    data.marketplaceOperators.push(marketplaceOperator);
  }

  const subsidyProviders = [];
  for (let i = 0; i < numberOfRelatedEntities; i++) {
    const subsidyProvider = createSubsidyProvider(purgeId);
    subsidyProviders.push(subsidyProvider);
    data.subsidyProviders.push(subsidyProvider);
  }

  const insuranceCompanies = [];
  for (let i = 0; i < numberOfRelatedEntities; i++) {
    const insuranceCompany = createInsuranceCompany(purgeId);
    insuranceCompanies.push(insuranceCompany);
    data.insuranceCompanies.push(insuranceCompany);
  }

  const laborUnions = [];
  for (let i = 0; i < numberOfRelatedEntities; i++) {
    const laborUnion = createLaborUnion(purgeId);
    laborUnions.push(laborUnion);
    data.laborUnions.push(laborUnion);
  }

  // Step 2: Generate Users, Households, and Devices
  for (let i = 0; i < totalCount; i++) {
    const user = createUser(purgeId);
    data.users.push(user);

    // Step 3: Generate Households for each User
    for (let j = 0; j < incrementEachLevel; j++) {
      const household = createHousehold(purgeId, user.user_id);
      data.households.push(household);

      // Step 4: Generate Devices for each Household
      for (let k = 0; k < incrementEachLevel; k++) {
        const device = createDevice(
          purgeId,
          household.household_id,
          marketplaceOperators[k % marketplaceOperators.length].operator_id,
          insuranceCompanies[k % insuranceCompanies.length]
            .insurance_company_id,
          subsidyProviders[k % subsidyProviders.length].subsidy_provider_id,
          laborUnions[k % laborUnions.length].labor_union_id
        );
        data.devices.push(device);
      }
    }
  }

  // Step 5: Generate enough EnergySavingServices, SafetySecurityServices, RewardsPrograms
  for (let i = 0; i < numberOfRelatedEntities; i++) {
    const energySavingService = createEnergySavingService(
      purgeId,
      marketplaceOperators[i % marketplaceOperators.length].operator_id
    );
    data.energySavingServices.push(energySavingService);

    const safetySecurityService = createSafetySecurityService(
      purgeId,
      marketplaceOperators[i % marketplaceOperators.length].operator_id
    );
    data.safetySecurityServices.push(safetySecurityService);

    const rewardsProgram = createRewardsProgram(
      purgeId,
      marketplaceOperators[i % marketplaceOperators.length].operator_id
    );
    data.rewardsPrograms.push(rewardsProgram);
  }

  return data;
};
