import { db } from './db.js';

export function initDb() {
    const createUsersTable = `
    CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    user_index INTEGER
    );
`;

    const createRoomsTable = `
    CREATE TABLE IF NOT EXISTS rooms (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    roomId INTEGER NOT NULL UNIQUE AUTOINCREMENT,
    user_one_id: FOREIGN_KEY users id,
    user_two_id: FOREIGN_KEY users id,
    );
`;

    db.exec(createUsersTable);
}
