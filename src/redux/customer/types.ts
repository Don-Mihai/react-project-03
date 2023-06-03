import { Freelancer, FreelancerDto } from '../freelancer/types';

export interface PAuth {
    login: string;
    password: string;
}

export interface PRegister extends Omit<FreelancerDto, 'id' | 'status' | 'rating'> {}

export interface CustomerState {
    customers: Freelancer[];
}

export interface Custumer extends Freelancer {}
