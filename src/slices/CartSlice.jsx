import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
  },
  reducers: {
    addtoCart: (state, action) => {
      const {
        id,
        title,
        price,
        quantity,
        image,
        brand,
        description,
        category,
        stock,
      } = action.payload;
      const existingItem = state.data.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.data.push({
          id,
          brand,
          description,
          price,
          quantity,
          image,
          title,
          category,
          stock,
        });
      }
    },
    removeItem(state, action) {
      const filterVal = state.data.filter((item) => item.id !== action.payload);
      return {
        ...state,
        data: filterVal,
      };
    },
    addProduct(state, action) {
      const addProduct = state.data.map((item) => {
        if (item.id === action.payload) {
          let increase = item.quantity + 1;
          if (increase >= item.stock) {
            increase = item.stock;
          }
          return {
            ...item,
            quantity: increase,
          };
        } else {
          return item;
        }
      });
      return {
        ...state,
        data: addProduct,
      };
    },
    decProduct(state, action) {
      const decrProduct = state.data.map((item) => {
        if (item.id === action.payload) {
          let decrease = item.quantity - 1;
          if (decrease <= 1) {
            decrease = 1;
          }
          return {
            ...item,
            quantity: decrease,
          };
        } else {
          return item;
        }
      });
      return {
        ...state,
        data: decrProduct,
      };
    },
  },
});

export const { addtoCart, removeItem, addProduct, decProduct } =
  cartSlice.actions;
export default cartSlice.reducer;
