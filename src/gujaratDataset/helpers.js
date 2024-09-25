import { faker } from "../faker/faker.js";
import {govtSchemesData} from "./helperData.js"



const adjustValue = (value) => {
  const adjustedValue = value * (1 + (Math.random() * 0.1 - 0.05));
  return parseFloat(adjustedValue.toFixed(2));
};

// Generate District Info data
const createDistrictInfo = (purgeId, districtData) => {

     let adjustedLatestPopulation = adjustValue(
       districtData.latestPopulation
     );

     if (adjustedLatestPopulation < districtData.population) {
       adjustedLatestPopulation =
         districtData.population * (1 + Math.random() * 0.05); 
     }

    const populationChange = parseFloat(
      (
        ((adjustedLatestPopulation - districtData.population) /
          districtData.population) *
        100
      ).toFixed(2)
    );


  return {
    DistrictID: faker.string.uuid(),
    District: districtData.district,
    Population_2011: districtData.population,
    Latest_Population: adjustedLatestPopulation,
    Population_Change: populationChange,
    Households: faker.number.int({ min: 30000, max: 50000 }),
    GDP_Per_Capita: adjustValue(districtData.gdpPerCapitaPerPersonPerYear),
    GDP_2019: adjustValue(districtData.gdpAmountIn2019InCrores),
    GDP_2023: adjustValue(districtData.gdpAmountIn2023InCrores),
    Target_GDP_2030: adjustValue(districtData.targetGDPIn2030InCrores),
    Agriculture_Allocation: adjustValue(
      districtData.agricultureAllocationInCrores
    ),
    Education_Allocation: adjustValue(
      districtData.educationAndDevelopmentAllocationInCrores
    ),
    Govt_Schemes: districtData.governmentSchemes,
    purge_id: purgeId,
  };
};

// Generate Sectoral Allocations data
 const createSectoralAllocations = (purgeId, districtId, districtData) => {
   return {
     SectorAllocationID: faker.string.uuid(),
     DistrictID: districtId,
     Agriculture_Allocation: adjustValue(
       districtData.agricultureAllocationInCrores
     ),
     Education_Allocation: adjustValue(
       districtData.educationAndDevelopmentAllocationInCrores
     ),
     Healthcare_Allocation: adjustValue(
       districtData.healthAndFamilyWelfareAllocationInCrores
     ),
     Other_Allocations: adjustValue(
       districtData.tourismAllocationInCrores +
         districtData.commerceAndIndustryAllocationInCrores
     ),
     purge_id: purgeId,
   };
 };

// Generate Government Schemes data
const createGovtSchemes = (purgeId, districtId) => {
  const selectedSchemes = govtSchemesData.slice(
    0,
    Math.floor(Math.random() * govtSchemesData.length) + 1
  ); // Randomly selecting some schemes
  return selectedSchemes.map((scheme) => {
    return {
      scheme_id: faker.string.uuid(),
      district_id: districtId,
      scheme_name: scheme.SchemeName,
      scheme_description: scheme.SchemeDescription,
      purge_id: purgeId,
    };
  });
};

// Generate GDP Performance data
const createGDPPerformance = (purgeId, districtId, districtData) => {
  return {
    GDPPerformanceID: faker.string.uuid(),
    DistrictID: districtId,
    GDP_2019: adjustValue(districtData.gdpAmountIn2019InCrores),
    GDP_2023: adjustValue(districtData.gdpAmountIn2023InCrores),
    Target_GDP_2030: adjustValue(districtData.targetGDPIn2030InCrores),
    purge_id: purgeId,
  };
};

// Generate Sector Performance Metrics data
const createSectorPerformanceMetrics = (
  purgeId,
  sectorAllocationId,
  districtData
) => {
  return {
    SectorPerformanceID: faker.string.uuid(),
    SectorAllocationID: sectorAllocationId,
    Agriculture_Performance: adjustValue(
      districtData.agricultureRevenueInCrores
    ),
    Education_Performance: adjustValue(
      districtData.educationAndDevelopmentRevenueInCrores
    ),
    Healthcare_Performance: adjustValue(
      districtData.healthAndFamilyWelfareRevenueInCrores
    ),
    purge_id: purgeId,
  };
};

// Generate Sector Risk Assessment data
const createSectorRiskAssessment = (purgeId, sectorPerformanceId) => {
    const risk_levels = ["Medium", "High", "Low"];
  return {
    RiskAssessmentID: faker.string.uuid(),
    SectorPerformanceID: sectorPerformanceId,
    Agriculture_RiskLevel: faker.helpers.arrayElement(risk_levels),
    Education_RiskLevel: faker.helpers.arrayElement(risk_levels),
    Healthcare_RiskLevel: faker.helpers.arrayElement(risk_levels),
    purge_id: purgeId,
  };
};

// Generate Sector Mitigation Plans data
const createSectorMitigationPlans = (purgeId, riskAssessmentId) => {
    const mitigationDescriptions = [
      "Improvement of agricultural irrigation systems to reduce drought risk.",
      "Investment in education infrastructure to support remote learning.",
      "Implementation of healthcare awareness campaigns for disease prevention.",
      "Development of sustainable farming techniques to mitigate climate risks.",
      "Upgrading healthcare facilities for better emergency response.",
      "Strengthening disaster preparedness in educational institutions.",
      "Collaboration with agricultural experts to manage crop failure risks.",
      "Introduction of digital tools in education for better learning continuity.",
      "Expansion of healthcare accessibility in rural areas to reduce health risks.",
      "Establishment of financial safety nets for farmers in times of crisis.",
    ];
  return {
    MitigationPlanID: faker.string.uuid(),
    RiskAssessmentID: riskAssessmentId,
    MitigationDescription: faker.helpers.arrayElement(mitigationDescriptions),
    MitigationStatus: Math.random() > 0.5,
    purge_id: purgeId,
  };
};

export {
  createSectorMitigationPlans,
  createSectorRiskAssessment,
  createSectorPerformanceMetrics,
  createGDPPerformance,
  createGovtSchemes,
  createSectoralAllocations,
  createDistrictInfo,
};