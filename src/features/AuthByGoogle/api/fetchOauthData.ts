import jwt_decode from 'jwt-decode';
import { PUserGoogle } from '../../../redux/user/types';
import { PUserGoogleProfile } from '../../../redux/userProfile/types';
import { OauthCredential, OauthResponse } from './types';

export const fetchOauthData = (response: any): OauthResponse => {
    const decoded: OauthCredential = jwt_decode(response.credential);
    const { name, picture, sub, email } = decoded;

    const userData: PUserGoogle = {
        name,
        email,
        id: Number(sub),
    };

    const userProfileData: PUserGoogleProfile = {
        userId: Number(sub),
        imageUrl: picture,
    };

    return { userData, userProfileData };
};
