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
  },
});

export const { addtoCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
