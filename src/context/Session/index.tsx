import * as React from "react";

export type CognitoData = {
    idToken: string;
    accessToken: string;
    refreshToken: string;
    expiresIn: string;
};

export type Geolocation = {
    latitude: number;
    longitude: number;
    location: string;
};

export type Session = {
    cognitoData: CognitoData,
    geolocation: Geolocation,
    setGeolocation: (location: any, postalAddress: any) => void
};

export const initialSession = {
    cognitoData: {
        idToken: '',
        accessToken: '',
        refreshToken: '',
        expiresIn: ''
    },
    geolocation: {
        latitude: 0,
        longitude: 0,
        location: ''
    },
    setGeolocation: () => {}
};

const SessionContext = React.createContext<Session>(initialSession);

export default SessionContext;