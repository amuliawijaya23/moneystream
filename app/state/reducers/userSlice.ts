'use client';

import { createSlice } from '@reduxjs/toolkit';

export interface userState {
  name: string
};

const initialState: userState = {
  name: ''
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.name = action.payload.name;
    },
    logout: (state) => {
      state = initialState
    }
  }
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;