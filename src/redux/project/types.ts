import { User } from '../user/types';
import { UserProfile } from '../userProfile/types';

export interface ProjectDto {
    id: number;
    employerId: User['id'];
    title: string;
    description: string;
    budget: number;
    status: PROJECT_STATUS;
}

export enum PROJECT_STATUS {
    ACTIVE = 'active',
    ARCHIVED = 'archived',
}

export interface Project extends ProjectDto {
    //в зависимости от статуса order`а устанавливаем значение
    //если 'pending' или 'cancelled', то значение будет true
    canTakeProject: boolean;
    //получаем данные заказчика
    user?: User;
    userProfile?: UserProfile;
}

export interface PProject extends Omit<ProjectDto, 'id'> {}

export interface ProjectState {
    projects: Project[];
}
