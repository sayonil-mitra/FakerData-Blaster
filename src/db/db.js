import sqlite3 from "sqlite3";
import { open } from "sqlite";
import { v4 as uuidv4 } from "uuid";

const dbPromise = open({
	filename: "./purgeCache.db",
	driver: sqlite3.Database,
});

async function initDB() {
	const db = await dbPromise;
	await db.exec(`
    CREATE TABLE IF NOT EXISTS purge_cache (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      purge_id TEXT NOT NULL UNIQUE,
      app_name TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);
}

async function addPurgeId(appName) {
	const db = await dbPromise;
	const purgeId = uuidv4(); // Generate a new UUID for the purge ID
	await db.run(
		`INSERT INTO purge_cache (purge_id, app_name, created_at, updated_at) VALUES (?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`,
		[purgeId, appName]
	);
	console.log(`Added purge ID: ${purgeId} for app: ${appName}`);
	return purgeId;
}

async function getPurgeIds() {
	const db = await dbPromise;
	const rows = await db.all(`SELECT * FROM purge_cache`);
	return rows;
}

async function getFirstPurgeId() {
	const db = await dbPromise;
	const firstRow = await db.get(
		`SELECT * FROM purge_cache ORDER BY created_at LIMIT 1`
	);

	if (firstRow) {
		return firstRow.purge_id;
	} else {
		console.log("No purge IDs to remove.");
		return null;
	}
}

async function removePurgeId(purgeId) {
	try {
		if (!purgeId) {
			return null;
		}
		const db = await dbPromise;

		const record = await db.get(
			`SELECT purge_id FROM purge_cache WHERE purge_id = ?`,
			[purgeId]
		);

		if (!record) {
			return null;
		}

		await db.run(`DELETE FROM purge_cache WHERE purge_id = ?`, [purgeId]);
		return purgeId;
	} catch (error) {
		console.error("Error removing purgeId:", error);
		return null;
	}
}

async function updatePurgeId(purgeId) {
	const db = await dbPromise;
	const result = await db.run(
		`UPDATE purge_cache SET updated_at = CURRENT_TIMESTAMP WHERE purge_id = ?`,
		[purgeId]
	);
	if (result.changes > 0) {
		console.log(`Updated purge ID: ${purgeId}`);
	} else {
		console.log(`No purge ID found with id: ${purgeId}`);
	}
}

async function clearCache() {
	const db = await dbPromise;
	await db.run(`DELETE FROM purge_cache`);
	console.log("Cleared all purge IDs.");
}

// Export the cache functions
export {
	addPurgeId,
	getPurgeIds,
	getFirstPurgeId,
	removePurgeId,
	updatePurgeId,
	clearCache,
	initDB,
};
