import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../utils';
import { Orders, OrdersDto, OrderState, POrder } from './types';
import { RootState } from '../store';
import { UserDto } from '../user/types';
import { UserProfileDto } from '../userProfile/types';
import { ProjectDto } from '../project/types';
import getMyOrders from '../../utils/getMyOrders';

const initialState: OrderState = {
    orders: [],
    myOrders: [],
};

export const fetchOrders = createAsyncThunk('order/fetchOrders', async () => {
    const data: OrdersDto[] = (await axios.get(BASE_URL + '/order/all')).data;
    const users: UserDto[] = (await axios.get(BASE_URL + '/user/all')).data;
    const userProfiles: UserProfileDto[] = (await axios.get(BASE_URL + '/user-profile/all')).data;
    const projects: ProjectDto[] = (await axios.get(BASE_URL + '/project/all')).data;

    const orders: Orders[] = data.map(order => {
        const user = users.find(user => user?.id === order.executorId);
        const userProfile = userProfiles.find(userProfile => userProfile.userId === user?.id);
        const project = projects.find(project => project.id === order.projectId);

        return { ...order, project, user, userProfile };
    });

    return orders;
});

export const fetchMyOrders = createAsyncThunk('order/fetchMyOrders', async () => {
    const currentUserId = localStorage.getItem('userId');
    if (currentUserId) {
        const data: OrdersDto[] = (await axios.get(BASE_URL + '/orders')).data;
        const users: UserDto[] = (await axios.get(BASE_URL + '/users')).data;
        const userProfiles: UserProfileDto[] = (await axios.get(BASE_URL + '/users-profile')).data;
        const projects: ProjectDto[] = (await axios.get(BASE_URL + '/projects')).data;

        const orders: Orders[] = data.map(order => {
            const user = users.find(user => user?.id === order.executorId);
            const userProfile = userProfiles.find(userProfile => userProfile.userId === user?.id);
            const project = projects.find(project => project.id === order.projectId);

            return { ...order, project, user, userProfile };
        });

        const myOrders = getMyOrders(orders, currentUserId);
        return myOrders;
    }
    return [];
});

export const create = createAsyncThunk('order/create', async (object: POrder) => {
    const data = (await axios.post(BASE_URL + '/orders', object)).data;
    return data;
});

export const remove = createAsyncThunk('order/delete', async (orderId: number) => {
    const data = await axios.delete(BASE_URL + '/orders' + '/' + orderId);
    return data.data;
});

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addToMyOrders(state, action) {
            const findItem = state.myOrders.find(myOrder => myOrder.projectId === action.payload.projectId);
            if (!findItem) {
                state.myOrders.push(action.payload);
            }
        },
        deleteFromMyOrders(state, action) {
            state.myOrders = state.myOrders.filter(myOrder => myOrder.projectId === action.payload.projectId);
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchOrders.fulfilled, (state, action) => {
                state.orders = action.payload;
            })
            .addCase(fetchOrders.rejected, (state, action) => {
                state.orders = [];
                console.error('Ошибка при получении всех заказов');
            })
            .addCase(fetchMyOrders.fulfilled, (state, action) => {
                state.myOrders = action.payload;
            })
            .addCase(fetchMyOrders.rejected, (state, action) => {
                state.myOrders = [];
                console.error('Ошибка при получении моих заказов');
            })
            .addCase(create.fulfilled, (state, action) => {
                const findItem = state.orders.find(order => order.projectId === action.payload.projectId);
                if (!findItem) {
                    state.orders.push(action.payload);
                }
            })
            .addCase(create.rejected, (state, action) => {
                console.error('Ошибка при создании заказа');
            })
            .addCase(remove.fulfilled, (state, action) => {
                state.orders = state.orders.filter(order => order.id !== action.payload.id);
            })
            .addCase(remove.rejected, (state, action) => {
                console.error('Ошибка при удалении заказа');
            });
    },
});

export const { addToMyOrders, deleteFromMyOrders } = orderSlice.actions;

export default orderSlice.reducer;

export const selectOrders = (state: RootState) => state.order.orders;
export const selectOrdersState = (state: RootState) => state.order;
