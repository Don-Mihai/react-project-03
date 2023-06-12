export interface PAuth {
    login: string;
    password: string;
}

export interface PRegister extends Omit<UserDto, 'id'> {}

export interface UserState {
    users: User[];
    currentUser: User;
}

export enum ROLES {
    ADMIN = 'admin',
    CUSTOMER = 'customer',
    FREELANCER = 'freelancer',
}

export interface UserDto {
    id: number;
    login: string;
    password: string;
    email: string;
    name: string;
    surname: string;
    role: ROLES;
}

export interface User extends UserDto {}
