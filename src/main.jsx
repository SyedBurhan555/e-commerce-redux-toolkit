import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
// import './index.css'

let persist = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      {/* <PersistGate loading={"loading"} persistor={persist}> */}
      <App />
      {/* </PersistGate> */}
    </Provider>
  </BrowserRouter>
);
