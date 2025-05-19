import { db } from './db.js';
import { randomUUID } from 'node:crypto';

export function getUserByNameAndPassword(name: string) {
    const row = db
        .prepare(
            `
        SELECT * FROM users WHERE name = ?
        `
        )
        .get(name);
    return row;
}

export function createUserByNameAndPassword(name: string, password: string) {
    const user_index = randomUUID();
    return db
        .prepare(
            `
        INSERT INTO users (name, password, user_index)
        VALUES (?, ?, ?)
`
        )
        .run(name, password, user_index);
}
