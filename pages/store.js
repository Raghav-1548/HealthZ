import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./components/slices/navSlice";

export const store = configureStore({
    reducer:{
        nav: navReducer,
    }
})