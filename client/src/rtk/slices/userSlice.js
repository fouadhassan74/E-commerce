import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    currenUser: null,
    isFitching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFitching = true;
    },
    loginSucess: (state, action) => {
      state.currenUser = action.payload;
    },
    loginFail: (state) => {
      state.error = true;
    },
  },
});
export const { loginStart, loginSucess, loginFail } = userSlice.actions;
export default userSlice.reducer;
