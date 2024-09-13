import { faker } from "../faker/faker.js";
import {
  NoorSystemData,
  StudentRiskIndicators,
  engagement_level,
  communication_frequency,
  risk_level
} from "./helperData.js";


// NoorSystem Data Generator
const createNoorSystemData = (purgeId) => {
  const randomNoorSystem = faker.helpers.arrayElement(NoorSystemData);
  return {
    noorSystem_id: faker.string.uuid(),
    system_name: randomNoorSystem.system_name,
    launch_date: faker.date.past().toISOString().split("T")[0],
    version: randomNoorSystem.version,
    studentData_id: faker.string.uuid(), 
    parentalEngagement_id: faker.string.uuid(),
    purge_id: purgeId,
  };
};

// StudentData Data Generator
const createStudentData = (purgeId, noorSystem_id) => {
  return {
    studentData_id: faker.string.uuid(),
    noorSystem_id: noorSystem_id,
    attendance_rate: faker.number.int({ min: 50, max: 100 }).toString() + "%",
    grades_average: faker.number
      .float({ min: 50, max: 100, precision: 0.1 })
      .toFixed(1),
    studentPerformanceMetric_id: faker.string.uuid(), 
    purge_id: purgeId,
  };
};

// StudentPerformanceMetrics Data Generator
const createStudentPerformanceMetrics = (purgeId, studentData_id) => {
  return {
    studentPerformanceMetric_id: faker.string.uuid(),
    studentData_id: studentData_id,
    academic_score: faker.number
      .float({ min: 30, max: 100, precision: 0.1 })
      .toFixed(1),
    attendance_score: faker.number
      .float({ min: 30, max: 100, precision: 0.1 })
      .toFixed(1),
    purge_id: purgeId,
  };
};

// StudentRiskIndicators Data Generator
const createStudentRiskIndicators = (purgeId, studentPerformanceMetric_id) => {
  return {
    studentRiskIndicator_id: faker.string.uuid(),
    studentPerformanceMetric_id: studentPerformanceMetric_id,
    risk_level: faker.helpers.arrayElement(StudentRiskIndicators),
    purge_id: purgeId,
  };
};

// ParentalEngagement Data Generator
const createParentalEngagement = (purgeId, noorSystem_id) => {
  return {
    parentalEngagement_id: faker.string.uuid(),
    noorSystem_id: noorSystem_id,
    engagement_level: faker.helpers.arrayElement(engagement_level),
    communication_frequency: faker.helpers.arrayElement(
      communication_frequency
    ),
    parentalInvolvementMetric_id: faker.string.uuid(),
    purge_id: purgeId,
  };
};

// ParentalInvolvementMetrics Data Generator
const createParentalInvolvementMetrics = (purgeId, parentalEngagement_id) => {
  return {
    parentalInvolvementMetric_id: faker.string.uuid(),
    parentalEngagement_id: parentalEngagement_id,
    involvement_score: faker.number
      .float({ min: 30, max: 100, precision: 0.1 })
      .toFixed(1),
    engagementRiskIndicator_id: faker.string.uuid(),
    purge_id: purgeId,
  };
};

// EngagementRiskIndicators Data Generator
const createEngagementRiskIndicators = (
  purgeId,
  parentalInvolvementMetric_id
) => {
  return {
    engagementRiskIndicator_id: faker.string.uuid(),
    parentalInvolvementMetric_id: parentalInvolvementMetric_id,
    risk_level: faker.helpers.arrayElement(risk_level),
    purge_id: purgeId,
  };
};


export {
  createNoorSystemData,
  createStudentData,
  createStudentPerformanceMetrics,
  createStudentRiskIndicators,
  createParentalEngagement,
  createParentalInvolvementMetrics,
  createEngagementRiskIndicators,
};
