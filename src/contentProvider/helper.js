import { faker } from "@faker-js/faker";
import {
  content_providers,
  specializations,
  subjects,
  curriculum_types,
  curriculumImprovementPlans_status,
  content_deliveryMethods,
  resource_types,
  resource_names,
} from "./helperData.js";

// ContentProvider Data
const createContentProviderData = (purgeId) => {
  return {
    contentProvider_id: faker.string.uuid(),
    provider_name: faker.helpers.arrayElement(content_providers),
    established_year: faker.date.past().getFullYear().toString(),
    specialization: faker.helpers.arrayElement(specializations),
    curriculumDevelopment_id: faker.string.uuid(),
    digitalContentDelivery_id: faker.string.uuid(),
    educationalResources_id: faker.string.uuid(),
    purge_id: purgeId,
  };
};

// Curriculum Development Data
const createCurriculumDevelopment = (purgeId, contentProvider_id) => {
  return {
    curriculumDevelopment_id: faker.string.uuid(),
    contentProvider_id: contentProvider_id,
    curriculumReviewMetric_id: faker.string.uuid(),
    subject_name: faker.helpers.arrayElement(subjects),
    curriculum_type: faker.helpers.arrayElement(curriculum_types),
    purge_id: purgeId,
  };
};

// Curriculum Review Metrics Data
const createCurriculumReviewMetrics = (
  purgeId,
  curriculumDevelopment_id
) => {
  return {
    curriculumReviewMetric_id: faker.string.uuid(),
    curriculumDevelopment_id: curriculumDevelopment_id,
    curriculumImprovementPlan_id: faker.string.uuid(),
    review_score: faker.number.int({ min: 50, max: 100 }).toString(),
    review_date: faker.date.past().toISOString().split("T")[0],
    purge_id: purgeId,
  };
};

// Curriculum Improvement Plans Data
const createCurriculumImprovementPlans = (
  purgeId,
  curriculumReviewMetric_id
) => {
  return {
    curriculumImprovementPlan_id: faker.string.uuid(),
    curriculumReviewMetric_id: curriculumReviewMetric_id,
    improvement_description: faker.lorem.sentence(),
    completion_status: faker.helpers.arrayElement(
      curriculumImprovementPlans_status
    ),
    purge_id: purgeId,
  };
};

// Digital Content Delivery Data
const createDigitalContentDelivery = (purgeId, contentProvider_id) => {
  return {
    digitalContentDelivery_id: faker.string.uuid(),
    contentProvider_id: contentProvider_id,
    contentPerformanceMetric_id: faker.string.uuid(),
    delivery_method: faker.helpers.arrayElement(content_deliveryMethods),
    delivery_time: faker.date.recent().toISOString().split("T")[1],
    purge_id: purgeId,
  };
};

// Content Performance Metrics Data
const createContentPerformanceMetrics = (
  purgeId,
  digitalContentDelivery_id
) => {
  return {
    contentPerformanceMetric_id: faker.string.uuid(),
    digitalContentDelivery_id: digitalContentDelivery_id,
    performance_score: faker.number.int({ min: 30, max: 100 }).toString(),
    contentRiskIndicator_id: faker.string.uuid(),
    purge_id: purgeId,
  };
};

// Content Risk Indicators Data
const createContentRiskIndicators = (
  purgeId,
  contentPerformanceMetric_id
) => {
  return {
    contentRiskIndicator_id: faker.string.uuid(),
    contentPerformanceMetric_id: contentPerformanceMetric_id,
    risk_level: faker.helpers.arrayElement([
      "Low",
      "Moderate",
      "High",
      "Critical",
    ]),
    purge_id: purgeId,
  };
};

// Educational Resources Data
const createEducationalResources = (purgeId, contentProvider_id) => {
  return {
    educationalResource_id: faker.string.uuid(),
    contentProvider_id: contentProvider_id,
    resourceQualityMetric_id: faker.string.uuid(),
    resource_name: faker.helpers.arrayElement(resource_names),
    resource_type: faker.helpers.arrayElement(resource_types),
    purge_id: purgeId,
  };
};

// Resource Quality Metrics Data
const createResourceQualityMetrics = (
  purgeId,
  educationalResource_id
) => {
  return {
    resourceQualityMetric_id: faker.string.uuid(),
    educationalResource_id: educationalResource_id,
    resourceRiskTracking_id: faker.string.uuid(),
    quality_score: faker.number.int({ min: 50, max: 100 }).toString(),
    purge_id: purgeId,
  };
};

// Resource Risk Tracking Data
const createResourceRiskTracking = (
  purgeId,
  resourceQualityMetric_id
) => {
  return {
    resourceRiskTracking_id: faker.string.uuid(),
    resourceQualityMetric_id: resourceQualityMetric_id,
    risk_level: faker.helpers.arrayElement([
      "Low",
      "Moderate",
      "High",
      "Critical",
    ]),
    purge_id: purgeId,
  };
};

export {
  createResourceRiskTracking,
  createResourceQualityMetrics,
  createEducationalResources,
  createContentRiskIndicators,
  createContentPerformanceMetrics,
  createDigitalContentDelivery,
  createCurriculumImprovementPlans,
  createCurriculumReviewMetrics,
  createCurriculumDevelopment,
  createContentProviderData,
};