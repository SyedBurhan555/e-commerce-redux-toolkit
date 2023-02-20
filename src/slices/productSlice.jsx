import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import url from '../API'

export const Status = Object.freeze({
  loading: "loading",
  idle: "idle",
  error: "error",
});

const ProductSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    status: Status.idle,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state, action) => {
        state.status = Status.loading;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = Status.idle;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = Status.error;
      });
  },
});

export default ProductSlice.reducer;

export const fetchData = createAsyncThunk("product/fetch", async () => {
  const res = await fetch("https://dummyjson.com/products");
  const json = await res.json();
  const products = await json.products;
  return products;
});
