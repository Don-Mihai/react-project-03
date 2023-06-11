export interface UserProfileDto {
    id: number;
    userId: number;
    imageUrl?: string;
    skills?: string[];
    ratePerHour?: number;
    rating?: number;
    ratingCount?: number;
}

export interface UserProfile extends UserProfileDto {}

export interface PUserProfile extends Omit<UserProfileDto, 'id'> {}

export interface UserProfileState {
    userProfiles: UserProfile[];
}
