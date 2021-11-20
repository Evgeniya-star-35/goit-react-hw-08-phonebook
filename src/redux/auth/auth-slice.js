import { createSlice } from '@reduxjs/toolkit';
// import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggerIn: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducer: {},
});
export default authSlice.reducer;
