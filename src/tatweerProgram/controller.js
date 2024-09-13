import {
  createTatweerProgram,
  createSmartClassrooms,
  createClassroomTechnologyMetrics,
  createTechnologyRiskIndicators,
  createDeviceUsageMetrics,
  createDevicePerformanceTracking,
  createTeacherTraining,
  createTrainingEffectivenessMetrics,
  createTrainingRiskIndicators,
} from "./helpers.js";
import { faker, getRandomNumber } from "../faker/faker.js";
import fs from "fs/promises";

export async function generateDataForTatweerProgram(
  totalCount,
  incrementEachLevel,
  purgeId
) {
  // Initialize data storage
  const data = {
    tatweerProgram: [],
    smartClassrooms: [],
    teacherTraining: [],
    classroomTechnologyMetrics: [],
    deviceUsageMetrics: [],
    trainingEffectivenessMetrics: [],
    technologyRiskIndicators: [],
    devicePerformanceTracking: [],
    trainingRiskIndicators: [],
  };

  // Step 1: Generate homeowners (Top Level)
  for (
    let i = 0;
    i <
    totalCount + incrementEachLevel + incrementEachLevel + incrementEachLevel;
    i++
  ) {
    const tatweerProgram = createTatweerProgram(purgeId);
    i < totalCount ? data.tatweerProgram.push(tatweerProgram) : "";
    // Generate SmartClassrooms
    const smartClassrooms = createSmartClassrooms(
      totalCount - i - incrementEachLevel > 0
        ? tatweerProgram.smartClassroom_id
        : faker.string.uuid(),
      totalCount - i - incrementEachLevel > 0
        ? tatweerProgram.tatweerProgram_id
        : faker.string.uuid(),
      purgeId
    );
    i < totalCount + incrementEachLevel * 1
      ? data.smartClassrooms.push(smartClassrooms)
      : "";

    // Generate Classroom TechnologyMetrics
    const classroomTechnologyMetrics = createClassroomTechnologyMetrics(
      totalCount - i - i - incrementEachLevel > 0
        ? smartClassrooms.classroomTechnologyMetric_id
        : faker.string.uuid(),
      totalCount - i - i - incrementEachLevel > 0
        ? smartClassrooms.smartClassroom_id
        : faker.string.uuid(),
      purgeId
    );
    i < totalCount + incrementEachLevel * 2
      ? data.classroomTechnologyMetrics.push(classroomTechnologyMetrics)
      : "";
    // Generate Technology Risk Indicators
    const technologyRiskIndicators = createTechnologyRiskIndicators(
      totalCount - i - i - i - incrementEachLevel > 0
        ? classroomTechnologyMetrics.technologyRiskIndicator_id
        : faker.string.uuid(),
      totalCount - i - i - i - incrementEachLevel > 0
        ? classroomTechnologyMetrics.classroomTechnologyMetric_id
        : faker.string.uuid(),
      purgeId
    );
    i < totalCount + incrementEachLevel * 3
      ? data.technologyRiskIndicators.push(technologyRiskIndicators)
      : "";

    // Device Usage Metrics TechnologyMetrics
    const deviceUsageMetrics = createDeviceUsageMetrics(
      totalCount - i - i - incrementEachLevel > 0
        ? smartClassrooms.smartClassroom_id
        : faker.string.uuid(),
      purgeId
    );
    i < totalCount + incrementEachLevel * 2
      ? data.deviceUsageMetrics.push(deviceUsageMetrics)
      : "";
    // Device Performance Tracking TechnologyMetrics
    const devicePerformanceTracking = createDevicePerformanceTracking(
      totalCount - i - i - i - incrementEachLevel > 0
        ? deviceUsageMetrics.devicePerformanceTracking_id
        : faker.string.uuid(),
      totalCount - i - i - i - incrementEachLevel > 0
        ? deviceUsageMetrics.deviceUsageMetric_id
        : faker.string.uuid(),
      purgeId
    );
    i < totalCount + incrementEachLevel * 3
      ? data.devicePerformanceTracking.push(devicePerformanceTracking)
      : "";

    // Generate TeacherTraining
    const teacherTraining = createTeacherTraining(
      totalCount - i - incrementEachLevel > 0
        ? tatweerProgram.teacherTraining_id
        : faker.string.uuid(),
      totalCount - i - incrementEachLevel > 0
        ? tatweerProgram.tatweerProgram_id
        : faker.string.uuid(),
      purgeId
    );
    i < totalCount + incrementEachLevel * 1
      ? data.teacherTraining.push(teacherTraining)
      : "";

    // Generate TrainingEffectivenessMetrics
    const trainingEffectivenessMetrics = createTrainingEffectivenessMetrics(
      totalCount - i - i - incrementEachLevel > 0
        ? teacherTraining.trainingEffectivenessMetric_id
        : faker.string.uuid(),
      totalCount - i - i - incrementEachLevel > 0
        ? teacherTraining.teacherTraining_id
        : faker.string.uuid(),
      purgeId
    );
    i < totalCount + incrementEachLevel * 2
      ? data.trainingEffectivenessMetrics.push(trainingEffectivenessMetrics)
      : "";
    // Generate TrainingRiskIndicators
    const trainingRiskIndicators = createTrainingRiskIndicators(
      totalCount - i - i - i - incrementEachLevel > 0
        ? trainingEffectivenessMetrics.trainingRiskIndicator_id
        : faker.string.uuid(),
      totalCount - i - i - i - incrementEachLevel > 0
        ? trainingEffectivenessMetrics.trainingEffectivenessMetric_id
        : faker.string.uuid(),
      purgeId
    );
    i < totalCount + incrementEachLevel * 3
      ? data.trainingRiskIndicators.push(trainingRiskIndicators)
      : "";
  }
  // await fs.writeFile("data.json", JSON.stringify(data, null, 2));

  return data;
}
