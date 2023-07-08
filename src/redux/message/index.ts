import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../utils';
import { PMessage, Message, MessageState } from './types';

// Дефолтные значения
const initialState: MessageState = {
    messages: [],
};

export const fetch = createAsyncThunk('message/fetch', async () => {
    const data = await axios.get(BASE_URL + '/message/all');
    return data.data;
});

export const create = createAsyncThunk('message/create', async (object: PMessage) => {
    const data = await axios.post(BASE_URL + '/message/create', object);
    return data.data;
});

export const edit = createAsyncThunk('message/edit', async (object: Message) => {
    const data = await axios.post(BASE_URL + '/message/edit', object);
    return data.data;
});

export const remove = createAsyncThunk('message/delete', async (id: number) => {
    const data = await axios.post(`${BASE_URL}/message/delete`, { data: { id } });
    return data.data;
});

export const MessageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        // функции обработчики (микротаски)
    },
    extraReducers(builder) {
        builder
            .addCase(fetch.fulfilled, (state, action) => {
                state.messages = action.payload;
            })
            .addCase(edit.fulfilled, (state, action) => {
                state.messages = state.messages.map(message => {
                    if (message.id === action.payload.id) {
                        return action.payload;
                    }

                    return message;
                });
            })
            .addCase(remove.fulfilled, (state, action) => {
                state.messages = state.messages.filter(message => message.id !== action.payload.id);
            });
    },
});

export const {} = MessageSlice.actions;

export default MessageSlice.reducer;
