import { configureStore } from '@reduxjs/toolkit';
import userReducer from './UserSlice';
import movieReducer from './MovieSlice';

export const appStore = configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
    },
});

export default appStore;