import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../slices/CartSlice.jsx";
import ProductSlice from "../slices/productSlice.jsx";

const store = configureStore({
    reducer:{
        product:ProductSlice,
        cart:CartSlice,
    }
})


export default store;