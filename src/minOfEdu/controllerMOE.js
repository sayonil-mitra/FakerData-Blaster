import {
	createMinistryOfEducation,
	createSchoolManagement,
	createManagementPerformanceMetric,
	createManagementRiskIndicator,
	createEducationalFunding,
	createFundingUtilizationMetric,
	createFundingRiskIndicator,
} from "./helpersMOE.js"; // Import helper functions

import { faker } from "../faker/faker.js"; // Import faker for random data generation

export function generateDataForMinistryOfEducation(purgeId, totalCount = 1000, incrementEachLevel = 5) {
	// Initialize data storage
	const data = {
		ministries: [],
		schoolManagements: [],
		managementPerformanceMetrics: [],
		managementRiskIndicators: [],
		educationalFundings: [],
		fundingUtilizationMetrics: [],
		fundingRiskIndicators: [],
	};

	// Step 1: Generate Ministry of Education (Top Level)
	for (let i = 0; i < totalCount; i++) {
		const ministry = createMinistryOfEducation(purgeId);
		data.ministries.push(ministry);
	}

	// Step 2: Generate School Managements for each Ministry of Education
	data.ministries.forEach((ministry) => {
		for (let i = 0; i < incrementEachLevel; i++) {
			const schoolManagement = createSchoolManagement(ministry.schoolManagement_id, ministry.ministryOfEducation_id, purgeId); // Link school management to Ministry of Education
			data.schoolManagements.push(schoolManagement);

		}
	});
	// Step 3: Generate Educational Funding for each Ministry of Education
	data.ministries.forEach((ministry) => {
		for (let i = 0; i < incrementEachLevel; i++) {
			const educationalFunding = createEducationalFunding(ministry.educationalFunding_id, ministry.ministryOfEducation_id, purgeId); // Link educational funding to Ministry of Education
			data.educationalFundings.push(educationalFunding);
		}
	})

	//Step 3:managementPerformanceMetrics

	data.schoolManagements.forEach((schoolManagement) => {
		for (let i = 0; i < incrementEachLevel; i++) {
			const performanceMetric = createManagementPerformanceMetric(schoolManagement.managementPerformanceMetric_id, schoolManagement.schoolManagement_id, purgeId); // Link school management to Ministry of Education
			data.managementPerformanceMetrics.push(performanceMetric);

		}
	});

	// Step 4:FundingUtilizationMetrics
	data.educationalFundings.forEach((educationalFunding) => {
		for (let i = 0; i < incrementEachLevel; i++) {
			const fundingUtilizationMetric = createFundingUtilizationMetric(educationalFunding.fundingUtilizationMetric_id, educationalFunding.educationalFunding_id, purgeId); // Link school management to Ministry of Education
			data.fundingUtilizationMetrics.push(fundingUtilizationMetric);

		}
	});


	// Step 5:ManagementRiskIndicator
	data.managementPerformanceMetrics.forEach((managementPerformanceMetric) => {
		for (let i = 0; i < incrementEachLevel; i++) {
			const fundingUtilizationMetric = createManagementRiskIndicator(managementPerformanceMetric.managementRiskIndicator_id, managementPerformanceMetric.managementPerformanceMetric_id, purgeId); // Link school management to Ministry of Education
			data.managementRiskIndicators.push(fundingUtilizationMetric);

		}
	});


	// Step 6:FundingRiskIndicator
	data.fundingUtilizationMetrics.forEach((fundingUtilizationMetric) => {
		for (let i = 0; i < incrementEachLevel; i++) {
			const temp = createFundingRiskIndicator(fundingUtilizationMetric.fundingUtilizationMetric_id, fundingUtilizationMetric.fundingRiskIndicator_id, purgeId); // Link school management to Ministry of Education
			data.fundingRiskIndicators.push(temp);

		}
	});


	return data;
}