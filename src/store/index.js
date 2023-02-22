import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CartSlice from "../slices/CartSlice.jsx";
import productSlice from "../slices/productSlice.jsx";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

// const reducers = combineReducers({
//     cart:CartSlice,
//     product:productSlice
// })

// const persistConfig = {
//     key:'root',
//     storage,
// }

// const persistReducers = persistReducer(persistConfig,reducers);

// const store = configureStore({
//     reducer:persistReducers

//     // preloadedState:loadFromLocalStorage()
// })


const store = configureStore({
    reducer:{
        cart:CartSlice,
        product:productSlice
    },
    preloadedState:loadFromLocalStorage()
    
})

  store.subscribe(()=>saveToLocalStorage(store.getState()));
export default store;


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