import {
  createNoorSystemData,
  createStudentData,
  createStudentPerformanceMetrics,
  createStudentRiskIndicators,
  createParentalEngagement,
  createParentalInvolvementMetrics,
  createEngagementRiskIndicators,
} from "./helpers.js";

// Function to Generate Full Data Structure for NoorSystem
export const generateFullNoorSystemData = (
  purgeId,
  totalCount = 1000,
  incrementEachLevel = 5
) => {
  // Initialize data storage for different entities
  const data = {
    noorSystems: [],
    studentData: [],
    studentPerformanceMetrics: [],
    studentRiskIndicators: [],
    parentalEngagement: [],
    parentalInvolvementMetrics: [],
    engagementRiskIndicators: [],
  };

  // Step 1: Generate NoorSystem Data
  for (let i = 0; i < totalCount; i++) {
    const noorSystem = createNoorSystemData(purgeId);
    data.noorSystems.push(noorSystem);

    // Step 2: Generate Student Data for each NoorSystem
    for (let j = 0; j < incrementEachLevel; j++) {
      const studentData = createStudentData(purgeId, noorSystem.noorSystem_id);
      data.studentData.push(studentData);

      // Step 3: Generate Student Performance Metrics for each Student Data
      const studentPerformanceMetrics = createStudentPerformanceMetrics(
        purgeId,
        studentData.studentData_id
      );
      data.studentPerformanceMetrics.push(studentPerformanceMetrics);

      // Step 4: Generate Student Risk Indicators for each Student Performance Metric
      const studentRiskIndicators = createStudentRiskIndicators(
        purgeId,
        studentPerformanceMetrics.studentPerformanceMetric_id
      );
      data.studentRiskIndicators.push(studentRiskIndicators);
    }

    // Step 5: Generate Parental Engagement Data for each NoorSystem
    for (let k = 0; k < incrementEachLevel; k++) {
      const parentalEngagement = createParentalEngagement(
        purgeId,
        noorSystem.noorSystem_id
      );
      data.parentalEngagement.push(parentalEngagement);

      // Step 6: Generate Parental Involvement Metrics for each Parental Engagement
      const parentalInvolvementMetrics = createParentalInvolvementMetrics(
        purgeId,
        parentalEngagement.parentalEngagement_id
      );
      data.parentalInvolvementMetrics.push(parentalInvolvementMetrics);

      // Step 7: Generate Engagement Risk Indicators for each Parental Involvement Metric
      const engagementRiskIndicators = createEngagementRiskIndicators(
        purgeId,
        parentalInvolvementMetrics.parentalInvolvementMetric_id
      );
      data.engagementRiskIndicators.push(engagementRiskIndicators);
    }
  }

  return data;
};
