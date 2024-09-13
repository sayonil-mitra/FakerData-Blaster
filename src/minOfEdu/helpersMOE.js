import { faker } from "../faker/faker.js";
import {smd} from "./schManagementData.js"

const managementStyles = ["Autocratic", "Democratic", "Laissez-faire", "Transformational", "Transactional"];
const riskLevels = ["Very Low", "Low", "Moderate", "High", "Very High"];
const year=["2017","2018","2019","2020","2021","2022","2023"]

// MinistryOfEducation data generator
const createMinistryOfEducation = (purgeId) => ({
    ministryOfEducation_id: faker.string.uuid(),
    ministry_name: "Ministry of Education",
    country: "Kuwait",
    established_date: faker.date.past().toISOString().split("T")[0],
    schoolManagement_id: faker.string.uuid(), // Foreign key to SchoolManagement
    educationalFunding_id: faker.string.uuid(), // Foreign key to EducationalFunding
    purge_id: purgeId
});

// SchoolManagement data generator
const createSchoolManagement = (schoolManagement_id, ministryOfEducation_id, purgeId) => {
    // Generate a random index to pick from smd array
    const randomIndex = faker.number.int({ min: 0, max: smd.length - 1 });
    const selectedPrincipal = smd[randomIndex]; // Select the principal data based on the random index

    return {
        schoolManagement_id: schoolManagement_id,
        ministryOfEducation_id: ministryOfEducation_id, // Foreign key to MinistryOfEducation
        principal_name: selectedPrincipal.principal_name, // Randomly selected principal name
        management_style: selectedPrincipal.management_style, // Randomly selected management style
        managementPerformanceMetric_id: faker.string.uuid(), // Foreign key to ManagementPerformanceMetrics
        purge_id: purgeId
    };
};
// ManagementPerformanceMetrics data generator
const createManagementPerformanceMetric = (managementPerformanceMetric_id, schoolManagement_id, purgeId) => ({
    managementPerformanceMetric_id: managementPerformanceMetric_id,
    schoolManagement_id: schoolManagement_id, // Foreign key to SchoolManagementu
    performance_score: faker.number.int({ min: 50, max: 100 }),
    managementRiskIndicator_id: faker.string.uuid(), // Foreign key to ManagementRiskIndicators
    purge_id: purgeId
});

// ManagementRiskIndicators data generator
const createManagementRiskIndicator = (managementRiskIndicator_id, managementPerformanceMetric_id, purgeId) => ({
    managementRiskIndicator_id: managementRiskIndicator_id,
    managementPerformanceMetric_id: managementPerformanceMetric_id, // Foreign key to ManagementPerformanceMetrics
    risk_level: faker.random.arrayElement(riskLevels),
    purge_id: purgeId
});

// EducationalFunding data generator
const createEducationalFunding = (educationalFunding_id, ministryOfEducation_id, purgeId) => ({
    educationalFunding_id: educationalFunding_id,
    ministryOfEducation_id: ministryOfEducation_id, // Foreign key to MinistryOfEducation
    fund_amount: faker.number.int({ min: 10, max: 1000 }),
    year: faker.random.arrayElement(year),
    fundingUtilizationMetric_id: faker.string.uuid(), // Foreign key to FundingUtilizationMetrics
    purge_id: purgeId
});

// FundingUtilizationMetrics data generator
const createFundingUtilizationMetric = (fundingUtilizationMetric_id, educationalFunding_id, purgeId) => ({
    fundingUtilizationMetric_id: fundingUtilizationMetric_id,
    educationalFunding_id: educationalFunding_id, // Foreign key to EducationalFunding
    utilization_rate: `${faker.number.float({ min: 50, max: 100 }).toFixed(2)}%`,
    fundingRiskIndicator_id: faker.string.uuid(), // Foreign key to FundingRiskIndicators
    purge_id: purgeId
});

// FundingRiskIndicators data generator
const createFundingRiskIndicator = (fundingUtilizationMetric_id, fundingRiskIndicator_id, purgeId) => ({
    fundingRiskIndicator_id: fundingRiskIndicator_id,
    fundingUtilizationMetric_id: fundingUtilizationMetric_id, // Foreign key to FundingUtilizationMetrics
    risk_level: faker.random.arrayElement(riskLevels),
    purge_id: purgeId
});

export {
    createMinistryOfEducation,
    createSchoolManagement,
    createManagementPerformanceMetric,
    createManagementRiskIndicator,
    createEducationalFunding,
    createFundingUtilizationMetric,
    createFundingRiskIndicator
};


// ministries: [],
//     schoolManagements: [],
//         managementPerformanceMetrics: [],
//             managementRiskIndicators: [],
//                 educationalFundings: [],
//                     fundingUtilizationMetrics: [],
//                         fundingRiskIndicators: []
