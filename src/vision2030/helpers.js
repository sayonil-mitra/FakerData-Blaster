import { faker } from "../faker/faker.js";
import { vision2030 } from "./startingData/vision2030.js";
import { educationalGoals } from "./startingData/educationalGoals.js";
import { metric_name } from "./startingData/performanceMetric.js";
import { action_description } from "./startingData/riskMitigationActions.js";
import { plan_description } from "./startingData/stepMitigationPlans.js";

let randomVision2030 = faker.helpers.arrayElements(vision2030, 30);
let randomEducationalGoals = faker.helpers.arrayElements(educationalGoals, 30);
let randomPerformanceMetric = faker.helpers.arrayElements(metric_name, 30);
let randomRiskMitigationAction = faker.helpers.arrayElements(
  action_description,
  30
);
let randomStepMitigationPlan = faker.helpers.arrayElements(
  plan_description,
  30
);
const years = [2020, 2021, 2022, 2023, 2024];

// Vision2030 Entity Generator
const createVision2030 = (purgeId) => ({
  vision2030Id: faker.string.uuid(),
  educationalGoalId: faker.string.uuid(),
  stemCompetitivenessId: faker.string.uuid(),
  globalCompetitivenessId: faker.string.uuid(),
  strategyName: faker.company.name(),
  description: faker.helpers.arrayElement(randomVision2030).description,
  startDate: faker.date.past(),
  endDate: faker.date.future(),
  currentStatus: faker.helpers.arrayElement(["Active", "Completed", "On Hold"]),
  createdBy: faker.person.fullName(),
  lastModifiedBy: faker.person.fullName(),
  creationDate: faker.date.past(),
  lastModifiedDate: faker.date.recent(),
  budgetAllocated: faker.number.float({ min: 100000, max: 10000000 }),
  budgetUtilized: faker.number.float({ min: 0, max: 10000000 }),
  primaryGoals: faker.helpers.arrayElement(randomVision2030).primaryGoals,
  keyChallenges: faker.helpers.arrayElement(randomVision2030).keyChallenges,
  stakeholders: faker.helpers.arrayElement(randomVision2030).stakeholders,
  geographicScope: faker.helpers.arrayElement(randomVision2030).geographicScope,
  riskFactors: faker.helpers.arrayElement(randomVision2030).riskFactors,
  mitigationPlans: faker.helpers.arrayElement(randomVision2030).mitigationPlans,
  relatedProjects: faker.lorem.sentence(),
  performanceMetrics:
    faker.helpers.arrayElement(randomVision2030).performanceMetrics,
  competitivenessScore: faker.number.float({ min: 0, max: 100 }),
  riskAssessmentStatus: faker.helpers.arrayElement(["Low", "Medium", "High"]),
  purge_id: purgeId,
});

// EducationalGoals Entity Generator
const createEducationalGoals = (purgeId) => ({
  educationalGoalId: faker.string.uuid(),
  goal_name: faker.helpers.arrayElement(randomEducationalGoals).goal_name,
  description: faker.helpers.arrayElement(randomEducationalGoals).description,
  target_value: faker.number.float({ min: 0, max: 100 }),
  purge_id: purgeId,
  goalRiskIndicatorId: faker.string.uuid(),
});

// PerformanceMetrics Entity Generator
const createPerformanceMetrics = (educationalGoalId, purgeId) => ({
  performanceMetricId: faker.string.uuid(),
  metric_name: faker.helpers.arrayElement(randomPerformanceMetric),
  current_value: faker.number.float({ min: 0, max: 100 }),
  target_value: faker.number.float({ min: 0, max: 100 }),
  educationalGoalId: educationalGoalId,
  purge_id: purgeId,
});

// OKRTracking Entity Generator
const createOKRTracking = (performanceMetricId, purgeId) => ({
  okrTrackingId: faker.string.uuid(),
  objective_name: faker.lorem.words(),
  key_result_name: faker.lorem.words(),
  progress: faker.number.float({ min: 0, max: 100 }),
  performanceMetricId: performanceMetricId,
  purge_id: purgeId,
});

// GoalRiskIndicators Entity Generator
const createGoalRiskIndicators = (performanceMetricId, purgeId) => ({
  goalRiskIndicatorId: faker.string.uuid(),
  performanceMetricId: performanceMetricId,
  risk_level: faker.helpers.arrayElement(["Low", "Medium", "High"]),
  impact_level: faker.helpers.arrayElement(["Minor", "Moderate", "Severe"]),
  purge_id: purgeId,
});

// RiskMitigationActions Entity Generator
const createRiskMitigationActions = (goalRiskIndicatorId, purgeId) => ({
  riskMitigationActionId: faker.string.uuid(),
  goalRiskIndicatorId: goalRiskIndicatorId,
  action_description: faker.helpers.arrayElement(randomRiskMitigationAction),
  completion_status: faker.datatype.boolean(),
  purge_id: purgeId,
});

// GlobalCompetitiveness Entity Generator
const createGlobalCompetitiveness = (educationalGoalId, purgeId) => ({
  globalCompetitivenessId: faker.string.uuid(),
  competitiveness_score: faker.number.float({ min: 0, max: 100 }),
  country_rank: faker.number.int({ min: 1, max: 200 }),
  educationalGoalId: educationalGoalId,
  purge_id: purgeId,
});

// CompetitivenessMetrics Entity Generator
const createCompetitivenessMetrics = (globalCompetitivenessId, purgeId) => ({
  competitivenessMetricId: faker.string.uuid(),
  benchmarkingDataId: faker.string.uuid(),
  metric_name: faker.lorem.words(),
  performance_score: faker.number.float({ min: 0, max: 100 }),
  globalCompetitivenessId: globalCompetitivenessId,
  purge_id: purgeId,
});

// BenchmarkingData Entity Generator
const createBenchmarkingData = (competitivenessMetricId, purgeId) => ({
  benchmarkingDataId: faker.string.uuid(),
  competitivenessMetricId: competitivenessMetricId,
  benchmark_value: faker.number.float({ min: 0, max: 100 }),
  year: faker.date.past().getFullYear(),
  purge_id: purgeId,
});

// CompetitivenessRiskIndicators Entity Generator
const createCompetitivenessRiskIndicators = (
  competitivenessMetricId,
  purgeId
) => ({
  competitivenessRiskIndicatorId: faker.string.uuid(),
  competitivenessMetricId: competitivenessMetricId,
  mitigationPlanId: faker.string.uuid(),
  risk_level: faker.helpers.arrayElement(["Low", "Medium", "High"]),
  purge_id: purgeId,
});

// MitigationPlans Entity Generator
const createMitigationPlans = (competitivenessRiskIndicatorId, purgeId) => ({
  mitigationPlanId: faker.string.uuid(),
  competitivenessRiskIndicatorId: competitivenessRiskIndicatorId,
  plan_description: faker.lorem.sentence(),
  status: faker.datatype.boolean(),
  purge_id: purgeId,
});

// STEMCompetitiveness Entity Generator
const createSTEMCompetitiveness = (educationalGoalId, purgeId) => ({
  stemCompetitivenessId: faker.string.uuid(),
  stem_score: faker.number.float({ min: 0, max: 100 }),
  educationalGoalId: educationalGoalId,
  purge_id: purgeId,
});

// STEMPerformanceMetrics Entity Generator
const createSTEMPerformanceMetrics = (stemCompetitivenessId, purgeId) => ({
  stemPerformanceMetricId: faker.string.uuid(),
  stemRiskIndicatorId: faker.string.uuid(),
  performance_score: faker.number.float({ min: 0, max: 100 }),
  stemCompetitivenessId: stemCompetitivenessId,
  purge_id: purgeId,
});

// STEMRiskIndicators Entity Generator
const createSTEMRiskIndicators = (stemPerformanceMetricId, purgeId) => ({
  stemRiskIndicatorId: faker.string.uuid(),
  stemPerformanceMetricId: stemPerformanceMetricId,
  risk_level: faker.helpers.arrayElement(["Low", "Medium", "High"]),
  impact_level: faker.helpers.arrayElement(["Minor", "Moderate", "Severe"]),
  purge_id: purgeId,
});

// STEMMitigationPlans Entity Generator
const createSTEMMitigationPlans = (stemRiskIndicatorId, purgeId) => ({
  stemMitigationPlanId: faker.string.uuid(),
  stemRiskIndicatorId: stemRiskIndicatorId,
  plan_description: faker.helpers.arrayElement(randomStepMitigationPlan),
  completion_status: faker.datatype.boolean(),
  purge_id: purgeId,
});

// STEMBenchmarkingData Entity Generator
const createSTEMBenchmarkingData = (stemPerformanceMetricId, purgeId) => ({
  stemBenchmarkingDataId: faker.string.uuid(),
  stemPerformanceMetricId: stemPerformanceMetricId,
  benchmark_value: faker.number.float({ min: 0, max: 100 }),
  year: faker.helpers.arrayElement(years),
  purge_id: purgeId,
});

export {
  createVision2030,
  createEducationalGoals,
  createPerformanceMetrics,
  createOKRTracking,
  createGoalRiskIndicators,
  createRiskMitigationActions,
  createGlobalCompetitiveness,
  createCompetitivenessMetrics,
  createBenchmarkingData,
  createCompetitivenessRiskIndicators,
  createMitigationPlans,
  createSTEMCompetitiveness,
  createSTEMPerformanceMetrics,
  createSTEMRiskIndicators,
  createSTEMMitigationPlans,
  createSTEMBenchmarkingData,
};
