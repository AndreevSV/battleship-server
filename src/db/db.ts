import { DatabaseSync } from 'node:sqlite';

// export const db = new DatabaseSync(':memory:');
export const db = new DatabaseSync(`${import.meta.dirname}/main.db`);


