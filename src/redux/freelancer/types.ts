import { INPUTS_NAME } from '../../types';

export interface FreelancerDto {
    id: number;
    [INPUTS_NAME.LOGIN]: string;
    password: string;
    name: string;
    image?: string;
    skills?: string[];
    // профессия
    status?: string;
    ratePerHour?: number;
    rating?: number;
    description?: string;
}

export interface Freelancer extends FreelancerDto {}
