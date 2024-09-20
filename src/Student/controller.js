import {
  createEngagementRiskIndicators,
  createEngagementMetrics,
  createDigitalEngagement,
  createLearningImprovementTracking,
  createLearningEffectivenessMetrics,
  createLearningStyles,
  createPerformanceImprovementPlans,
  createAcademicProgressMetrics,
  createStudentProfileData,
  createStudentData,
} from "./helpers.js";

// Full Data Structure for Student
export const generateFullStudentData = (purgeId, totalCount = 1000) => {
  const data = {
    students: [],
    studentProfiles: [],
    academicProgressMetrics: [],
    performanceImprovementPlans: [],
    learningStyles: [],
    learningEffectivenessMetrics: [],
    learningImprovementTracking: [],
    digitalEngagement: [],
    engagementMetrics: [],
    engagementRiskIndicators: [],
  };

  // Step 1: Generate Students
  for (let i = 0; i < totalCount; i++) {
    const student = createStudentData(purgeId);
    data.students.push(student);

    // Step 2: Generate a single Student Profile for each Student
    const studentProfile = createStudentProfileData(
      purgeId,
      student.student_id
    );
    data.studentProfiles.push(studentProfile);

    // Step 3: Generate Academic Progress Metrics for the Student Profile
    const academicProgressMetric = createAcademicProgressMetrics(
      purgeId,
      studentProfile.studentProfile_id
    );
    data.academicProgressMetrics.push(academicProgressMetric);

    // Step 4: Generate a Performance Improvement Plan for each Academic Progress Metric
    const performanceImprovementPlan = createPerformanceImprovementPlans(
      purgeId,
      academicProgressMetric.academicProgressMetric_id
    );
    data.performanceImprovementPlans.push(performanceImprovementPlan);

    // Step 5: Generate Learning Styles for each Student
    const learningStyle = createLearningStyles(purgeId, student.student_id);
    data.learningStyles.push(learningStyle);

    // Step 6: Generate Learning Effectiveness Metrics for the Learning Style
    const learningEffectivenessMetric = createLearningEffectivenessMetrics(
      purgeId,
      learningStyle.learningStyle_id
    );
    data.learningEffectivenessMetrics.push(learningEffectivenessMetric);

    // Step 7: Generate Learning Improvement Tracking for Learning Effectiveness Metrics
    const learningImprovementTracking = createLearningImprovementTracking(
      purgeId,
      learningEffectivenessMetric.learningEffectivenessMetric_id
    );
    data.learningImprovementTracking.push(learningImprovementTracking);

    // Step 8: Generate Digital Engagement for each Student
    const digitalEngagement = createDigitalEngagement(
      purgeId,
      student.student_id
    );
    data.digitalEngagement.push(digitalEngagement);

    // Step 9: Generate Engagement Metrics for Digital Engagement
    const engagementMetric = createEngagementMetrics(
      purgeId,
      digitalEngagement.digitalEngagement_id
    );
    data.engagementMetrics.push(engagementMetric);

    // Step 10: Generate Engagement Risk Indicators for Engagement Metrics
    const engagementRiskIndicator = createEngagementRiskIndicators(
      purgeId,
      engagementMetric.engagementMetric_id
    );
    data.engagementRiskIndicators.push(engagementRiskIndicator);
  }

  return data;
};
