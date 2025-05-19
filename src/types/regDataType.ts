export interface RegistrationIncomingData {
    type: string;
    data: {
        name: string;
        password: string;
    };
    id: 0;
}

export type RegData = RegistrationIncomingData['data'];

export interface RegistrationOutputData {
    type: string;
    data: {
        name: string;
        index: number | string;
        error: boolean;
        errorText: string;
    };
    id: 0;
}
