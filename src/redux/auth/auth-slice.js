import { createSlice } from '@reduxjs/toolkit';
import { registration, logOut, login, getCurrentUser } from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggerIn: false,
  isGetCurrentUser: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducer: {
    [registration.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [getCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [getCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isLoggedIn = false;
    },

    [getCurrentUser.rejected](state) {
      state.isFetchingCurrentUser = false;
    },
  },
});
export default authSlice.reducer;
