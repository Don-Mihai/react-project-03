import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { PProposal, Proposal, ProposalDto, ProposalState } from './types';
import { BASE_URL } from '../../utils';
import { User, UserDto } from '../user/types';
import { UserProfile, UserProfileDto } from '../userProfile/types';

// Дефолтные значения
const initialState: ProposalState = {
    proposals: [],
};

export const fetch = createAsyncThunk('proposal/fetch', async () => {
    const data: ProposalDto[] = (await axios.get(BASE_URL + '/proposal/all')).data;
    const users: UserDto[] = (await axios.get(BASE_URL + '/user/all')).data;
    const userProfiles: UserProfileDto[] = (await axios.get(BASE_URL + '/user-profile/all')).data;

    const procData: Proposal[] = data.map(proposal => {
        const user = users.find(user => user.id === proposal.userId);
        const userProfile = userProfiles.find(userProfile => userProfile.userId === user?.id);

        return { ...proposal, user, userProfile };
    });

    return procData;
});

export const fetchById = createAsyncThunk('proposal/fetchById', async (proposalId: number) => {
    const proposal = (await axios.get(BASE_URL + '/proposal' + '/' + proposalId)).data;

    const user: UserDto = (await axios.get(BASE_URL + '/user' + '/' + proposal.userId)).data;

    const userProfile: UserProfileDto[] = (await axios.get(`${BASE_URL}/user-profile?userId=${user.id}`)).data;

    const data = { ...user, ...userProfile, ...proposal };

    return data;
});

export const create = createAsyncThunk('proposal/register', async (object: PProposal) => {
    const data = await axios.post(BASE_URL + '/proposal', object);
    return data.data;
});

export const edit = createAsyncThunk('proposal/edit', async (object: Proposal) => {
    const data = await axios.put(BASE_URL + '/proposal' + '/' + object.id, object);
    return data.data;
});

export const remove = createAsyncThunk('proposal/delete', async (userId: number) => {
    const data = await axios.delete(BASE_URL + '/proposal' + '/' + userId);
    return data.data;
});

export const proposalSlice = createSlice({
    name: 'proposal',
    initialState,
    reducers: {
        // функции обработчики (микротаски)
    },
    extraReducers(builder) {
        builder
            .addCase(fetch.fulfilled, (state, action) => {
                state.proposals = action.payload;
            })
            .addCase(edit.fulfilled, (state, action) => {
                state.proposals = state.proposals.map(user => {
                    if (user.id === action.payload.id) {
                        return action.payload;
                    }

                    return user;
                });
            })
            .addCase(remove.fulfilled, (state, action) => {
                state.proposals = state.proposals.filter(user => user.id !== action.payload.id);
            });
    },
});

export const {} = proposalSlice.actions;

export default proposalSlice.reducer;
