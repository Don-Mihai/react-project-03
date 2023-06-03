import { INPUTS_NAME } from '../../types';

export interface FreelancerDto {
    id: number;
    [INPUTS_NAME.LOGIN]: string;
    password: string;
    name: string;
    image?: string;
    status?: string;
    skills?: string[];
    ratePerHour?: number;
    rating?: number;
}

export interface Freelancer extends FreelancerDto {}
