import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../utils';
import { PUserGoogleProfile, PUserProfile, UserProfile, UserProfileState } from './types';

// Дефолтные значения
const initialState: UserProfileState = {
    userProfiles: [],
};

export const fetch = createAsyncThunk('user-profile/fetch', async () => {
    const data = await axios.get(BASE_URL + '/user-profiles');
    return data.data;
});

export const create = createAsyncThunk('user-profile/register', async (object: PUserProfile) => {
    const data = await axios.post(BASE_URL + '/user-profiles', object);
    return data.data;
});

export const edit = createAsyncThunk('user-profile/edit', async (object: UserProfile) => {
    const data = await axios.put(BASE_URL + '/user-profiles' + '/' + object.id, object);
    return data.data;
});

export const remove = createAsyncThunk('user-profile/delete', async (userId: number) => {
    const data = await axios.delete(BASE_URL + '/user-profiles' + '/' + userId);
    return data.data;
});

export const authProfileByGoogle = createAsyncThunk('user-profile/oauth', async (userProfileData: PUserGoogleProfile) => {
    const data = await axios.post(BASE_URL + '/user-profile/oauth', userProfileData);
    return data.data;
});

export const userProfileSlice = createSlice({
    name: 'userProfile',
    initialState,
    reducers: {
        // функции обработчики (микротаски)
    },
    extraReducers(builder) {
        builder
            .addCase(fetch.fulfilled, (state, action) => {
                state.userProfiles = action.payload;
            })
            .addCase(edit.fulfilled, (state, action) => {
                state.userProfiles = state.userProfiles.map(user => {
                    if (user.id === action.payload.id) {
                        return action.payload;
                    }

                    return user;
                });
            })
            .addCase(remove.fulfilled, (state, action) => {
                state.userProfiles = state.userProfiles.filter(user => user.id !== action.payload.id);
            });
    },
});

export const {} = userProfileSlice.actions;

export default userProfileSlice.reducer;
