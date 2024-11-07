import { configureStore } from "@reduxjs/toolkit";
import notesSliceReducer from "./features/notes/notesSlice";

export const store = configureStore({
  reducer: {
    notes: notesSliceReducer,
    

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
