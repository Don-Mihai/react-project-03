export interface UserProfileDto {
    id: number;
    userId: number;
    imageUrl?: string;
    skills?: string[];
    ratePerHour?: number;
    rating?: number;
    ratingCount?: number;
    category?: CATEGORY_TYPE;
}

export enum CATEGORY_TYPE {
    DEVELOPMENT = 'development',
    DESIGN = 'design',
    TESTING = 'testing',
    MARKETING = 'marketing',
    CONTENT = 'content',
    ADMINISTRATION = 'administation',
}

export interface UserProfile extends UserProfileDto {}

export interface PUserProfile extends Omit<UserProfileDto, 'id'> {}

export interface UserProfileState {
    userProfiles: UserProfile[];
}
