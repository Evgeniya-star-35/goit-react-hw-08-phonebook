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
    [registration.fulfilled]: (state, { payload }) => ({
      ...state,
      user: payload.user,
      token: payload.token,
      isLoggerIn: true,
    }),
    [login.fulfilled]: (state, { payload }) => ({
      ...state,
      user: payload.user,
      token: payload.token,
      isLoggerIn: true,
    }),
    [logOut.fulfilled]: state => ({
      ...state,
      user: { name: null, email: null },
      token: null,
      isLoggerIn: false,
    }),
    [getCurrentUser.pending]: state => ({
      ...state,
      isFetchingCurrentUser: true,
    }),
    [getCurrentUser.fulfilled]: (state, { payload }) => ({
      ...state,
      user: payload,
      isLoggedIn: true,
      isLoggedIn: false,
    }),

    [getCurrentUser.rejected]: state => ({
      ...state,
      isFetchingCurrentUser: false,
    }),
  },
});
export default authSlice.reducer;
