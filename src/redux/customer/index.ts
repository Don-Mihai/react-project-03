import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { CustomerState, Custumer, PAuth, PRegister } from './types';

// Дефолтные значения
const initialState: CustomerState = {
    customers: [],
};

export const fetchCustomer = createAsyncThunk<Custumer[]>('freelancer/fetch', async () => {
    const data = await axios.get('https://645f57d47da4477ba9554f96.mockapi.io/frelancers');
    return data.data;
});

export const authCustomer = createAsyncThunk<Custumer, PAuth>('freelancer/auth', async (object: PAuth): Promise<Custumer> => {
    const response = axios.get('https://645f57d47da4477ba9554f96.mockapi.io/frelancers').then(res => {
        const user: Custumer = res.data.filter((user: Custumer) => {
            if (user.login === object.login && user.password === object.password) {
                return true;
            } else return false;
        })[0];

        if (user?.id) {
            localStorage.setItem('userId', String(user.id));
        }

        return user;
    });

    return response;
});

export const registerCustumer = createAsyncThunk('freelancer/register', async (object: PRegister) => {
    const data = await axios.post('https://645f57d47da4477baf96.mockapi.io/frelancers', object);
    return data.data;
});

export const editCustomer = createAsyncThunk('freelancer/edit', async (object: Custumer) => {
    const data = await axios.put(`https://645f57d47da4477ba9554f96.mockapi.io/frelancers/${object.id}`, object);
    return data.data;
});

export const deleteCustomer = createAsyncThunk('freelancer/delete', async (userId: number) => {
    const data = await axios.delete(`https://645f57d47da4477ba9554f96.mockapi.io/frelancers/${userId}`);
    return data.data;
});

// todo: при регистрации выбрать роль
export const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        // функции обработчики (микротаски)
    },
    extraReducers(builder) {
        builder
            .addCase(fetchCustomer.fulfilled, (state, action) => {
                state.customers = action.payload;
            })
            .addCase(editCustomer.fulfilled, (state, action) => {
                state.customers = state.customers.map(customer => {
                    if (customer.id === action.payload.id) {
                        return action.payload;
                    }

                    return customer;
                });
            })
            .addCase(deleteCustomer.fulfilled, (state, action) => {
                state.customers = state.customers.filter(customer => customer.id !== action.payload.id);
            });
    },
});

export const {} = customerSlice.actions;

export default customerSlice.reducer;
