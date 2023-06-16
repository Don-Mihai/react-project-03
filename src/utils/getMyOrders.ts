import { Orders } from '../redux/order/types';

const getMyOrders = (orders: Orders[], currentUserId: string) => {
    if (orders) {
        return orders.filter(order => order.executorId === +currentUserId);
    }
    return [];
};

export default getMyOrders;
