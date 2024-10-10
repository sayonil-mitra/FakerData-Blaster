import {
  createStaff,
  createStaffRole,
  createShiftAssignment,
  createCertification,
  createTraining,
  createGroundMarshaller,
  createBaggageHandler,
  createCargoSupervisor,
  createSafetyOfficer,
  createShiftDuration,
  createShiftStartTime,
  createShiftBreakTime,
  createShiftRotation,
  createSecurityClearance,
  createEquipmentOperationLicense,
  createFirstAidCertification,
  createAirsideDrivingPermit,
  createSafetyTraining,
  createEquipmentTraining,
  createSecurityAwarenessTraining,
  createEmergencyResponseTraining,
} from "./helpers.js";

// Function to generate the full data structure based on the UML for the 'Staff' entity and its related entities
export const generateFullStaffData = (
  purgeId,
  totalStaffCount = 100,
  rolesPerStaff = 3,
  assignmentsPerStaff = 2,
  certificationsPerStaff = 2,
  trainingsPerStaff = 2
) => {
  const data = {
    staff: [],
    staffRoles: [],
    shiftAssignments: [],
    certifications: [],
    trainings: [],
    groundMarshals: [],
    baggageHandlers: [],
    cargoSupervisors: [],
    safetyOfficers: [],
    shiftDurations: [],
    shiftStartTimes: [],
    shiftBreakTimes: [],
    shiftRotations: [],
    securityClearances: [],
    equipmentOperationLicenses: [],
    firstAidCertifications: [],
    airsideDrivingPermits: [],
    safetyTrainings: [],
    equipmentTrainings: [],
    securityAwarenessTrainings: [],
    emergencyResponseTrainings: [],
  };

  // Step 1: Generate Staff data
  for (let i = 0; i < totalStaffCount; i++) {
    const staff = createStaff(purgeId);
    data.staff.push(staff);

    // Step 2: Generate Roles for each staff
    for (let j = 0; j < rolesPerStaff; j++) {
      const staffRole = createStaffRole(purgeId, staff.staff_id);
      data.staffRoles.push(staffRole);

      // Step 3: Generate tertiary entities for StaffRole (GroundMarshal, BaggageHandler, CargoSupervisor, SafetyOfficer)
      if (staffRole.role_name === "Ground Marshaller") {
        const groundMarshal = createGroundMarshaller(
          purgeId,
          staffRole.staff_role_id
        );
        data.groundMarshals.push(groundMarshal);
      } else if (staffRole.role_name === "Baggage Handler") {
        const baggageHandler = createBaggageHandler(
          purgeId,
          staffRole.staff_role_id
        );
        data.baggageHandlers.push(baggageHandler);
      } else if (staffRole.role_name === "Cargo Supervisor") {
        const cargoSupervisor = createCargoSupervisor(
          purgeId,
          staffRole.staff_role_id
        );
        data.cargoSupervisors.push(cargoSupervisor);
      } else if (staffRole.role_name === "Safety Officer") {
        const safetyOfficer = createSafetyOfficer(
          purgeId,
          staffRole.staff_role_id
        );
        data.safetyOfficers.push(safetyOfficer);
      }
    }

    // Step 4: Generate Shift Assignments for each staff
    for (let j = 0; j < assignmentsPerStaff; j++) {
      const shiftAssignment = createShiftAssignment(purgeId, staff.staff_id);
      data.shiftAssignments.push(shiftAssignment);

      // Generate tertiary entities for ShiftAssignment (ShiftDuration, ShiftStartTime, ShiftBreakTime, ShiftRotation)
      const shiftDuration = createShiftDuration(
        purgeId,
        shiftAssignment.shift_assignment_id
      );
      data.shiftDurations.push(shiftDuration);

      const shiftStartTime = createShiftStartTime(
        purgeId,
        shiftAssignment.shift_assignment_id
      );
      data.shiftStartTimes.push(shiftStartTime);

      const shiftBreakTime = createShiftBreakTime(
        purgeId,
        shiftAssignment.shift_assignment_id
      );
      data.shiftBreakTimes.push(shiftBreakTime);

      const shiftRotation = createShiftRotation(
        purgeId,
        shiftAssignment.shift_assignment_id
      );
      data.shiftRotations.push(shiftRotation);
    }

    // Step 5: Generate Certifications for each staff
    for (let j = 0; j < certificationsPerStaff; j++) {
      const certification = createCertification(purgeId, staff.staff_id);
      data.certifications.push(certification);

      // Generate tertiary entities for Certification (SecurityClearance, EquipmentOperationLicense, FirstAidCertification, AirsideDrivingPermit)
      const securityClearance = createSecurityClearance(
        purgeId,
        certification.certification_id
      );
      data.securityClearances.push(securityClearance);

      const equipmentOperationLicense = createEquipmentOperationLicense(
        purgeId,
        certification.certification_id
      );
      data.equipmentOperationLicenses.push(equipmentOperationLicense);

      const firstAidCertification = createFirstAidCertification(
        purgeId,
        certification.certification_id
      );
      data.firstAidCertifications.push(firstAidCertification);

      const airsideDrivingPermit = createAirsideDrivingPermit(
        purgeId,
        certification.certification_id
      );
      data.airsideDrivingPermits.push(airsideDrivingPermit);
    }

    // Step 6: Generate Training for each staff
    for (let j = 0; j < trainingsPerStaff; j++) {
      const training = createTraining(purgeId, staff.staff_id);
      data.trainings.push(training);

      // Generate tertiary entities for Training (SafetyTraining, EquipmentTraining, SecurityAwarenessTraining, EmergencyResponseTraining)
      const safetyTraining = createSafetyTraining(
        purgeId,
        training.training_id
      );
      data.safetyTrainings.push(safetyTraining);

      const equipmentTraining = createEquipmentTraining(
        purgeId,
        training.training_id
      );
      data.equipmentTrainings.push(equipmentTraining);

      const securityAwarenessTraining = createSecurityAwarenessTraining(
        purgeId,
        training.training_id
      );
      data.securityAwarenessTrainings.push(securityAwarenessTraining);

      const emergencyResponseTraining = createEmergencyResponseTraining(
        purgeId,
        training.training_id
      );
      data.emergencyResponseTrainings.push(emergencyResponseTraining);
    }
  }

  return data;
};
