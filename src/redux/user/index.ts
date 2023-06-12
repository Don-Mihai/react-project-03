import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { PAuth, PRegister, User, UserState } from './types';
import { BASE_URL } from '../../utils';

// Дефолтные значения
const initialState: UserState = {
    users: [],
    currentUser: {} as User,
};

export const fetchUsers = createAsyncThunk('user/fetch', async () => {
    const data = await axios.get(BASE_URL + '/users');
    return data.data;
});

export const authUsers = createAsyncThunk('user/auth', async (object: PAuth): Promise<User> => {
    const response = await axios.get(BASE_URL + '/users');

    const user: User = response.data.filter((user: User) => {
        if (user.login === object.login && user.password === object.password) {
            return true;
        } else return false;
    })[0];

    if (user?.id) {
        localStorage.setItem('userId', String(user.id));
    }

    return user;
});

export const registerUser = createAsyncThunk('user/register', async (object: PRegister) => {
    const data = await axios.post(BASE_URL + '/users', object);
    return data.data;
});

export const editUsers = createAsyncThunk('user/edit', async (object: User) => {
    const data = await axios.put(BASE_URL + '/users' + '/' + object.id, object);
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
            });
    },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
