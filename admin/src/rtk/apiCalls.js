import {
  deleteFailed,
  deleteStarted,
  deleteSuccess,
  deleteUserFailed,
  deleteUserStarted,
  deleteUserSuccess,
  getAllUserStarted,
  getAllUserSuccess,
  getAllUsersFailed,
  loginFailed,
  loginStart,
  loginSucess,
} from "./slices/userSlice";
import { userRequest } from "../requestMethods";
import {
  addProductFailed,
  addProductStarted,
  addProductSuccess,
  deleteProductFalied,
  deleteProductStarted,
  deleteProductSuccess,
  getProductFalied,
  getProductStarted,
  getProductSuccess,
  updateProductFailed,
  updateProductStarted,
  updateProductSuccess,
} from "./slices/productSlice";
// Login
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await userRequest.post("/auth/login", user);
    const data = dispatch(loginSucess(res.data));
  } catch (e) {
    dispatch(loginFailed());
  }
};
//  Delete User
export const deleteUser = async (dispatch, id) => {
  dispatch(deleteUserStarted());
  try {
    // const res = await userRequest.delete(`/product/${id}`);
    dispatch(deleteUserSuccess(id));
  } catch {
    dispatch(deleteUserFailed());
  }
};
// Get ALL USERS
export const getAllUsers = async (dispatch) => {
  dispatch(getAllUserStarted());
  try {
    const res = await userRequest.get("/user");
    const data = dispatch(getAllUserSuccess(res.data));
  } catch {
    dispatch(getAllUsersFailed());
  }
};

// Get Products
export const getProduct = async (dispatch) => {
  dispatch(getProductStarted());
  try {
    const res = await userRequest.get("/product");
    const data = dispatch(getProductSuccess(res.data));
  } catch (e) {
    dispatch();
    dispatch(getProductFalied());
  }
};
// Delete Products
export const deleteProduct = async (dispatch, id) => {
  dispatch(deleteProductStarted());
  try {
    // const res = await userRequest.delete(`/product/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch {
    dispatch(deleteProductFalied());
  }
};
// Update Products
export const updateProduct = async (dispatch, product) => {
  dispatch(updateProductStarted());
  try {
    const res = await userRequest.put(`/product/${product._id}`);
    const data = dispatch(updateProductSuccess(res.data));
  } catch {
    dispatch(updateProductFailed());
  }
};
// Add Products
export const addProduct = async (dispatch, product) => {
  dispatch(addProductStarted());
  try {
    const res = await userRequest.post(`/product`, product);
    const data = dispatch(addProductSuccess(res.data));
  } catch {
    dispatch(addProductFailed());
  }
};
