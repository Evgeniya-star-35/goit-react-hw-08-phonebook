// import {reselect} from '@reduxjs/toolkit'
export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getUserName = state => state.auth.user.name;
