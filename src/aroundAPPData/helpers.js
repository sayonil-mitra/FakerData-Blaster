// import { faker } from "../faker/faker.js";
// import { eventNames } from "./event-names.js";
// import {citiesInGujarat,zipcodesInGujarat} from "./helperData.js"

// // Function to get a random street in Ahmedabad
// const getStreetInAhmedabad = () => {
//   const city = "Ahmedabad";
//   const street = faker.helpers.arrayElement(streetsInGujarat[city]);
//   const zipCode = faker.helpers.arrayElement(zipcodesInGujarat[city]);
//   return { city, street, zipCode };
// };

// // Function to generate realistic coordinates near Ahmedabad
// const getCoordinatesNearAhmedabad = () => {
//   const coordinates = faker.location.nearbyGPSCoordinate({
//     origin: [23.022505, 72.5713621],
//     radius: 10,
//     isMetric: true,
//   });
//   return { latitude: parseFloat(coordinates[0]), longitude: parseFloat(coordinates[1]) };
// };

// // Function to generate realistic coordinates near a specific city in Gujarat
// const getCoordinatesNearCity = (city) => {
//   const cityCoordinates = {
//     Ahmedabad: [23.022505, 72.5713621],
//     Surat: [21.1702401, 72.8310607],
//     Vadodara: [22.3071588, 73.1812187],
//     Rajkot: [22.3038945, 70.8021599],
//     Bhavnagar: [21.7644725, 72.1519304],
//     Jamnagar: [22.4707011, 70.05773],
//     Junagadh: [21.5221845, 70.4578769],
//     Gandhinagar: [23.215635, 72.6369415],
//     Anand: [22.5645175, 72.928871],
//     Nadiad: [22.691634, 72.8633632],
//     Navsari: [20.946701, 72.952034],
//     Vapi: [20.371391, 72.904296],
//     Porbandar: [21.6417069, 69.6292654],
//     Morbi: [22.817304, 70.832583],
//     Mehsana: [23.5892794, 72.3692885],
//     Bhuj: [23.242002, 69.666932],
//   };

//   const origin = cityCoordinates[city] || cityCoordinates['Ahmedabad']; // Default to Ahmedabad if city not found

//   const coordinates = faker.location.nearbyGPSCoordinate({
//     origin: origin,
//     radius: 10,
//     isMetric: true,
//   });

//   return { latitude: parseFloat(coordinates[0]), longitude: parseFloat(coordinates[1]) };
// };

// // Event Entity Generator
// const createEvent = (purgeId) => ({
//   event_id: faker.string.uuid(),
//   name: faker.random.arrayElement(eventNames),
//   street: faker.location.streetAddress(),
//   city: "Ahmedabad",
//   phone: faker.phone.number(),
//   comment: faker.lorem.sentence(),
//   rating: faker.datatype.float({ min: 1, max: 5, precision: 0.1 }),
//   icon_url: faker.internet.url(),
//   state_code: "GJ",
//   zip_code: "380054",
//   seats_available: faker.datatype.number({ min: 10, max: 100 }),
//   event_price: faker.datatype.float({ min: 100, max: 1000, precision: 0.01 }),
//   event_start_date: faker.date.future().toISOString().split("T")[0],
//   event_start_time: faker.date.recent().toISOString().split("T")[1],
//   event_end_date: faker.date.future().toISOString().split("T")[0],
//   latitude: faker.location.latitude(),
//   longitude: faker.location.longitude(),
//   language: faker.helpers.arrayElement(["en"]),
//   purge_id: purgeId,
// });

// const createUnemploymentData = (purgeId) => ({
//   unemp_id: faker.string.uuid(),
//   city: "Ahmedabad",
//   street: faker.location.streetAddress(),
//   unemployment_rate: faker.datatype.float({ min: 5, max: 50, precision: 0.1 }),
//   latitude: faker.location.latitude(),
//   longitude: faker.location.longitude(),
//   language: faker.helpers.arrayElement(["en"]),
//   state: "Gujarat",
//   state_code: "GJ",
//   purge_id: purgeId,
// });

// const createEarthquakeData = (purgeId) => ({
//   earthquake_id: faker.string.uuid(),
//   date: faker.date.past().toISOString().split("T")[0],
//   earthquake_time: faker.date.recent().toISOString().split("T")[1],
//   country: "India",
//   latitude: faker.location.latitude(),
//   longitude: faker.location.longitude(),
//   count: faker.datatype.number({ min: 1, max: 100 }),
//   coordinates: JSON.stringify({
//     lat: faker.location.latitude(),
//     long: faker.location.longitude(),
//   }),
//   depth: faker.datatype.float({ min: 5, max: 100, precision: 0.1 }),
//   location: faker.location.streetAddress(),
//   magnitude: faker.datatype.float({ min: 1.0, max: 10.0, precision: 0.1 }),
//   language: faker.helpers.arrayElement(["en"]),
//   zip_code: "380054",
//   state: "Gujarat",
//   state_code: "GJ",
//   purge_id: purgeId,
// });

// const createCrimeData = (purgeId) => ({
//   crime_id: faker.string.uuid(),
//   name: faker.lorem.words(3),
//   street: faker.location.streetAddress(),
//   state: "Gujarat",
//   city: "Ahmedabad",
//   icon_url: faker.internet.url(),
//   state_code: "GJ",
//   zip_code: "380054",
//   time: faker.date.recent().toISOString().split("T")[1],
//   price_loss: `$${faker.datatype
//     .float({ min: 100, max: 10000, precision: 0.01 })
//     .toFixed(2)}`,
//   id: faker.string.uuid(),
//   date: faker.date.past().toISOString().split("T")[0],
//   latitude: faker.location.latitude(),
//   longitude: faker.location.longitude(),
//   country: "India",
//   language: faker.helpers.arrayElement(["en"]),
//   purge_id: purgeId,
// });

// const createSocialMediaData = (purgeId) => {
//   const eventType = faker.helpers.arrayElement([
//     "car_dealerships",
//     "missing_persons",
//     "rentals",
//   ]);

//   let data;

//   switch (eventType) {
//     case "car_dealerships":
//       data = {
//         description: faker.lorem.sentence(),
//         engine_type: faker.helpers.arrayElement(["Gas", "Electric", "Hybrid"]),
//         miles_driven:
//           faker.datatype.number({ min: 10000, max: 150000 }) + " miles",
//         model: faker.vehicle.model(),
//         phone: faker.phone.number(),
//         price: faker.datatype.number({ min: 1000, max: 50000 }).toString(),
//         rating: faker.datatype
//           .float({ min: 1, max: 5, precision: 0.1 })
//           .toFixed(1),
//         review: faker.datatype.number({ min: 1, max: 500 }).toString(),
//         seller: faker.company.name(),
//         type: faker.vehicle.type(),
//       };
//       break;

//     case "missing_persons":
//       data = {
//         age: faker.datatype.number({ min: 10, max: 70 }) + "yrs",
//         contact_person: faker.person.fullName(),
//         eye_color: faker.helpers.arrayElement(["brown", "blue", "green"]),
//         hair_color: faker.helpers.arrayElement(["brown", "blonde", "black"]),
//         last_seen:
//           faker.date.past().toISOString().split("T")[0] + ", Ahmedabad, GJ",
//         missing_person_img: faker.image.avatar(),
//         name: faker.person.fullName(),
//         phone: faker.phone.number(),
//         weight: faker.datatype.number({ min: 50, max: 250 }) + " lbs",
//       };
//       break;

//     case "rentals":
//       data = {
//         address: faker.location.streetAddress() + ", Ahmedabad, GJ-380054",
//         max_price_range: faker.datatype
//           .number({ min: 2000, max: 5000 })
//           .toString(),
//         min_price_range: faker.datatype
//           .number({ min: 1000, max: 2000 })
//           .toString(),
//         phone: faker.phone.number(),
//         property_name: faker.company.companyName(),
//         rating: faker.datatype
//           .float({ min: 1, max: 5, precision: 0.1 })
//           .toFixed(1),
//         review: faker.datatype.number({ min: 1, max: 100 }).toString(),
//       };
//       break;

//     default:
//       data = {};
//   }

//   return {
//     social_media_id: faker.string.uuid(),
//     event_type: eventType,
//     icon_url: faker.internet.url(),
//     title: faker.lorem.words(3),
//     state: faker.location.state(),
//     state_code: "GJ",
//     zip_code: "380054",
//     latitude: faker.location.latitude(),
//     longitude: faker.location.longitude(),
//     data: data,
//     language: faker.helpers.arrayElement(["en"]),
//     purge_id: purgeId,
//   };
// };

// const createNetworkData = (purgeId) => ({
//   network_id: faker.string.uuid(),
//   network_type: faker.helpers.arrayElement(["2G", "5G", "4G", "3G", "4G+"]),
//   state: faker.location.state(),
//   state_code: "GJ",
//   zip_code: "380054",
//   city: "Ahmedabad",
//   altitude: faker.datatype.float({ min: 0, max: 5000, precision: 0.01 }),
//   street: faker.location.streetAddress(),
//   latitude: faker.location.latitude(),
//   longitude: faker.location.longitude(),
//   language: faker.helpers.arrayElement(["en"]),
//   purge_id: purgeId,
// });

// const createGasStationData = (purgeId) => ({
//   station_id: faker.string.uuid(),
//   name: faker.company.companyName(),
//   address: faker.location.streetAddress() + ", Ahmedabad, GJ-380054",
//   state: faker.location.state(),
//   country: "India",
//   phone: faker.phone.number(),
//   hours: faker.helpers.arrayElement(["24"]),
//   comment: faker.datatype.number({ min: 1, max: 100 }).toString(),
//   ratings: faker.datatype.float({ min: 2, max: 5, precision: 0.1 }).toFixed(1),
//   logo_url: faker.internet.url(),
//   timing: faker.helpers.arrayElement(["Open 24 hours"]),
//   payment_mode: faker.helpers.arrayElement(["Cash", "Credit Card"]),
//   open: faker.datatype.boolean(),
//   latitude: faker.location.latitude(),
//   longitude: faker.location.longitude(),
//   language: faker.helpers.arrayElement(["en"]),
//   purge_id: purgeId,
// });

// const createFuelData = (purgeId, stationId) => {
//   const productNames = [
//     "Diesel Premium",
//     "Diesel Regular",
//     "Petrol Premium",
//     "Petrol Regular",
//   ];

//   const grades = ["P", "R", 87, 91];

//   return {
//     product_id: faker.string.uuid(),
//     station_id: stationId,
//     product_name: faker.helpers.arrayElement(productNames),
//     cash_price: faker.datatype
//       .float({ min: 80.0, max: 100.0, precision: 0.01 })
//       .toFixed(2),
//     credit_card_price: faker.datatype
//       .float({ min: 80.0, max: 100.0, precision: 0.01 })
//       .toFixed(2),
//     grade: faker.helpers.arrayElement(grades),
//     language: faker.helpers.arrayElement(["en"]),
//     purge_id: purgeId,
//   };
// };

// export {
//   createEvent,
//   createUnemploymentData,
//   createEarthquakeData,
//   createCrimeData,
//   createSocialMediaData,
//   createNetworkData,
//   createGasStationData,
//   createFuelData
// };

import { faker } from "../faker/faker.js";
import {
  citiesInGujarat,
  zipcodesInGujarat,
  streetsInGujarat,
  event_names,
  event_iconUrls,
  crime_types,
  gasStationNames,
  model,
  vehicle_images,
  sellers,
  Prices,
  missing_persons_names,
  missing_persons_images,
  socialMediaIcons,
  crimeData,
} from "./helperData.js";

// Function to get a random street in Ahmedabad
const getStreetInAhmedabad = () => {
  const city = "Ahmedabad";
  const street = faker.helpers.arrayElement(streetsInGujarat[city]);
  const zipCode = faker.helpers.arrayElement(zipcodesInGujarat[city]);
  return { city, street, zipCode };
};

// Function to generate realistic coordinates near Ahmedabad
const getCoordinatesNearAhmedabad = () => {
  const coordinates = faker.location.nearbyGPSCoordinate({
    origin: [23.022505, 72.5713621],
    radius: 5,
    isMetric: true,
  });
  return {
    latitude: Number(parseFloat(coordinates[0]).toFixed(4)),
    longitude: Number(parseFloat(coordinates[1]).toFixed(4)),
  };
};

// Function to generate realistic coordinates near a specific city in Gujarat
const getCoordinatesNearCity = (city) => {
  // Define city coordinates (latitude and longitude) for various cities in Gujarat
  const cityCoordinates = {
    Ahmedabad: [23.022505, 72.5713621],
    Surat: [21.1702401, 72.8310607],
    Vadodara: [22.3071588, 73.1812187],
    Rajkot: [22.3038945, 70.8021599],
    Bhavnagar: [21.7644725, 72.1519304],
    Jamnagar: [22.4707011, 70.05773],
    Junagadh: [21.5221845, 70.4578769],
    Gandhinagar: [23.215635, 72.6369415],
    Anand: [22.5645175, 72.928871],
    Nadiad: [22.691634, 72.8633632],
    Navsari: [20.946701, 72.952034],
    Vapi: [20.371391, 72.904296],
    Porbandar: [21.6417069, 69.6292654],
    Morbi: [22.817304, 70.832583],
    Mehsana: [23.5892794, 72.3692885],
    Bhuj: [23.242002, 69.666932],
  };

  const origin = cityCoordinates[city] || cityCoordinates["Ahmedabad"]; // Default to Ahmedabad if city not found

  const coordinates = faker.location.nearbyGPSCoordinate({
    origin: origin,
    radius: 5, // You can adjust the radius if needed
    isMetric: true,
  });

  return {
    latitude: Number(parseFloat(coordinates[0]).toFixed(4)),
    longitude: Number(parseFloat(coordinates[1]).toFixed(4)),
  };
};

// Helper function to generate Indian phone numbers
const generateIndianPhoneNumber = () => {
  const indianPrefix = "+91";
  const randomTenDigits = faker.number
    .int({ min: 6000000000, max: 9999999999 })
    .toString();
  return `${indianPrefix} ${randomTenDigits}`;
};

// Helper function to generate the location in the required format
const generateEarthquakeLocation = (city) => {
  const distance = faker.number.int({ min: 5, max: 100 }); // Random distance between 5 to 100 km
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"]; // Possible directions
  const direction = faker.helpers.arrayElement(directions); // Random direction

  return `${distance} km ${direction} of ${city}, GJ`; // Format the location string
};

// Helper function to format coordinates as "21.09°N 70.47°E"
const formatCoordinates = (latitude, longitude) => {
  const latDirection = latitude >= 0 ? "N" : "S";
  const lonDirection = longitude >= 0 ? "E" : "W";

  // Format the latitude and longitude to two decimal places and append direction
  const formattedLatitude = `${Math.abs(latitude).toFixed(2)}°${latDirection}`;
  const formattedLongitude = `${Math.abs(longitude).toFixed(
    2
  )}°${lonDirection}`;

  return `${formattedLatitude} ${formattedLongitude}`;
};

// Helper function to generate an ID in the format #GJ54065
const generateCrimeId = () => {
  const randomNumber = faker.number.int({ min: 10000, max: 99999 });
  return `#GJ${randomNumber}`;
};




// Gas Station Entity Generator (Street-wise for Ahmedabad)
const createGasStationData = (purgeId) => {
  const { city, street, zipCode } = getStreetInAhmedabad();
  const { latitude, longitude } = getCoordinatesNearAhmedabad();

  return {
    station_id: faker.string.uuid(),
    name: faker.helpers.arrayElement(gasStationNames),
    address: `${street}, ${city}, GJ-${zipCode}`,
    state: "Gujarat",
    country: "India",
    phone: generateIndianPhoneNumber(),
    hours: "24",
    comment: faker.number.int({ min: 1, max: 100 }).toString(),
    ratings: faker.number
      .float({ min: 2, max: 5, precision: 0.1 })
      .toFixed(1),
    logo_url: faker.internet.url(),
    timing: "Open 24 hours",
    payment_mode: faker.helpers.arrayElement(["Cash", "Credit Card"]),
    open: faker.datatype.boolean(),
    latitude,
    longitude,
    language: faker.helpers.arrayElement(["en"]),
    purge_id: purgeId,
  };
};

// Event Entity Generator (Street-wise for Ahmedabad)
const createEvent = (purgeId) => {
  const { city, street, zipCode } = getStreetInAhmedabad();
  const { latitude, longitude } = getCoordinatesNearAhmedabad();

  // Select a random index to pair event name and icon URL
  const randomIndex = faker.number.int({
    min: 0,
    max: event_names.length - 1,
  });

  const eventStartDate = faker.date.future(); 
  const eventEndDate = faker.date.future({
    refDate: eventStartDate, 
  });

  return {
    event_id: faker.string.uuid(),
    name: event_names[randomIndex],
    street,
    city,
    phone: generateIndianPhoneNumber(),
    comment: faker.lorem.sentence(),
    rating: faker.number.int({ min: 2, max: 5, precision: 0.1 }),
    icon_url: event_iconUrls[randomIndex],
    state_code: "GJ",
    zip_code: zipCode.toString(),
    seats_available: faker.number.int({ min: 2, max: 20 }) * 5,
    event_price: faker.number.int({ min: 100, max: 1000, precision: 0.01 }),
    event_start_date: eventStartDate.toISOString().split("T")[0],
    event_start_time: faker.date.recent().toISOString().substring(11, 16),
    event_end_date: eventEndDate.toISOString().split("T")[0],
    latitude,
    longitude,
    state: "Gujarat",
    language: faker.helpers.arrayElement(["en"]),
    purge_id: purgeId,
  };
};

// Unemployment Data Generator (City-wise)
const createUnemploymentData = (purgeId) => {
  const city = faker.helpers.arrayElement(citiesInGujarat);
  const { latitude, longitude } = getCoordinatesNearCity(city);

  return {
    unemp_id: faker.string.uuid(),
    city,
    street: faker.location.streetAddress(),
    unemployment_rate: faker.number.int({
      min: 5,
      max: 40,
      precision: 0.1,
    }),
    latitude,
    longitude,
    language: faker.helpers.arrayElement(["en"]),
    state: "Gujarat",
    state_code: "GJ",
    purge_id: purgeId,
  };
};


//Helper function to generate price loss based on crimeType
const generatePriceLoss = (crimeType) => {
  switch (crimeType) {
    case "Murder":
      return "Life Lost & Consequence";
    case "Robbery":
      return `Robbery Rs ${faker.number
        .float({ min: 100000, max: 1000000, precision: 0.01 })
        .toFixed(2)} & over`;
    case "Assault":
      return `Assault Rs ${faker.number
        .float({ min: 5000, max: 50000, precision: 0.01 })
        .toFixed(2)} & over`;
    case "Burglary":
      return `Burglary Rs ${faker.number
        .float({ min: 100000, max: 500000, precision: 0.01 })
        .toFixed(2)} & over`;
    case "Theft":
      return `Theft Rs ${faker.number
        .float({ min: 1000000, max: 5000000, precision: 0.01 })
        .toFixed(2)} & over`;
    case "Kidnapping":
      return `Ransom Demand Rs ${faker.number
        .float({ min: 500000, max: 1000000, precision: 0.01 })
        .toFixed(2)}`;
    case "Fraud":
      return `Fraudulent Transaction Rs ${faker.number
        .float({ min: 50000, max: 100000, precision: 0.01 })
        .toFixed(2)}`;
    case "Drug Trafficking":
      return `Seized Drugs Worth Rs ${faker.number
        .float({ min: 1000000, max: 5000000, precision: 0.01 })
        .toFixed(2)}`;
    case "Domestic Violence":
      return `Medical Expenses Rs ${faker.number
        .float({ min: 5000, max: 50000, precision: 0.01 })
        .toFixed(2)}`;
    case "Cybercrime":
      return `Cyber Loss Rs ${faker.number
        .float({ min: 10000, max: 100000, precision: 0.01 })
        .toFixed(2)}`;
    default:
      return `Loss Rs ${faker.number
        .float({ min: 1000, max: 50000, precision: 0.01 })
        .toFixed(2)}`;
  }
};

// Crime Data Generator (Street-wise for Ahmedabad)
const createCrimeData = (purgeId) => {
  const { city, street, zipCode } = getStreetInAhmedabad();
  const { latitude, longitude } = getCoordinatesNearAhmedabad();
  // const crimeType = faker.helpers.arrayElement(crime_types);

   const randomCrime = faker.helpers.arrayElement(crimeData);
   const crimeDate = faker.date.past();
   const formattedDate = crimeDate.toLocaleDateString("en-US", {
     year: "numeric",
     month: "short",
     day: "numeric",
   }); 
    const formattedTime = crimeDate.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

  return {
    crime_id: faker.string.uuid(),
    name: randomCrime.crime_name,
    street,
    city,
    state: "Gujarat",
    icon_url: randomCrime.icon_url,
    state_code: "GJ",
    zip_code: zipCode.toString(),
    time: formattedTime,
    price_loss: generatePriceLoss(randomCrime.crime_name),
    id: generateCrimeId(),
    date: formattedDate,
    latitude,
    longitude,
    country: "India",
    language: faker.helpers.arrayElement(["en"]),
    purge_id: purgeId,
  };
};

// Earthquake Data Generator (City-wise)
const createEarthquakeData = (purgeId) => {
  const city = faker.helpers.arrayElement(citiesInGujarat);
  const { latitude, longitude } = getCoordinatesNearCity(city);

  // Generate date and time in the desired format
  const earthquakeDate = faker.date.past(); 
  const formattedDate = earthquakeDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }); 
 const formattedTime = earthquakeDate.toISOString();

  return {
    earthquake_id: faker.string.uuid(),
    date: formattedDate,
    earthquake_time: formattedTime,
    country: "India",
    latitude,
    longitude,
    count: faker.number.int({ min: 1, max: 100 }),
    coordinates: formatCoordinates(latitude, longitude),
    depth: Number(
      faker.number.float({ min: 5, max: 100, precision: 0.1 }).toFixed(2)
    ),
    location: generateEarthquakeLocation(city),
    magnitude: Number(faker.number.float({ min: 1.0, max: 10.0, precision: 0.1 }).toFixed(2)),
    language: faker.helpers.arrayElement(["en"]),
    zip_code: faker.helpers.arrayElement(zipcodesInGujarat[city]).toString(),
    state: "Gujarat",
    state_code: "GJ",
    purge_id: purgeId,
  };
};

// Network Data Generator (Street-wise for Ahmedabad)
const createNetworkData = (purgeId) => {
  const { city, street, zipCode } = getStreetInAhmedabad();
  const { latitude, longitude } = getCoordinatesNearAhmedabad();

  return {
    network_id: faker.string.uuid(),
    network_type: faker.helpers.arrayElement(["2G", "5G", "4G", "3G", "4G+"]),
    city,
    state: "Gujarat",
    state_code: "GJ",
    zip_code: zipCode.toString(),
    street,
    altitude: faker.number.int({ min: 52, max: 58, precision: 0.01 }),
    latitude,
    longitude,
    language: faker.helpers.arrayElement(["en"]),
    purge_id: purgeId,
  };
};

// Social Media Data Generator (Street-wise for Ahmedabad)
const createSocialMediaData = (purgeId) => {
  const { city, street, zipCode } = getStreetInAhmedabad();
  const { latitude, longitude } = getCoordinatesNearAhmedabad();
  const eventTypes = ["car_dealerships", "missing_persons", "rentals"];
  const eventType = faker.helpers.arrayElement(eventTypes);
  const eventIndex = eventTypes.indexOf(eventType);
  const titles = ["Car For Sale", "Missing", "Rentals"];

  let data;
  switch (eventType) {
    case "car_dealerships":
      const randomIndex = faker.number.int({
        min: 0,
        max: model.length - 1,
      });
      data = {
        description: faker.lorem.sentence(),
        engine_type: faker.helpers.arrayElement(["Gas", "Electric", "Hybrid"]),
        miles_driven:
          faker.number.int({ min: 10000, max: 150000 }) + " km driven",
        model: model[randomIndex],
        phone: generateIndianPhoneNumber(),
        price: Prices[randomIndex],
        rating: faker.number
          .int({ min: 2, max: 5, precision: 0.1 }),
        review: faker.number.int({ min: 10, max: 500 }),
        seller: sellers[randomIndex],
        type: faker.helpers.arrayElement[("Automatic", "Manual")],
        street: `${street},${city}`,
        vehicle_img: vehicle_images[randomIndex],
      };
      break;

    case "missing_persons":
      const randomPersonIndex = faker.number.int({
        min: 0,
        max: missing_persons_names.length - 1,
      });

      // Generate a formatted date for last seen
      const lastSeenDate = faker.date.past().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      // Define an array of possible locations near Ahmedabad
      const nearbyLocations = [
        "Vastrapur Lake",
        "Law Garden",
        "Maninagar",
        "Ellis Bridge",
        "Satellite Road",
        "C.G. Road",
      ];

      const lastSeenLocation = faker.helpers.arrayElement(nearbyLocations);
      data = {
        age: faker.number.int({ min: 3, max: 70 }) + "yrs",
        contact_person:
          faker.helpers.arrayElement(
            ["Ahmedabad Police",
            "Harshil",
            "Jinal",
            "Dhwani",
            "Mehul",
            "Kavya",
            "Devanshi",
            "Aarav",
            "Khushi",
            "Parth",
            "Ruchi"]
            ),
        eye_color: faker.helpers.arrayElement(["brown", "blue", "black"]),
        hair_color: faker.helpers.arrayElement([
          "brown",
          "blonde",
          "black",
          "grey",
        ]),
        last_seen: `${lastSeenDate}, near ${lastSeenLocation}, Ahmedabad`,
        missing_person_img: missing_persons_images[randomPersonIndex],
        name: missing_persons_names[randomPersonIndex],
        phone: generateIndianPhoneNumber(),
        weight: faker.number.int({ min: 10, max: 120 }) + " lbs",
      };
      break;

    case "rentals":
        const minPrice =
          (faker.number.int({ min: 10000, max: 20000 }) / 1000).toFixed(
            1
          ) + "k";
        const maxPrice =
          (faker.number.int({ min: 20000, max: 30000 }) / 1000).toFixed(
            1
          ) + "k";
      data = {
        address: `${street}, ${city}`,
        max_price_range: maxPrice,
        min_price_range: minPrice,
        phone: generateIndianPhoneNumber(),
        property_name: faker.company.name(),
        rating: faker.number
          .int({ min: 2, max: 5, precision: 0.1 }),
        review: faker.number.int({ min: 10, max: 200 }),
      };
      break;

    default:
      data = {};
  }

  return {
    social_media_id: faker.string.uuid(),
    event_type: eventType,
    icon_url: socialMediaIcons[eventIndex],
    title: titles[eventIndex],
    state: "Gujarat",
    state_code: "GJ",
    zip_code: zipCode.toString(),
    city,
    latitude,
    longitude,
    data,
    language: faker.helpers.arrayElement(["en"]),
    purge_id: purgeId,
  };
};

const createFuelData = (purgeId, stationId) => {
  const productNames = [
    "Diesel Premium",
    "Diesel Regular",
    "Petrol Premium",
    "Petrol Regular",
  ];

  const grades = ["P", "R", "87", "91"];

  const basePrices = {
    Diesel: 90.11, // Diesel base price in INR
    Petrol: 96.44, // Petrol base price in INR
  };

  // Function to get price variance
   const getPriceWithVariance = (basePrice) => {
     const variance = faker.number.float({
       min: -1.0,
       max: 1.0,
       precision: 0.01,
     }); // Adding a variance of ±1.0 INR
     return Number((basePrice + variance).toFixed(2));
   };

  // Select a product name and determine the base price for that product
  const productName = faker.helpers.arrayElement(productNames);
  const basePrice = productName.includes("Diesel")
    ? basePrices.Diesel
    : basePrices.Petrol;

  return {
    product_id: faker.string.uuid(),
    station_id: stationId,
    product_name: faker.helpers.arrayElement(productNames),
    cash_price: getPriceWithVariance(basePrice),
    credit_card_price: getPriceWithVariance(basePrice + 0.5),
    grade: faker.helpers.arrayElement(grades),
    language: faker.helpers.arrayElement(["en"]),
    purge_id: purgeId,
  };
};

export {
  createEvent,
  createUnemploymentData,
  createEarthquakeData,
  createCrimeData,
  createNetworkData,
  createGasStationData,
  createSocialMediaData,
  createFuelData,
};
