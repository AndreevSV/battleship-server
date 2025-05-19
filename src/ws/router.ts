import { WebSocket } from 'ws';
import { registration } from '../services/regService.js';


export function handleMessage(ws: WebSocket, data: string) {
    let fullMessage;
    let includedData;

    try {
        fullMessage = JSON.parse(data);
        console.log('🚀 ~ handleMessage ~ message:', fullMessage);
        if (typeof fullMessage.data === 'string') {
            try {
                includedData = JSON.parse(fullMessage.data);
                console.log('🚀 ~ handleMessage ~ includedData:', includedData);
            } catch {}
        }
    } catch (error) {
        ws.send(JSON.stringify({ error: 'Invalid JSON message' }));
    }

    switch (fullMessage.type) {
        case 'reg': {
            const { type, data, id } = registration(includedData);
            const strToSend = prepareObjectToSendToFront(type, data, id);
            ws.send(strToSend);
            break;
        }
        case 'create_room': {
            // createRoom();
            break;
        }
        case 'add_user_to_room': {
            break;
        }
        case 'add_ships': {
            break;
        }
        case 'attack': {
            break;
        }
        case 'randomAttack': {
            break;
        }
    }
}

function prepareObjectToSendToFront(type: string, data: {}, id: number) {
    const returnObject = {
        type,
        data: JSON.stringify(data),
        id,
    };

    return JSON.stringify(returnObject);
}
