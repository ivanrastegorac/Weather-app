import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import RootState from './types';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
export type { RootState };
