export interface PAuth {
    login: string;
    password: string;
}

export interface PRegister extends Omit<UserDto, 'id'> {}

export interface UserState {
    users: User[];
}

export interface UserDto {
    id: number;
    login: string;
    password: string;
    name: string;
    role: string;
}

export interface User extends UserDto {}
