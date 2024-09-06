import { faker, getRandomNumber } from "../faker/faker.js";
import { camera_imageurls, camera_videourls } from "./cam_images_videos.js";

const createCameraData = (purgeId) => ({
  camera_id: faker.string.uuid(),
  camera_videourl: faker.helpers.arrayElement(camera_videourls),
  camera_imageurl: faker.helpers.arrayElement(camera_imageurls),
  camera_type: faker.helpers.arrayElement([
    "body",
    "drone",
    "Surveillance",
    "Street",
  ]),
  camera_pincode: faker.location.zipCode(),
  camera_area: faker.location.street(),
  camera_pinned: faker.datatype.boolean(),
  coordinates: {
    coordinates: faker.location.nearbyGPSCoordinate({
      origin: [23.0225, 72.5714],
      radius: 5,
      isMetric: true,
    }),
  },
  language: faker.helpers.arrayElement(["en"]),
  cityname: faker.helpers.arrayElement(["ahmedabad"]),
  purge_id: purgeId,
});

// CMS Data Generator
const createCMSData = (purgeId) => ({
  cmsdata_id: faker.string.uuid(),
  date: faker.date.past().toISOString().split("T")[0],
  media_url: faker.internet.url(),
  media_type: faker.helpers.arrayElement(["image", "video", "audio"]),
  media_title: faker.lorem.words(3),
  language: faker.helpers.arrayElement([
    "en",
    "hi",
    "te",
    "ml",
    "kn",
    "gu",
    "ta",
  ]),
  cityname: faker.helpers.arrayElement(["ahmedabad"]),
  purge_id: purgeId,
});

//First Responder Data Generator
const createFirstResponderData = (purgeId) => ({
  fr_id: faker.string.uuid(),
  name: faker.person.fullName(),
  officer_id: faker.string.uuid(),
  type: faker.helpers.arrayElement(["Firefighter", "Police", "Paramedic"]),
  category: faker.helpers.arrayElement(["Primary", "Secondary", "Support"]),
  speed: getRandomNumber(10, 120) + " km/h",
  ETA: faker.date.future().toISOString(),
  status: faker.helpers.arrayElement(["En Route", "On Scene", "Completed"]),
  assets: {
    vehicle: faker.vehicle.vehicle(),
    equipment: faker.helpers.arrayElement([
      "Aerial Surveillance Equipment",
      "Baton",
      "Body Armor",
      "Breaching Tools",
      "Dog Handling Equipment",
      "First Aid Kits",
      "Handcuffs",
      "Handguns",
      "Shields",
      "Water Rescue Gear",
      "bodyCam",
      "fpvCam",
    ]),
  },
  current_coordinates: {
    coordinates: faker.location.nearbyGPSCoordinate({
      origin: [23.0225, 72.5714],
      radius: 5,
      isMetric: true,
    }),
  },
  incident_coordinates: {
    coordinates: [],
  },
  language: faker.helpers.arrayElement([
    "en",
    "hi",
    "te",
    "ml",
    "kn",
    "gu",
    "ta",
  ]),
  cityname: faker.helpers.arrayElement(["ahmedabad"]),
  purge_id: purgeId,
});

//EvacuationCenters Generator
const createEvacuationCenters = (purgeId) => ({
  center_id: faker.string.uuid(),
  center_name: faker.company.name(),
  location: faker.location.streetAddress(),
  current_coordinates: {
    coordinates: faker.location.nearbyGPSCoordinate({
      origin: [23.0225, 72.5714],
      radius: 5,
      isMetric: true,
    }),
  },
  language: faker.helpers.arrayElement(["en"]),
  cityname: faker.helpers.arrayElement(["ahmedabad"]),
  purge_id: purgeId,
});

//Incident Log Generator
const createLog = (purgeId) => ({
  log_id: faker.string.uuid(),
  sender_name: faker.person.fullName(),
  sender_id: faker.string.uuid(),
  sender_type: faker.helpers.arrayElement(["police", "civilian"]),
  time: faker.date.recent(),
  date: faker.date.anytime().toISOString().split("T")[0],
  log_message: faker.lorem.sentence(),
  language: faker.helpers.arrayElement(["en"]),
  incident_id: faker.string.uuid(),
  purge_id: purgeId,
});

//Incident FR chat Generator
const createFrsChat = (purgeId) => ({
  frschat_id: faker.string.uuid(),
  name: faker.person.fullName(),
  message: faker.lorem.sentence(),
  time: faker.date.recent(),
  date: faker.date.anytime().toISOString().split("T")[0],
  responder_type: faker.helpers.arrayElement(["Fire fighter", "EMS", "police"]),
  responder_id: faker.string.uuid(),
  images: JSON.stringify([faker.image.url()]), // Example image URLs as JSON
  video: JSON.stringify([faker.image.url()]), // Example video URLs as JSON
  message_type: faker.helpers.arrayElement(["sender", "reciever"]),
  language: faker.helpers.arrayElement(["en"]),
  incident_id: faker.string.uuid(),
  purge_id: purgeId,
});

//Incident Civilian chat Generator
const createCivilianChat = (purgeId) => ({
  civilianchat_id: faker.string.uuid(),
  name: faker.person.fullName(),
  sender_type: faker.helpers.arrayElement(["civilian", "witness"]),
  message: faker.lorem.sentence(),
  time: faker.date.recent(),
  date: faker.date.anytime().toISOString().split("T")[0],
  id: faker.string.uuid(),
  images: JSON.stringify([faker.image.url()]), // Example image URLs as JSON
  videos: JSON.stringify([faker.image.url()]), // Example video URLs as JSON
  message_type: faker.helpers.arrayElement(["sender", "reciever"]),
  language: faker.helpers.arrayElement(["en"]),
  incident_id: faker.string.uuid(),
  purge_id: purgeId,
});

////Incident Generator

const createIncident = (purgeId) => {
  let coordinates = faker.location.nearbyGPSCoordinate({
    origin: [23.0225, 72.5714],
    radius: 5,
    isMetric: true,
  });

  return {
    incident_id: faker.string.uuid(),
    incident_name: faker.lorem.words(3),
    incident_type: {
      name: faker.helpers.arrayElement([
        "FRW-Fire Warning",
        "Earthquake Warning",
        "Child-Abduction",
        "accident",
      ]),
      type: faker.helpers.arrayElement([
        "Natural Disaster",
        "Missing Persons",
        "Public Health Emergencies",
        "Others",
      ]),
    },
    incident_coordinates: {
      coordinates: coordinates,
    },
    incident_affected_area: {
      coordinates: [
        [
          faker.location.nearbyGPSCoordinate({
            origin: coordinates,
            radius: 0.5,
            isMetric: true,
          }),
        ],
        [
          faker.location.nearbyGPSCoordinate({
            origin: coordinates,
            radius: 0.5,
            isMetric: true,
          }),
        ],
        [
          faker.location.nearbyGPSCoordinate({
            origin: coordinates,
            radius: 0.5,
            isMetric: true,
          }),
        ],
        [
          faker.location.nearbyGPSCoordinate({
            origin: coordinates,
            radius: 0.5,
            isMetric: true,
          }),
        ],
        [
          faker.location.nearbyGPSCoordinate({
            origin: coordinates,
            radius: 0.5,
            isMetric: true,
          }),
        ],
      ],
    },
    location: faker.location.streetAddress(),
    issuing_authority: faker.person.fullName(),
    description: faker.lorem.paragraph(),
    status: faker.helpers.arrayElement([
      "active",
      "inactive",
      "under investigation",
    ]),
    officerIncharge: faker.person.fullName(),
    severity: faker.helpers.arrayElement([
      "low",
      "moderate",
      "high",
      "critical",
    ]),
    latest_report: faker.lorem.sentence(),
    date: faker.date.anytime().toISOString().split("T")[0],
    time: faker.date.recent(),
    incidentInformation: {
      calls_to_911: {
        xAxis: ["6.00AM", "6.15AM", "6.30AM", "6.45AM", "7.00AM"],
        yAxis: [
          faker.number.int({ min: 10, max: 50 }),
          faker.number.int({ min: 50, max: 100 }),
          faker.number.int({ min: 30, max: 70 }),
          faker.number.int({ min: 80, max: 150 }),
        ],
      },
      casualties: faker.number.int({ min: 1000, max: 3000 }),
      evacuations: faker.number.int({ min: 10000, max: 20000 }),
      people_affected: faker.number.int({ min: 40000, max: 60000 }),
      rescues: faker.number.int({ min: 5000, max: 15000 }),
      status: faker.helpers.arrayElement(["65%", "70%", "80%", "90%"]),
    },
    language: faker.helpers.arrayElement(["en"]),
    cityname: faker.location.city(),
    purge_id: purgeId,
  };
};

export {
  createCameraData,
  createFirstResponderData,
  createCMSData,
  createEvacuationCenters,
  createLog,
  createIncident,
  createCivilianChat,
  createFrsChat,
};
