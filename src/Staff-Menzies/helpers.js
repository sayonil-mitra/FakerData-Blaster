import { faker } from "@faker-js/faker";
import {
  firstNames,
  lastNames,
  employmentStatuses,
  departments,
  roleDescriptions,
  requiredCertifications,
  certificationNames,
  issuingAuthorities,
  trainingNames,
  trainingProviders,
  aircraftTypesHandled,
  baggageSystemProficiency,
  cargoTypesManaged,
  equipmentTypes,
  trainingModules,
  scenarioTypesCovered,
  teamRoleAssignments,
} from "./helperData.js";

// Primary Entity: Staff
const createStaff = (purgeId) => {
  return {
    staff_id: faker.string.uuid(),
    first_name: faker.helpers.arrayElement(firstNames),
    last_name: faker.helpers.arrayElement(lastNames),
    hire_date: faker.date.past().toISOString().split("T")[0],
    employment_status: faker.helpers.arrayElement(employmentStatuses),
    department: faker.helpers.arrayElement(departments),
    purge_id: purgeId,
  };
};

// Secondary Entities

const createStaffRole = (purgeId, staffId) => {
    const roleName = faker.helpers.arrayElement([
      "Ground Marshaller",
      "Baggage Handler",
      "Cargo Supervisor",
      "Safety Officer",
    ]);
  return {
    staff_role_id: faker.string.uuid(),
    role_name: roleName,
    role_description: roleDescriptions[roleName],
    required_certifications: requiredCertifications[roleName].join(", "),
    salary_grade: faker.number.int({ min: 1, max: 7 }),
    staff_id: staffId,
    purge_id: purgeId,
  };
};

const createShiftAssignment = (purgeId, staffId) => {
  return {
    shift_assignment_id: faker.string.uuid(),
    assignment_date: faker.date.recent().toISOString().split("T")[0],
    is_overtime: faker.datatype.boolean(),
    total_hours: faker.number.int({ min: 4, max: 12 }),
    assignment_status: faker.helpers.arrayElement([
      "Scheduled",
      "Completed",
      "Cancelled",
    ]),
    staff_id: staffId,
    purge_id: purgeId,
  };
};

const createCertification = (purgeId, staffId) => {
  return {
    certification_id: faker.string.uuid(),
    certification_name: faker.helpers.arrayElement(certificationNames),
    issuing_authority: faker.helpers.arrayElement(issuingAuthorities),
    issue_date: faker.date.past().toISOString().split("T")[0],
    expiry_date: faker.date.future().toISOString().split("T")[0],
    staff_id: staffId,
    purge_id: purgeId,
  };
};

const createTraining = (purgeId, staffId) => {
  return {
    training_id: faker.string.uuid(),
    training_name: faker.helpers.arrayElement(trainingNames),
    training_provider: faker.helpers.arrayElement(trainingProviders),
    completion_date: faker.date.past().toISOString().split("T")[0],
    score: faker.number.int({ min: 40, max: 95 }),
    staff_id: staffId,
    purge_id: purgeId,
  };
};

// Tertiary Entities for StaffRole

const createGroundMarshaller = (purgeId, staffRoleId) => {
  return {
    ground_marshaller_id: faker.string.uuid(),
    aircraft_types_handled: faker.helpers.arrayElement(aircraftTypesHandled),
    years_of_experience: faker.number.int({ min: 1, max: 10 }),
    last_performance_rating: Number(faker.number.float({ min: 1, max: 5 }).toFixed(2)),
    staff_role_id: staffRoleId,
    purge_id: purgeId,
  };
};

const createBaggageHandler = (purgeId, staffRoleId) => {
  return {
    baggage_handler_id: faker.string.uuid(),
    baggage_system_proficiency: faker.helpers.arrayElement(
      baggageSystemProficiency
    ),
    average_bags_per_hour: faker.number.int({ min: 10, max: 50 }),
    injury_incident_count: faker.number.int({ min: 0, max: 20 }),
    staff_role_id: staffRoleId,
    purge_id: purgeId,
  };
};

const createCargoSupervisor = (purgeId, staffRoleId) => {
  return {
    cargo_supervisor_id: faker.string.uuid(),
    cargo_types_managed: faker.helpers.arrayElement(cargoTypesManaged),
    team_size: faker.number.int({ min: 3, max: 10 }),
    efficiency_rating: Number(faker.number.float({ min: 1, max: 5 }).toFixed(1)),
    staff_role_id: staffRoleId,
    purge_id: purgeId,
  };
};

const createSafetyOfficer = (purgeId, staffRoleId) => {
  return {
    safety_officer_id: faker.string.uuid(),
    safety_audits_conducted: faker.number.int({ min: 10, max: 50 }),
    incident_reports_filed: faker.number.int({ min: 0, max: 20 }),
    safety_training_sessions_led: faker.number.int({ min: 1, max: 10 }),
    staff_role_id: staffRoleId,
    purge_id: purgeId,
  };
};

// Tertiary Entities for ShiftAssignment

const createShiftDuration = (purgeId, shiftAssignmentId) => {
  return {
    shift_duration_id: faker.string.uuid(),
    duration_hours: faker.number.int({ min: 4, max: 12 }),
    break_duration_minutes: faker.number.int({ min: 10, max: 60 }),
    overtime_threshold_hours: faker.number.int({ min: 8, max: 10 }),
    shift_assignment_id: shiftAssignmentId,
    purge_id: purgeId,
  };
};

const createShiftStartTime = (purgeId, shiftAssignmentId) => {
  return {
    shift_start_time_id: faker.string.uuid(),
    start_time: faker.date.recent().toISOString().split("T")[1].split(".")[0],
    check_in_buffer_minutes: faker.number.int({ min: 5, max: 15 }),
    late_threshold_minutes: faker.number.int({ min: 5, max: 30 }),
    shift_assignment_id: shiftAssignmentId,
    purge_id: purgeId,
  };
};

const createShiftBreakTime = (purgeId, shiftAssignmentId) => {
    const breakStartDate = faker.date.recent(); // This generates a recent date-time object
    const breakStartTime = breakStartDate
      .toISOString()
      .split("T")[1]
      .split(".")[0]; // Extract time portion

    // Add random minutes to break start time to get break end time
    const breakDuration = faker.number.int({ min: 5, max: 60 }); // Random break duration in minutes
    const breakEndDate = new Date(
      breakStartDate.getTime() + breakDuration * 60000
    ); // Adding duration to start time
    const breakEndTime = breakEndDate.toISOString().split("T")[1].split(".")[0];
  return {
    shift_break_time_id: faker.string.uuid(),
    break_start_time: breakStartTime,
    break_end_time: breakEndTime,
    is_paid_break: faker.datatype.boolean(),
    shift_assignment_id: shiftAssignmentId,
    purge_id: purgeId,
  };
};

const createShiftRotation = (purgeId, shiftAssignmentId) => {
  return {
    shift_rotation_id: faker.string.uuid(),
    rotation_pattern: faker.helpers.arrayElement([
      "4-3",
      "5-2",
      "6-1",
      "4-2-4",
      "12-hour rotating",
      "2-3-2",
      "3-4",
      "7-7",
    ]),
    days_between_shifts: faker.number.int({ min: 1, max: 5 }),
    max_consecutive_shifts: faker.number.int({ min: 3, max: 6 }),
    shift_assignment_id: shiftAssignmentId,
    purge_id: purgeId,
  };
};

// Tertiary Entities for Certification

const createSecurityClearance = (purgeId, certificationId) => {
  return {
    security_clearance_id: faker.string.uuid(),
    clearance_level: faker.helpers.arrayElement([
      "Level 1",
      "Level 2",
      "Level 3",
    ]),
    background_check_date: faker.date.past().toISOString().split("T")[0],
    clearance_expiry_date: faker.date.future().toISOString().split("T")[0],
    certification_id: certificationId,
    purge_id: purgeId,
  };
};

const createEquipmentOperationLicense = (purgeId, certificationId) => {
  return {
    equipment_operation_license_id: faker.string.uuid(),
    equipment_type: faker.helpers.arrayElement(equipmentTypes),
    license_number: faker.string.uuid(),
    renewal_date: faker.date.future().toISOString().split("T")[0],
    certification_id: certificationId,
    purge_id: purgeId,
  };
};

const createFirstAidCertification = (purgeId, certificationId) => {
  return {
    first_aid_certification_id: faker.string.uuid(),
    certification_level: faker.helpers.arrayElement([
      "Basic",
      "Intermediate",
      "Advanced",
    ]),
    training_hours_completed: faker.number.int({ min: 5, max: 20 }),
    last_cpr_refresher_date: faker.date.recent().toISOString().split("T")[0],
    certification_id: certificationId,
    purge_id: purgeId,
  };
};

const createAirsideDrivingPermit = (purgeId, certificationId) => {
  return {
    airside_driving_permit_id: faker.string.uuid(),
    permit_type: faker.helpers.arrayElement([
      "Category A",
      "Category B",
      "Category C",
    ]),
    vehicle_types_authorized: faker.helpers.arrayElement([
      "Buses",
      "Trucks",
      "Tug Vehicles",
    ]),
    last_driving_test_date: faker.date.recent().toISOString().split("T")[0],
    certification_id: certificationId,
    purge_id: purgeId,
  };
};

// Tertiary Entities for Training
const createSafetyTraining = (purgeId, trainingId) => {
  return {
    safety_training_id: faker.string.uuid(),
    training_module: faker.helpers.arrayElement(trainingModules),
    completion_status: faker.helpers.arrayElement([
      "Completed",
      "Pending",
      "In Progress",
      "Failed",
      "Not Started",
    ]),
    test_score: faker.number.int({ min: 60, max: 95 }),
    next_refresher_date: faker.date.future().toISOString().split("T")[0],
    training_id: trainingId,
    purge_id: purgeId,
  };
};

const createEquipmentTraining = (purgeId, trainingId) => {
    const firstName = faker.helpers.arrayElement(firstNames);
    const lastName = faker.helpers.arrayElement(lastNames);
  return {
    equipment_training_id: faker.string.uuid(),
    equipment_type: faker.helpers.arrayElement(equipmentTypes),
    training_hours: faker.number.int({ min: 5, max: 20 }),
    practical_assessment_score: faker.number.int({ min: 45, max: 95 }),
    trainer_name: `${firstName} ${lastName}`,
    training_id: trainingId,
    purge_id: purgeId,
  };
};

const createSecurityAwarenessTraining = (purgeId, trainingId) => {
  return {
    security_awareness_training_id: faker.string.uuid(),
    training_level: faker.helpers.arrayElement([
      "Basic",
      "Intermediate",
      "Advanced",
    ]),
    last_update_date: faker.date.recent().toISOString().split("T")[0],
    compliance_status: faker.helpers.arrayElement([
      "Compliant",
      "Non-Compliant",
      "Pending Review",
      "Expired",
      "In Progress"
    ]),
    training_id: trainingId,
    purge_id: purgeId,
  };
};

const createEmergencyResponseTraining = (purgeId, trainingId) => {
  return {
    emergency_response_training_id: faker.string.uuid(),
    scenario_types_covered: faker.helpers.arrayElement(scenarioTypesCovered),
    simulation_performance_score: faker.number.int({ min: 40, max: 95 }),
    team_role_assignment: faker.helpers.arrayElement(teamRoleAssignments),
    training_id: trainingId,
    purge_id: purgeId,
  };
};


export {
  createEmergencyResponseTraining,
  createSecurityAwarenessTraining,
  createEquipmentTraining,
  createSafetyTraining,
  createAirsideDrivingPermit,
  createFirstAidCertification,
  createEquipmentOperationLicense,
  createSecurityClearance,
  createShiftRotation,
  createShiftBreakTime,
  createShiftStartTime,
  createShiftDuration,
  createSafetyOfficer,
  createCargoSupervisor,
  createBaggageHandler,
  createGroundMarshaller,
  createTraining,
  createCertification,
  createShiftAssignment,
  createStaffRole,
  createStaff,
};