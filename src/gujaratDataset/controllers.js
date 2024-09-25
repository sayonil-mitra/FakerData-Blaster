import {
  createDistrictInfo,
  createSectoralAllocations,
  createGovtSchemes,
  createGDPPerformance,
  createSectorPerformanceMetrics,
  createSectorRiskAssessment,
  createSectorMitigationPlans,
} from "./helpers.js";
import { districtsDataset } from "./helperData.js";

// Full Data Structure for Districts and their related entities
export const generateFullDistrictData = (purgeId, totalCount = districtsDataset.length) => {
  const data = {
    districts: [],
    sectoralAllocations: [],
    govtSchemes: [],
    gdpPerformance: [],
    sectorPerformanceMetrics: [],
    sectorRiskAssessments: [],
    sectorMitigationPlans: [],
  };

  for (let i = 0; i < totalCount; i++) {
    const districtData = districtsDataset[i];

    // Step 1: Generate District Info
    const district = createDistrictInfo(purgeId, districtData);
    data.districts.push(district);

    // Step 2: Generate Sectoral Allocations
    const sectoralAllocations = createSectoralAllocations(
      purgeId,
      district.DistrictID,
      districtData
    );
    data.sectoralAllocations.push(sectoralAllocations);

    // Step 3: Generate Government Schemes
    const govtSchemes = createGovtSchemes(
      purgeId,
      district.DistrictID,
      districtData
    );
    data.govtSchemes.push(...govtSchemes);

    // Step 4: Generate GDP Performance
    const gdpPerformance = createGDPPerformance(
      purgeId,
      district.DistrictID,
      districtData
    );
    data.gdpPerformance.push(gdpPerformance);

    // Step 5: Generate Sector Performance Metrics
    const sectorPerformanceMetrics = createSectorPerformanceMetrics(
      purgeId,
      sectoralAllocations.SectorAllocationID,
      districtData
    );
    data.sectorPerformanceMetrics.push(sectorPerformanceMetrics);

    // Step 6: Generate Sector Risk Assessment
    const sectorRiskAssessment = createSectorRiskAssessment(
      purgeId,
      sectorPerformanceMetrics.SectorPerformanceID
    );
    data.sectorRiskAssessments.push(sectorRiskAssessment);

    // Step 7: Generate Sector Mitigation Plans
    const sectorMitigationPlans = createSectorMitigationPlans(
      purgeId,
      sectorRiskAssessment.RiskAssessmentID
    );
    data.sectorMitigationPlans.push(sectorMitigationPlans);
  }

  return data;
};
