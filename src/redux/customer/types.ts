import { Freelancer } from '../freelancer/types';

export interface PAuth {
    login: string;
    password: string;
}

export interface CustomerState {
    customers: Freelancer[];
}

export interface Custumer extends Freelancer {}
