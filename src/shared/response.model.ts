export interface ServerResponse {
    error: boolean;
    code: number;
    message: string;
}

export enum CONNECTION_STATUS {
    DISCONNECTED = "rozłączony",
    CONNECTING = "łączenie",
    CONNECTED = "połączony"
}
