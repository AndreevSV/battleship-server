import 'dotenv/config';
import { WebSocketServer } from 'ws';

const port = Number(process.env.PORT) || 8080;

const wss = new WebSocketServer({ port });
console.log(`Websockets started on port: ws://localhost:${port}`);

wss.on('connection', function connection(ws) {
    console.log('New client connected');
    ws.on('error', console.error);

    ws.on('message', function message(data) {
        console.log('received: %s', data);
    });

    ws.send('You are on a WebSocket server');

});
