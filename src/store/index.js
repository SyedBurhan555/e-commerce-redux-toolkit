import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../slices/CartSlice.jsx";
import ProductSlice from "../slices/productSlice.jsx";

const store = configureStore({
    reducer:{
        product:ProductSlice,
        cart:CartSlice,
    },
    preloadedState:loadFromLocalStorage()
})


function saveToLocalStorage(state){
    try{
      const serialState = JSON.stringify(state)
      localStorage.setItem("reduxStore",serialState)
    }catch(e){
      console.warn(e);
    }
  }
  
  function loadFromLocalStorage(){
    try{
      const serialisedState = localStorage.getItem("reduxStore");
      if(serialisedState === null) return undefined;
      return JSON.parse(serialisedState);
    }catch(e){
      console.warn(e);
      return undefined;
    }
  }

  store.subscribe(()=>saveToLocalStorage(store.getState()));

export default store;