import { RegData, RegistrationOutputData } from '../types/regDataType.js';
import { encryptPassword } from '../utils/passwordUtils.js';
import {
    getUserByNameAndPassword as getUserByName,
    createUserByNameAndPassword,
} from '../db/queries.js';

export function registration(regData: RegData): RegistrationOutputData {
    let answer: RegistrationOutputData;
    try {
        let row;

        const name = regData.name;
        const password = regData.password;
        const encryptedPassword = encryptPassword(password);
        row = getUserByName(name);
        if (!row) {
            createUserByNameAndPassword(name, encryptedPassword);
            row = getUserByName(name);
        }

        answer = {
            type: 'reg',
            data: {
                name: row?.name !== undefined ? String(row.name) : '',
                index: typeof row?.user_index === 'bigint'
                    ? row.user_index.toString()
                    : row?.user_index instanceof Uint8Array
                        ? Buffer.from(row.user_index).toString()
                        : row?.user_index ?? '',
                error: false,
                errorText: '',
            },
            id: 0 as 0,
        };
        console.log(answer);
        return answer;
    } catch (error) {
        console.error('Registration error:', error);
        answer = {
            type: 'reg',
            data: {
                name: '',
                index: '',
                error: true,
                errorText: 'Registration failed',
            },
            id: 0,
        };
        return answer;
    }
}
