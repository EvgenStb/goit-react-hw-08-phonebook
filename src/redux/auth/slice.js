import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {register, login, logout, refreshUser} from '../auth/operations'


const handlePending = state => {
    state.isLoading = true;
    state.error = null;
};
const handleFulfilled = (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;
}

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
}


const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
    error: '',
  },
  extraReducers: builder =>{
    builder
      .addCase(register.fulfilled, handleFulfilled)
      .addCase(login.fulfilled, handleFulfilled)
      .addCase(logout.fulfilled,(state, action) => {
        state.isLoading = false;
        state.error = '';
        state.user = { name: null, email: null };
        state.token = null;
        state.error = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isLoading = true;
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isLoading = true;
        state.error = action.payload;
        state.isRefreshing = false;
      })
      .addMatcher(
        isAnyOf(register.pending, login.pending, logout.pending), handlePending
      )
      .addMatcher(
        isAnyOf(register.rejected, login.rejected, logout.rejected), handleRejected
      )},
});

export default authSlice.reducer;
