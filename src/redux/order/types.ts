import { Project, ProjectDto } from '../project/types';
import { User } from '../user/types';
import { UserProfile } from '../userProfile/types';

export interface OrdersDto {
    id: number;
    projectId: Project['id'];
    executorId: User['id'];
    price?: number;
    status: ORDER_STATUS;
}

export enum ORDER_STATUS {
    PENDING = 'pending',
    IN_PROGRESS = 'in_progress',
    COMPLETED = 'completed',
    CANCELLED = 'cancelled',
}

export interface Orders extends OrdersDto {
    project?: ProjectDto;
    //получаем данные исполнителя
    user?: User;
    userProfile?: UserProfile;
}

export interface POrder extends Omit<OrdersDto, 'id'> {}

export interface OrderState {
    orders: Orders[];
    //тут нужно получить currentUser из userSlice
    myOrders: Orders[];
}
