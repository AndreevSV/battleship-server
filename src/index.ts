import 'dotenv/config';
import { initDb } from './db/initDb.js';
// import { createWebSocketServer } from './ws/wsServer.js';

try {
    const { createWebSocketServer } = await import('./ws/wsServer.js');
    const port = Number(process.env.PORT) || 3000;

    initDb();

    createWebSocketServer(port);
} catch (error) {
    console.error(error);
    process.exit(1);
}
