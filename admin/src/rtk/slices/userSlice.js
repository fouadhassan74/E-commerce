import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    currentUser: null,
    users: [],
    isFitching: false,
    error: false,
  },
  reducers: {
    // Login
    loginStart: (state) => {
      state.isFitching = true;
    },
    loginSucess: (state, action) => {
      state.currentUser = action.payload;
    },
    loginFailed: (state) => {
      state.error = true;
    },
    // Logout
    logoutStart: (state) => {
      state.isFitching = true;
    },
    logoutSucess: (state, action) => {
      state.currentUser = null;
    },
    logoutFailed: (state) => {
      state.error = true;
    },
    // Get All
    getAllUserStarted: (state) => {
      state.isFitching = true;
    },
    getAllUserSuccess: (state, action) => {
      state.users = action.payload;
    },
    getAllUsersFailed: (state) => {
      state.error = true;
    },
    //  Delete
    deleteUserStarted: (state) => {
      state.isFitching = true;
    },
    deleteUserSuccess: (state, action) => {
      state.users.splice(
        state.users.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteUserFailed: (state) => {
      state.error = true;
    },
  },
});
export const {
  loginStart,
  loginSucess,
  loginFailed,
  getAllUserStarted,
  getAllUserSuccess,
  getAllUsersFailed,
  deleteUserStarted,
  deleteUserSuccess,
  deleteUserFailed,
} = userSlice.actions;
export default userSlice.reducer;
