import {
  createContentProviderData,
  createCurriculumDevelopment,
  createCurriculumReviewMetrics,
  createCurriculumImprovementPlans,
  createDigitalContentDelivery,
  createContentPerformanceMetrics,
  createContentRiskIndicators,
  createEducationalResources,
  createResourceQualityMetrics,
  createResourceRiskTracking,
} from "./helper.js";

// Function to Generate Full Data Structure for Content Provider
export const generateFullContentProviderData = (
  purgeId,
  totalCount = 1000,
  incrementEachLevel = 5
) => {
  // Initialize data storage
  const data = {
    contentProviders: [],
    curriculumDevelopments: [],
    curriculumReviewMetrics: [],
    curriculumImprovementPlans: [],
    digitalContentDeliveries: [],
    contentPerformanceMetrics: [],
    contentRiskIndicators: [],
    educationalResources: [],
    resourceQualityMetrics: [],
    resourceRiskTrackings: [],
  };

  // Step 1: Generate Content Providers
  for (let i = 0; i < totalCount; i++) {
    const contentProvider = createContentProviderData(purgeId);
    data.contentProviders.push(contentProvider);

    // Step 2: Generate Curriculum Development for each Content Provider
    for (let j = 0; j < incrementEachLevel; j++) {
      const curriculumDevelopment = createCurriculumDevelopment(
        purgeId,
        contentProvider.contentProvider_id
      );
      data.curriculumDevelopments.push(curriculumDevelopment);

      // Step 3: Generate Curriculum Review Metrics
      const curriculumReviewMetrics = createCurriculumReviewMetrics(
        purgeId,
        curriculumDevelopment.curriculumDevelopment_id
      );
      data.curriculumReviewMetrics.push(curriculumReviewMetrics);

      // Step 4: Generate Curriculum Improvement Plans
      const curriculumImprovementPlans = createCurriculumImprovementPlans(
        purgeId,
        curriculumReviewMetrics.curriculumReviewMetric_id
      );
      data.curriculumImprovementPlans.push(curriculumImprovementPlans);
    }

    // Step 5: Generate Digital Content Delivery for each Content Provider
    for (let j = 0; j < incrementEachLevel; j++) {
      const digitalContentDelivery = createDigitalContentDelivery(
        purgeId,
        contentProvider.contentProvider_id
      );
      data.digitalContentDeliveries.push(digitalContentDelivery);

      // Step 6: Generate Content Performance Metrics
      const contentPerformanceMetrics = createContentPerformanceMetrics(
        purgeId,
        digitalContentDelivery.digitalContentDelivery_id
      );
      data.contentPerformanceMetrics.push(contentPerformanceMetrics);

      // Step 7: Generate Content Risk Indicators
      const contentRiskIndicators = createContentRiskIndicators(
        purgeId,
        contentPerformanceMetrics.contentPerformanceMetric_id
      );
      data.contentRiskIndicators.push(contentRiskIndicators);
    }

    // Step 8: Generate Educational Resources for each Content Provider
    for (let j = 0; j < incrementEachLevel; j++) {
      const educationalResources = createEducationalResources(
        purgeId,
        contentProvider.contentProvider_id
      );
      data.educationalResources.push(educationalResources);

      // Step 9: Generate Resource Quality Metrics
      const resourceQualityMetrics = createResourceQualityMetrics(
        purgeId,
        educationalResources.educationalResource_id
      );
      data.resourceQualityMetrics.push(resourceQualityMetrics);

      // Step 10: Generate Resource Risk Tracking
      const resourceRiskTracking = createResourceRiskTracking(
        purgeId,
        resourceQualityMetrics.resourceQualityMetric_id
      );
      data.resourceRiskTrackings.push(resourceRiskTracking);
    }
  }

  return data;
};
