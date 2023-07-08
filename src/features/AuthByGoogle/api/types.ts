import { PUserGoogle } from '../../../redux/user/types';
import { PUserGoogleProfile } from '../../../redux/userProfile/types';

export interface OauthCredential {
    name: string;
    email: string;
    sub: string;
    picture: string;
}

export interface OauthResponse {
    userData: PUserGoogle;
    userProfileData: PUserGoogleProfile;
}
