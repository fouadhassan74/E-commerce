import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "productSlice",
  initialState: {
    products: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //   Get All
    getProductStarted: (state) => {
      state.isFetching = true;
    },
    getProductSuccess: (state, action) => {
      state.products = action.payload;
    },
    getProductFalied: (state) => {
      state.error = true;
    },
    // Delete
    deleteProductStarted: (state) => {
      state.isFetching = true;
    },
    deleteProductSuccess: (state, action) => {
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteProductFalied: (state) => {
      state.error = true;
    },
    // Update
    updateProductStarted: (state) => {
      state.isFetching = true;
    },
    updateProductSuccess: (state, action) => {
      state.products[
        state.products.findIndex((item) => item._id === action.payload._id)
      ] = action.payload.product;
    },
    updateProductFailed: (state) => {
      state.error = true;
    },
    // Add
    addProductStarted: (state) => {
      state.isFetching = true;
    },
    addProductSuccess: (state, action) => {
      state.isFetching = true;
      state.products.push(action.payload);
    },
    addProductFailed: (state) => {
      state.error = true;
    },
  },
});
export const {
  getProductStarted,
  getProductSuccess,
  getProductFalied,
  deleteProductStarted,
  deleteProductSuccess,
  deleteProductFalied,
  addProductFailed,
  addProductSuccess,
  addProductStarted,
  updateProductStarted,
  updateProductSuccess,
  updateProductFailed,
} = productSlice.actions;
export default productSlice.reducer;
