import axios from "axios";
import { loginFail, loginStart, loginSucess } from "./slices/userSlice";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:9900/api/auth/login", user);
    const data = dispatch(loginSucess(res.data));
    console.log(data);
  } catch (e) {
    dispatch(loginFail());
  }
};
