import { faker } from "../faker/faker.js";
import { eventNames } from "./event-names.js";

const createAegisCameras = (purgeId) => ({
  user_id: faker.string.uuid(),
  name: faker.person.fullName(),
  email: faker.internet.email(),
  phone: faker.phone.number(),
  address: {
    street: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    country: faker.location.country(),
    postalCode: faker.location.zipCode(),
  },
  purge_id: purgeId,
});

// Event Entity Generator
const createCMSData = (userId, locationId, organizerId, purgeId) => ({
  event_id: faker.string.uuid(),
  title: faker.lorem.words(3),
  description: faker.lorem.sentence(),
  event_date: faker.date.future().toISOString().split("T")[0],
  event_start_time: faker.date.recent(),
  event_end_time: faker.date.recent(),
  location: {
    street: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    country: faker.location.country(),
    postalCode: faker.location.zipCode(),
  },
  total_capacity: faker.random.getRandomNumber(50, 500),
  total_attended: faker.random.getRandomNumber(0, 50),
  user_id: userId,
  location_id: locationId,
  organizer_id: organizerId,
  event_name: faker.random.arrayElement(eventNames),
  purge_id: purgeId,
});

// Alert Entity Generator
const createFirstresponders = (userId, authorityId, purgeId) => ({
  alert_id: faker.string.uuid(),
  message: faker.lorem.sentence(),
  alert_time: faker.date.recent(),
  alert_status: faker.random.arrayElement(["Active", "Inactive", "Resolved"]),
  user_id: userId,
  authority_id: authorityId,
  purge_id: purgeId,
});

// Event Organizer Entity Generator
const createEvacuationCenters = (eventId, purgeId) => ({
  organizer_id: faker.string.uuid(),
  name: faker.person.fullName(),
  event_id: eventId,
  contact_info: faker.phone.number(),
  location: {
    street: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    country: faker.location.country(),
    postalCode: faker.location.zipCode(),
  },
  purge_id: purgeId,
});

// Business Incidents Generator
const createIncidents = (purgeId) => ({
  business_id: faker.string.uuid(),
  name: faker.company.name(),
  address: {
    street: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    country: faker.location.country(),
    postalCode: faker.location.zipCode(),
  },
  purge_id: purgeId,
});

// Promotion firstresponders_chat Generator
const createFirstrespondersChat = (businessId, purgeId) => ({
  promotion_id: faker.string.uuid(),
  description: faker.lorem.sentence(),
  start_date: faker.date.future().toISOString().split("T")[0],
  end_date: faker.date.future().toISOString().split("T")[0],
  promotion_status: faker.random.arrayElement([
    "Active",
    "Expired",
    "Upcoming",
  ]),
  business_id: businessId,
  purge_id: purgeId,
});

// Location civilians chat Generator
const createCiviliansChat = (purgeId) => ({
  location_id: faker.string.uuid(),
  address: {
    street: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    country: faker.location.country(),
    postalCode: faker.location.zipCode(),
  },
  country: faker.location.country(),
  city: faker.location.city(),
  state: faker.location.state(),
  postal_code: faker.location.zipCode(),
  purge_id: purgeId,
});

// Weather Incident Log  Generator
const createIncidentLog = (locationId, purgeId) => ({
  station_id: faker.string.uuid(),
  location: faker.location.streetAddress(),
  latitude: faker.location.latitude(),
  longitude: faker.location.longitude(),
  location_id: locationId,
  purge_id: purgeId,
});



export {
  createUser,
  createEvent,
  createAlert,
  createBusiness,
  createEventOrganizer,
  createGasStation,
  createLocalAuthority,
  createLocation,
  createPromotion,
  createWeatherReport,
  createWeatherStation,
};
