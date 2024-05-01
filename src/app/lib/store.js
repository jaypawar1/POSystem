// app/redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    // Add other reducers here if needed
  },
});

export default store;
