"use client"
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  user: {},
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
      // Check if localStorage is available before using it
      if (typeof window !== 'undefined') {
        localStorage.setItem('user', JSON.stringify(action.payload));
      }
    },
    logout: (state) => {
      state.loading = false;
      state.user = {};
      state.error = null;
      // Check if localStorage is available before using it
      if (typeof window !== 'undefined') {
        localStorage.removeItem('user');
      }
    },
  },
});

export const { loginSuccess, logout } = userSlice.actions;

export default userSlice.reducer;
