import {
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
} from "./helpers.js";
import { getRandomNumber } from "../faker/faker.js";
import fs from "fs/promises";

export async function generateDataForVision2030(
  totalCount,
  incrementEachLevel,
  purgeId
) {
  // Initialize data storage
  const data = {
    vision2030: [],
    educationalGoals: [],
    performanceMetrics: [],
    okrTrackings: [],
    goalRiskIndicators: [],
    riskMitigationActions: [],
    globalCompetitivenesses: [],
    competitivenessMetrics: [],
    benchmarkingData: [],
    competitivenessRiskIndicators: [],
    mitigationPlans: [],
    stemCompetitivenesses: [],
    stemPerformanceMetrics: [],
    stemRiskIndicators: [],
    stemMitigationPlans: [],
    stemBenchmarkingData: [],
  };

  // Step 1: Generate Vision2030 strategies (Top Level)
  for (let i = 0; i < totalCount; i++) {
    const vision2030 = createVision2030(purgeId);
    data.vision2030.push(vision2030);
  }

  console.log(data);

  // Step 2: Generate Educational Goals
  data.vision2030.forEach((vision2030) => {
    for (let i = 0; i < incrementEachLevel; i++) {
      const educationalGoal = createEducationalGoals(
        vision2030.vision2030Id,
        purgeId
      );
      data.educationalGoals.push(educationalGoal);

      // Generate Performance Metrics for each Educational Goal
      for (let j = 0; j < parseInt(incrementEachLevel / 2); j++) {
        const performanceMetric = createPerformanceMetrics(
          educationalGoal.educationalGoalId,
          purgeId
        );
        data.performanceMetrics.push(performanceMetric);

        // Generate OKR Tracking for each Performance Metric
        for (let k = 0; k < parseInt(incrementEachLevel / 3); k++) {
          const okrTracking = createOKRTracking(
            performanceMetric.performanceMetricId,
            purgeId
          );
          data.okrTrackings.push(okrTracking);
        }

        // Generate Goal Risk Indicators for each Performance Metric
        for (let l = 0; l < parseInt(incrementEachLevel / 3); l++) {
          const goalRiskIndicator = createGoalRiskIndicators(
            performanceMetric.performanceMetricId,
            purgeId
          );
          data.goalRiskIndicators.push(goalRiskIndicator);

          // Generate Risk Mitigation Actions for each Goal Risk Indicator
          for (let m = 0; m < incrementEachLevel; m++) {
            const riskMitigationAction = createRiskMitigationActions(
              goalRiskIndicator.goalRiskIndicatorId,
              purgeId
            );
            data.riskMitigationActions.push(riskMitigationAction);
          }
        }
      }
    }
  });

  // Step 3: Generate Global Competitiveness and related metrics
  data.vision2030.forEach((vision2030) => {
    for (let i = 0; i < incrementEachLevel; i++) {
      const globalCompetitiveness = createGlobalCompetitiveness(
        vision2030.vision2030Id,
        purgeId
      );
      data.globalCompetitivenesses.push(globalCompetitiveness);

      // Generate Competitiveness Metrics
      for (let j = 0; j < incrementEachLevel; j++) {
        const competitivenessMetric = createCompetitivenessMetrics(
          globalCompetitiveness.globalCompetitivenessId,
          purgeId
        );
        data.competitivenessMetrics.push(competitivenessMetric);

        // Generate Benchmarking Data for each Competitiveness Metric
        for (let k = 0; k < parseInt(incrementEachLevel / 3); k++) {
          const benchmarkingDataEntry = createBenchmarkingData(
            competitivenessMetric.competitivenessMetricId,
            purgeId
          );
          data.benchmarkingData.push(benchmarkingDataEntry);
        }

        // Generate Competitiveness Risk Indicators
        for (let l = 0; l < parseInt(incrementEachLevel / 3); l++) {
          const competitivenessRiskIndicator =
            createCompetitivenessRiskIndicators(
              competitivenessMetric.competitivenessMetricId,
              purgeId
            );
          data.competitivenessRiskIndicators.push(competitivenessRiskIndicator);

          // Generate Mitigation Plans for each Competitiveness Risk Indicator
          for (let m = 0; m < parseInt(incrementEachLevel / 3); m++) {
            const mitigationPlan = createMitigationPlans(
              competitivenessRiskIndicator.competitivenessRiskIndicatorId,
              purgeId
            );
            data.mitigationPlans.push(mitigationPlan);
          }
        }
      }

      // Generate STEM Competitiveness and related metrics
      for (let i = 0; i < incrementEachLevel; i++) {
        const stemCompetitiveness = createSTEMCompetitiveness(
          globalCompetitiveness.educationalGoalId,
          purgeId
        );
        data.stemCompetitivenesses.push(stemCompetitiveness);

        // Generate STEM Performance Metrics
        for (let j = 0; j < incrementEachLevel; j++) {
          const stemPerformanceMetric = createSTEMPerformanceMetrics(
            stemCompetitiveness.stemCompetitivenessId,
            purgeId
          );
          data.stemPerformanceMetrics.push(stemPerformanceMetric);

          // Generate STEM Risk Indicators
          for (let k = 0; k < parseInt(incrementEachLevel / 3); k++) {
            const stemRiskIndicator = createSTEMRiskIndicators(
              stemPerformanceMetric.stemPerformanceMetricId,
              purgeId
            );
            data.stemRiskIndicators.push(stemRiskIndicator);

            // Generate STEM Mitigation Plans
            for (let l = 0; l < parseInt(incrementEachLevel / 3); l++) {
              const stemMitigationPlan = createSTEMMitigationPlans(
                stemRiskIndicator.stemRiskIndicatorId,
                purgeId
              );
              data.stemMitigationPlans.push(stemMitigationPlan);
            }
          }

          // Generate STEM Benchmarking Data
          for (let m = 0; m < parseInt(incrementEachLevel / 3); m++) {
            const stemBenchmarkingDataEntry = createSTEMBenchmarkingData(
              stemPerformanceMetric.stemPerformanceMetricId,
              purgeId
            );
            data.stemBenchmarkingData.push(stemBenchmarkingDataEntry);
          }
        }
      }
    }
  });

  // await fs.writeFile("data.json", JSON.stringify(data, null, 2));

  return data;
}
