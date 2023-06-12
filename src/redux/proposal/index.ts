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
    const data: ProposalDto[] = (await axios.get(BASE_URL + '/proposals')).data;
    const users: UserDto[] = (await axios.get(BASE_URL + '/users')).data;
    const userProfiles: UserProfileDto[] = (await axios.get(BASE_URL + '/users-profile')).data;

    const procData: Proposal[] = data.map(proposal => {
        const user = users.find(user => user.id === proposal.userId);
        const userProfile = userProfiles.find(userProfile => userProfile.userId === user?.id);

        return { ...proposal, user, userProfile };
    });

    return procData;
});

export const fetchById = createAsyncThunk('proposal/fetchById', async (proposalId: number) => {
    const proposal = (await axios.get(BASE_URL + '/proposals' + '/' + proposalId)).data;

    const user: UserDto = (await axios.get(BASE_URL + '/users' + '/' + proposal.data.userId)).data;

    const userProfile: UserProfileDto[] = (await axios.get(BASE_URL + '/users' + '/' + proposal.data.userProfiles.userId)).data;

    const data = [...proposal, ...user, ...userProfile];

    return data;
});

export const create = createAsyncThunk('proposal/register', async (object: PProposal) => {
    const data = await axios.post(BASE_URL + '/proposals', object);
    return data.data;
});

export const edit = createAsyncThunk('proposal/edit', async (object: Proposal) => {
    const data = await axios.put(BASE_URL + '/proposals' + '/' + object.id, object);
    return data.data;
});

export const remove = createAsyncThunk('proposal/delete', async (userId: number) => {
    const data = await axios.delete(BASE_URL + '/proposals' + '/' + userId);
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
