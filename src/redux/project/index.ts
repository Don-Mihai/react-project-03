import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { PProject, PROJECT_STATUS, Project, ProjectDto, ProjectState } from './types';
import { BASE_URL } from '../../utils';
import { UserDto } from '../user/types';
import { UserProfileDto } from '../userProfile/types';
import { RootState } from '../store';

// Дефолтные значения
const initialState: ProjectState = {
    projects: [],
};

export const fetch = createAsyncThunk('project/fetch', async () => {
    const data: ProjectDto[] = (await axios.get(BASE_URL + '/project/all')).data;
    const users: UserDto[] = (await axios.get(BASE_URL + '/user/all')).data;
    const userProfiles: UserProfileDto[] = (await axios.get(BASE_URL + '/user-profile/all')).data;

    const projectData: Project[] = data.map(project => {
        const user = users.find(user => user.id === project.employerId);
        const userProfile = userProfiles.find(userProfile => userProfile.userId === user?.id);

        let canTakeProject = true;
        if (project.status === PROJECT_STATUS.ARCHIVED) {
            canTakeProject = false;
        }

        return { user, userProfile, canTakeProject, ...project };
    });

    return projectData;
});

export const create = createAsyncThunk('project/create', async (object: PProject) => {
    const data = await axios.post(BASE_URL + '/project/create', object);
    return data.data;
});

export const edit = createAsyncThunk('project/edit', async (object: Project) => {
    const data = await axios.put(BASE_URL + '/projects' + '/' + object.id, object);
    return data.data;
});

export const remove = createAsyncThunk('project/delete', async (userId: number) => {
    const data = await axios.delete(BASE_URL + '/projects' + '/' + userId);
    return data.data;
});

export const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetch.fulfilled, (state, action) => {
                state.projects = action.payload;
            })
            .addCase(fetch.rejected, (state, action) => {
                state.projects = [];
                console.error('Ошибка при получении всех проектов');
            })
            .addCase(edit.fulfilled, (state, action) => {
                state.projects = state.projects.map(user => {
                    if (user.id === action.payload.id) {
                        return action.payload;
                    }

                    return user;
                });
            })
            .addCase(remove.fulfilled, (state, action) => {
                state.projects = state.projects.filter(user => user.id !== action.payload.id);
            })
            .addCase(create.fulfilled, (state, action) => {
                state.projects.push(action.payload);
            });
    },
});

export const {} = projectSlice.actions;

export default projectSlice.reducer;

export const selectProject = (state: RootState) => state.project.projects;
