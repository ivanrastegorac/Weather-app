import { createSlice } from '@reduxjs/toolkit';

export interface AuthState {
  isAuthenticated: boolean;
  user: { email: string } | null;
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: null as { email: string } | null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logoutSucces: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { loginSuccess, logoutSucces } = authSlice.actions;
export default authSlice.reducer;
