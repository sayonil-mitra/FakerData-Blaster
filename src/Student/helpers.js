import { faker } from "@faker-js/faker";
import {
  gradeLevels,
  device_types,
  engagement_levels,
  saudiFirstNames,
  saudiLastNames,
} from "./helperData.js";


 const selectedGrade = faker.helpers.arrayElement(gradeLevels);


// Student Entity
const createStudentData = (purgeId) => {

     // Calculate a birthdate based on the selected grade's age range
     const birthdate = faker.date
       .birthdate({
         min: selectedGrade.minAge,
         max: selectedGrade.maxAge,
         mode: "age",
       })
       .toISOString()
       .split("T")[0];
       
     const studentName = `${faker.helpers.arrayElement(
       saudiFirstNames
     )} ${faker.helpers.arrayElement(saudiLastNames)}`;

  return {
    student_id: faker.string.uuid(),
    student_name: studentName,
    date_of_birth: birthdate,
    enrollment_date: faker.date.past(2).toISOString().split("T")[0],
    grade_level: selectedGrade.level,
    address: faker.location.streetAddress(),
    purge_id: purgeId,
  };
};

// Student Profiles Entity
const createStudentProfileData = (purgeId, studentId) => {
  return {
    studentProfile_id: faker.string.uuid(),
    student_id: studentId,
    grade_level: selectedGrade.level,
    special_needs: faker.helpers.arrayElement(["Yes", "No"]),
    purge_id: purgeId,
  };
};

// Academic Progress Metrics Entity
const createAcademicProgressMetrics = (purgeId, studentProfileId) => {
  return {
    academicProgressMetric_id: faker.string.uuid(),
    studentProfile_id: studentProfileId,
    performance_score: faker.number
      .int({ min: 50, max: 100 })
      .toFixed(),
    attendance_rate: faker.number
      .int({ min: 75, max: 100})
      .toFixed(),
    purge_id: purgeId,
  };
};

// Performance Improvement Plans Entity
const createPerformanceImprovementPlans = (
  purgeId,
  academicProgressMetricId
) => {
  return {
    performanceImprovementPlan_id: faker.string.uuid(),
    academicProgressMetric_id: academicProgressMetricId,
    action_description: faker.lorem.sentence(),
    progress_status: faker.helpers.arrayElement([
      "In Progress",
      "Completed",
      "Pending",
      "Not Started",
      "Delayed",
      "Under Review",
      "Cancelled",
      "On Hold",
      "Needs Revision",
      "Awaiting Feedback",
    ]),
    purge_id: purgeId,
  };
};

// Learning Styles Entity
const createLearningStyles = (purgeId, studentId) => {
  return {
    learningStyle_id: faker.string.uuid(),
    student_id: studentId,
    learning_preference: faker.helpers.arrayElement([
      "Visual",
      "Auditory",
      "Kinesthetic",
      "Reading/Writing",
      "Logical",
      "Social",
      "Solitary",
      "Verbal",
      "Interactive",
      "Hands-on",
    ]),
    purge_id: purgeId,
  };
};

// Learning Effectiveness Metrics Entity
const createLearningEffectivenessMetrics = (
  purgeId,
  learningStyleId
) => {
  return {
    learningEffectivenessMetric_id: faker.string.uuid(),
    learningStyle_id: learningStyleId,
    effectiveness_score: faker.number
      .int({ min: 60, max: 100})
      .toFixed(1),
    purge_id: purgeId,
  };
};

// Learning Improvement Tracking Entity
const createLearningImprovementTracking = (
  purgeId,
  learningEffectivenessMetricId
) => {
  return {
    learningImprovementTracking_id: faker.string.uuid(),
    learningEffectivenessMetric_id: learningEffectivenessMetricId,
    improvement_percentage: faker.number
      .int({ min: 5, max: 30})
      .toFixed(1),
    purge_id: purgeId,
  };
};

// Digital Engagement Entity
const createDigitalEngagement = (purgeId, studentId) => {
  return {
    digitalEngagement_id: faker.string.uuid(),
    student_id: studentId,
    screen_time_hours: faker.number
      .float({ min: 1.0, max: 8.0, precision: 0.1 })
      .toFixed(1),
    device_type: faker.helpers.arrayElement(device_types),
    purge_id: purgeId,
  };
};

// Engagement Metrics Entity
const createEngagementMetrics = (purgeId, digitalEngagementId) => {
  return {
    engagementMetric_id: faker.string.uuid(),
    digitalEngagement_id: digitalEngagementId,
    engagement_level: faker.helpers.arrayElement(engagement_levels),
    purge_id: purgeId,
  };
};

// Engagement Risk Indicators Entity
const createEngagementRiskIndicators = (purgeId, engagementMetricId) => {
  return {
    engagementRiskIndicator_id: faker.string.uuid(),
    engagementMetric_id: engagementMetricId,
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
};
