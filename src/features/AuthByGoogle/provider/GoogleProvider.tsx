import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';

interface GoogleProviderProps {
    children: React.ReactNode;
}

const CLIENT_ID = String(process.env.REACT_APP_GOOGLE_API_TOKEN);

export const GoogleAuthProvider: React.FC<GoogleProviderProps> = ({ children }) => {
    return <GoogleOAuthProvider clientId={CLIENT_ID}>{children}</GoogleOAuthProvider>;
};
