import React from 'react';
import App from "./components/App.jsx";
import { createRoot } from "react-dom/client";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "../src/state/index.js";
import { Provider } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "../src/state/api.js";


const store = configureStore({
  reducer: {
    global: globalReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefault) => getDefault().concat(api.middleware),
});

setupListeners(store.dispatch);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);





