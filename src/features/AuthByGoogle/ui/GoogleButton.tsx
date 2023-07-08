import { FC } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import Box from '@mui/material/Box';

import { useAppDispatch } from '../../../redux/hooks';
import { authByGoogle } from '../../../redux/user';
import { authProfileByGoogle } from '../../../redux/userProfile';
import { useNavigate } from 'react-router-dom';
import { fetchOauthData } from '../api/fetchOauthData';

export const GoogleButton: FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const login = async (response: any) => {
        try {
            const { userData, userProfileData } = fetchOauthData(response);

            if (userData) await dispatch(authByGoogle(userData));
            if (userProfileData) await dispatch(authProfileByGoogle(userProfileData));

            navigate('/profile');
        } catch (e) {
            console.error('Ошибка при авторизации через Google');
        }
    };

    return (
        <Box py={1} display={'flex'} justifyContent={'center'}>
            <GoogleLogin
                onSuccess={response => {
                    login(response);
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            />
        </Box>
    );
};
