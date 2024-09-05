import { faker } from "../faker/faker.js";


const createCameraData = (purgeId) => ({
  camera_id: faker.string.uuid(),
  camera_videourl: faker.internet.url(),
  camera_imageurl: faker.image.imageUrl(),
  camera_type: faker.helpers.arrayElement(["CCTV", "IP Camera", "Webcam"]),
  camera_pincode: faker.location.zipCode(),
  camera_area: faker.location.streetName(),
  camera_pinned: faker.datatype.boolean(),
  coordinates: {
    latitude: faker.location.latitude(),
    longitude: faker.location.longitude(),
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
  cityname: faker.location.city(),
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
  cityname: faker.location.city(),
  purge_id: purgeId,
});

//First Responder Data Generator
const createFirstResponderData = (purgeId) => ({
  fr_id: faker.string.uuid(),
  name: faker.person.fullName(),
  officer_id: faker.string.uuid(),
  type: faker.helpers.arrayElement(["Firefighter", "Police", "Paramedic"]),
  category: faker.helpers.arrayElement(["Primary", "Secondary", "Support"]),
  speed: faker.random.numeric(2) + " km/h",
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
    latitude: faker.location.latitude(),
    longitude: faker.location.longitude(),
  },
  incident_coordinates: {
    latitude: faker.location.latitude(),
    longitude: faker.location.longitude(),
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
  cityname: faker.location.city(),
  purge_id: purgeId,
});

//EvacuationCenters Generator
const createEvacuationCenters = (purgeId) => ({
  center_id: faker.string.uuid(),
  center_name: faker.company.companyName(),
  location: faker.location.streetAddress(),
  current_coordinates: {
    latitude: faker.location.latitude(),
    longitude: faker.location.longitude(),
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
  cityname: faker.location.city(),
  purge_id: purgeId,
});




export {
  createCameraData,
  createFirstResponderData,
  createCMSData,
 createEvacuationCenters
};
