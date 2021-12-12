import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter/counterSlice";

export const rootReducer = combineReducers({
  counter: counterReducer,
});
