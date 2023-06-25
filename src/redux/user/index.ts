import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { PAuth, PRegister, User, UserState } from './types';
import { BASE_URL } from '../../utils';
import { RootState } from '../store';

// Дефолтные значения
const initialState: UserState = {
    users: [],
    currentUser: {} as User,
};

export const fetchUsers = createAsyncThunk('user/fetch', async () => {
    const data = await axios.get(BASE_URL + '/users');
    return data.data;
});

export const fetchUser = createAsyncThunk('user/fetchById', async (userId: number) => {
    const data = await axios.post(BASE_URL + '/user/by-id', { userId });
    return data.data;
});

export const authUsers = createAsyncThunk('user/auth', async (object: PAuth): Promise<User> => {
    const response = await axios.post(BASE_URL + '/user/auth', object);

    if (response?.data?.id) {
        localStorage.setItem('userId', String(response?.data?.id));
    }

    return response?.data;
});

export const registerUser = createAsyncThunk('user/register', async (object: PRegister) => {
    const data = await axios.post(BASE_URL + '/user/register', object);
    return data.data;
});

export const editUsers = createAsyncThunk('user/edit', async (object: User) => {
    const data = await axios.put(BASE_URL + '/user/edit', object);
    return data.data;
});

export const deleteUsers = createAsyncThunk('user/delete', async (userId: number) => {
    const data = await axios.delete(BASE_URL + '/users' + '/' + userId);
    return data.data;
});

// todo: при регистрации выбрать роль
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // функции обработчики (микротаски)
    },
    extraReducers(builder) {
        builder
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.users = action.payload;
            })
            .addCase(authUsers.fulfilled, (state, action) => {
                state.currentUser = action.payload;
            })
            .addCase(editUsers.fulfilled, (state, action) => {
                state.users = state.users.map(user => {
                    if (user.id === action.payload.id) {
                        return action.payload;
                    }

                    return user;
                });
            })
            .addCase(deleteUsers.fulfilled, (state, action) => {
                state.users = state.users.filter(user => user.id !== action.payload.id);
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.currentUser = action.payload;
            });
    },
});

export const {} = userSlice.actions;

export default userSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.user.currentUser;
