import { configureStore } from '@reduxjs/toolkit';
import roleReducer from './rolereducer';
import floorReducer from './floorreducer';

export const store = configureStore({
    reducer: {
    role: roleReducer,
    floorAccess: floorReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;