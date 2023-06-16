import { configureStore } from '@reduxjs/toolkit';
import proposal from './proposal';
import user from './user';
import userProfile from './userProfile';
import project from './project';
import order from './order';

export const store = configureStore({
    reducer: {
        proposal,
        user,
        userProfile,
        project,
        order,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
