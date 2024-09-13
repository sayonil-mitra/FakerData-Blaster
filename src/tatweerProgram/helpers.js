import { faker } from "../faker/faker.js";
import { tatweerProgram } from "./data.js";

// Tatweer Program Entity Generator
const createTatweerProgram = (purgeId) => {
  var res = faker.helpers.arrayElement(tatweerProgram.tatweerProgram);
  var currTime = String(faker.date.anytime());
  return {
    tatweerProgram_id: faker.string.uuid(),
    start_date: currTime,
    end_date: String(faker.date.soon(60, currTime)),
    budget_allocated: "د.ك"+" "+String(faker.number.int({min:700000, max:2500000})),
    budget_utilized: "د.ك"+" "+String(faker.finance.amount({min:0, max:700000})),
    smartClassroom_id: faker.string.uuid(),
    teacherTraining_id: faker.string.uuid(),
    purge_id: purgeId,
    ...res,
  };
};

// Smart Classrooms Entity Generator
const createSmartClassrooms = (
  smartClassroom_id,
  tatweerProgram_id,
  purgeId
) => ({
  smartClassroom_id: smartClassroom_id,
  tatweerProgram_id: tatweerProgram_id,
  devices_count: String(faker.number.int({ min: 50, max: 1000 })),
  technology_type: faker.helpers.arrayElement(tatweerProgram.smartClassrooms),
  classroomTechnologyMetric_id: faker.string.uuid(),
  deviceUsageMetric_id: faker.string.uuid(),
  purge_id: purgeId,
});

// Classroom Technology Metrics Entity Generator
const createClassroomTechnologyMetrics = (
  classroomTechnologyMetric_id,
  smartClassroom_id,
  purgeId
) => ({
  technologyRiskIndicator_id: faker.string.uuid(),
  classroomTechnologyMetric_id: classroomTechnologyMetric_id,
  smartClassroom_id: smartClassroom_id,
  uptime_percentage: String(faker.number.int({ min: 0, max: 100 })),
  performance_score: String(faker.number.int({ min: 0, max: 10 })),
  purge_id: purgeId,
});

// Technology Rist Indicators Entity Generator
const createTechnologyRiskIndicators = (
  technologyRiskIndicator_id,
  classroomTechnologyMetric_id,
  purgeId
) => ({
  technologyRiskIndicator_id: technologyRiskIndicator_id,
  classroomTechnologyMetric_id: classroomTechnologyMetric_id,
  risk_level: faker.helpers.arrayElement(
    tatweerProgram.technologyRiskIndicators
  ),
  purge_id: purgeId,
});

// Device Usage Metrics Entity Generator
const createDeviceUsageMetrics = (smartClassroom_id, purgeId) => ({
  deviceUsageMetric_id: faker.string.uuid(),
  device_type: faker.helpers.arrayElement(tatweerProgram.deviceUsageMetrics),
  smartClassroom_id: smartClassroom_id,
  usage_hours: String(faker.number.int({ min: 0, max: 18 })),
  devicePerformanceTracking_id: faker.string.uuid(),
  purge_id: purgeId,
});

// Device Performance Tracking Entity Generator
const createDevicePerformanceTracking = (
  devicePerformanceTracking_id,
  deviceUsageMetric_id,
  purgeId
) => ({
  devicePerformanceTracking_id: devicePerformanceTracking_id,
  deviceUsageMetric_id: deviceUsageMetric_id,
  performance_rating: String(faker.number.int({ min: 0, max: 5 })),
  purge_id: purgeId,
});

// Teacher Training Entity Generator
const createTeacherTraining = (
  teacherTraining_id,
  tatweerProgram_id,
  purgeId
) => ({
  teacherTraining_id: teacherTraining_id,
  tatweerProgram_id: tatweerProgram_id,
  training_program: faker.helpers.arrayElement(tatweerProgram.teacherTraining),
  completion_status: faker.helpers.arrayElement([
    "Done",
    "Inprogress",
    "Pending",
    "Rejected",
  ]),
  trainingEffectivenessMetric_id: faker.string.uuid(),
  purge_id: purgeId,
});

//Training Effectiveness Metrics Entity Generator
const createTrainingEffectivenessMetrics = (
  trainingEffectivenessMetric_id,
  teacherTraining_id,
  purgeId
) => ({
  trainingEffectivenessMetric_id: trainingEffectivenessMetric_id,
  teacherTraining_id: teacherTraining_id,
  effectiveness_score: String(faker.number.int({ min: 0, max: 10 })),
  trainingRiskIndicator_id: faker.string.uuid(),
  purge_id: purgeId,
});

//Training Risk Indicators Entity Generator
const createTrainingRiskIndicators = (
  trainingRiskIndicator_id,
  trainingEffectivenessMetric_id,
  purgeId
) => ({
  trainingRiskIndicator_id: trainingRiskIndicator_id,
  trainingEffectivenessMetric_id: trainingEffectivenessMetric_id,
  risk_level: faker.helpers.arrayElement(tatweerProgram.trainingRiskIndicators),
  purge_id: purgeId,
});

export {
  createClassroomTechnologyMetrics,
  createTatweerProgram,
  createSmartClassrooms,
  createTechnologyRiskIndicators,
  createDeviceUsageMetrics,
  createDevicePerformanceTracking,
  createTeacherTraining,
  createTrainingEffectivenessMetrics,
  createTrainingRiskIndicators,
};
