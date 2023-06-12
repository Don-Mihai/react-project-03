export interface OrderDto {
    id: number;
    projectId: number;
    userId: number;
    price: number;
    status: string;
    rating?: number;
}

export interface Order extends OrderDto {}

export interface ProjectDto {
    id: number;
    employerId: number;
    title: string;
    description: string;
    budget: number;
    status: string;
}

export interface Project extends ProjectDto {}

export interface PProject extends Omit<ProjectDto, 'id'> {}

export interface ProjectState {
    projects: Project[];
}
