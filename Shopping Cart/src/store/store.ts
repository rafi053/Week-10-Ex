import { configureStore } from "@reduxjs/toolkit";
import shoppingCartSliceReducer from "./features/shoppingCart/ShoppingCartSlice";

export const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartSliceReducer,
    

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
