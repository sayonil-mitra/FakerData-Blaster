import { faker } from "@faker-js/faker";

// Helper function to generate a random number between min and max
const getRandomNumber = (min, max) =>
	Math.floor(Math.random() * (max - min + 1)) + min;

faker.random = {
	arrayElement: (arr) => {
		let choice = getRandomNumber(0, arr.length - 1);
		return arr[choice];
	},
	getRandomNumber,
};

export { faker, getRandomNumber };
