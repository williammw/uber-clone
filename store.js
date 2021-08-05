import {configureStore} from "@reduxjs/toolkit";
import navReducer from "./slices/navSlice"

// nav store react-native navigation

export const store = configureStore({
  reducer:{
    nav : navReducer,
  },
})