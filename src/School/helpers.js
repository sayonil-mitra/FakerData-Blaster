import { faker } from "@faker-js/faker";
import { programNames, saudiSchoolNames } from "./helperData.js";

// School Entity
const createSchoolData = (purgeId) => {
  return {
    school_id: faker.string.uuid(),
    school_name: faker.helpers.arrayElement(saudiSchoolNames),
    location: faker.location.streetAddress(),
    established_year: faker.date.past(50).getFullYear().toString(),
    schoolInfrastructure_id: faker.string.uuid(),
    curriculumPrograms_id: faker.string.uuid(),
    purge_id: purgeId,
  };
};

// School Infrastructure Entity
const createSchoolInfrastructure = (purgeId, school_id) => {
  return {
    schoolInfrastructure_id: faker.string.uuid(),
    school_id: school_id,
    building_quality: faker.helpers.arrayElement([
      "Excellent",
      "Good",
      "Average",
      "Below Average",
      "Poor",
    ]),
    capacity: faker.number.int({ min: 200, max: 2000 }).toString(),
    purge_id: purgeId,
  };
};

// Infrastructure Performance Metrics
const createInfrastructurePerformanceMetrics = (
  purgeId,
  schoolInfrastructure_id
) => {
  return {
    infrastructurePerformanceMetric_id: faker.string.uuid(),
    schoolInfrastructure_id: schoolInfrastructure_id,
    infrastructure_score: faker.number.int({ min: 1, max: 100 }).toString(),
    purge_id: purgeId,
  };
};

// Infrastructure Risk Indicators
const createInfrastructureRiskIndicators = (
  purgeId,
  infrastructurePerformanceMetric_id
) => {
  return {
    infrastructureRiskIndicator_id: faker.string.uuid(),
    infrastructurePerformanceMetric_id: infrastructurePerformanceMetric_id,
    risk_level: faker.helpers.arrayElement([
      "Low",
      "Moderate",
      "High",
      "Very High",
      "Critical",
    ]),
    purge_id: purgeId,
  };
};

// Curriculum Programs Entity
const createCurriculumPrograms = (purgeId, school_id) => {
  return {
    curriculumProgram_id: faker.string.uuid(),
    school_id: school_id,
    program_name: faker.helpers.arrayElement(programNames),
    program_duration: faker.number.int({ min: 1, max: 4 }) + " years",
    purge_id: purgeId,
  };
};

// Curriculum Effectiveness Metrics
const createCurriculumEffectivenessMetrics = (
  purgeId,
  curriculumProgram_id
) => {
  return {
    curriculumEffectivenessMetric_id: faker.string.uuid(),
    curriculumProgram_id: curriculumProgram_id,
    effectiveness_score: faker.number.int({ min: 1, max: 100 }).toString(),
    purge_id: purgeId,
  };
};

// Curriculum Risk Indicators
const createCurriculumRiskIndicators = (
  purgeId,
  curriculumEffectivenessMetric_id
) => {
  return {
    curriculumRiskIndicator_id: faker.string.uuid(),
    curriculumEffectivenessMetric_id: curriculumEffectivenessMetric_id,
    risk_level: faker.helpers.arrayElement([
      "Low",
      "Moderate",
      "High",
      "Very High",
      "Critical",
    ]),
    purge_id: purgeId,
  };
};


export {
  createCurriculumPrograms,
  createCurriculumEffectivenessMetrics,
  createCurriculumRiskIndicators,
  createInfrastructureRiskIndicators,
  createInfrastructurePerformanceMetrics,
  createSchoolInfrastructure,
  createSchoolData,
};