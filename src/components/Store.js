import { configureStore } from "@reduxjs/toolkit";
import counterreducer from "./features/counters/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterreducer,
  },
});
