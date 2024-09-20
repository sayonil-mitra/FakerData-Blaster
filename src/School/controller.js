import {
  createSchoolData,
  createSchoolInfrastructure,
  createInfrastructurePerformanceMetrics,
  createInfrastructureRiskIndicators,
  createCurriculumPrograms,
  createCurriculumEffectivenessMetrics,
  createCurriculumRiskIndicators,
} from "./helpers.js"; 

export function generateSchoolData(purgeId, totalCount = 1000) {
  // Initialize data storage for different entities
  const data = {
    schools: [],
    schoolInfrastructures: [],
    infrastructurePerformanceMetrics: [],
    infrastructureRiskIndicators: [],
    curriculumPrograms: [],
    curriculumEffectivenessMetrics: [],
    curriculumRiskIndicators: [],
  };

  // Step 1: Generate Schools and their related data
  for (let i = 0; i < totalCount; i++) {
    const school = createSchoolData(purgeId); // Create a school
    data.schools.push(school);

    // Step 2: Generate School Infrastructure for the created school
    const schoolInfrastructure = createSchoolInfrastructure(
      purgeId,
      school.school_id
    );
    data.schoolInfrastructures.push(schoolInfrastructure);

    // Step 3: Generate Infrastructure Performance Metrics
    const infraPerfMetrics = createInfrastructurePerformanceMetrics(
      purgeId,
      schoolInfrastructure.schoolInfrastructure_id
    );
    data.infrastructurePerformanceMetrics.push(infraPerfMetrics);

    // Step 4: Generate Infrastructure Risk Indicators
    const infraRiskIndicators = createInfrastructureRiskIndicators(
      purgeId,
      infraPerfMetrics.infrastructurePerformanceMetric_id
    );
    data.infrastructureRiskIndicators.push(infraRiskIndicators);

    // Step 5: Generate Curriculum Programs for the created school
    const curriculumPrograms = createCurriculumPrograms(
      purgeId,
      school.school_id
    );
    data.curriculumPrograms.push(curriculumPrograms);

    // Step 6: Generate Curriculum Effectiveness Metrics
    const currEffectivenessMetrics = createCurriculumEffectivenessMetrics(
      purgeId,
      curriculumPrograms.curriculumProgram_id
    );
    data.curriculumEffectivenessMetrics.push(currEffectivenessMetrics);

    // Step 7: Generate Curriculum Risk Indicators
    const currRiskIndicators = createCurriculumRiskIndicators(
      purgeId,
      currEffectivenessMetrics.curriculumEffectivenessMetric_id
    );
    data.curriculumRiskIndicators.push(currRiskIndicators);
  }

  return data;
}
