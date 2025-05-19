import { WebSocketServer } from 'ws';
import { handleMessage } from './router.js';

export function createWebSocketServer(port: number) {
    const wss = new WebSocketServer({ port });
    console.log(`Websockets started on port: ws://localhost:${port}`);

    wss.on('connection', function connection(ws) {
        console.log('New client connected');
        ws.on('error', console.error);

        ws.on('message', function message(data: string) {
            console.log('received: %s', data);
            try {
                handleMessage(ws, data);
            } catch (err) {
                ws.send(JSON.stringify({error: 'Invalid JSON format'}));
            }
        });

        ws.send(JSON.stringify({message: 'You are on a WebSocket server'}));
    });
}
