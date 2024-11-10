import { configureStore } from '@reduxjs/toolkit';
import floorAccessReducer from './Floorreducer'; // Import the items reducer
import rolesReducer from './Rolereducer'
const store = configureStore({
  reducer: {
    floorAccess: floorAccessReducer, // Combining reducers if necessary
    role: rolesReducer
  },
});

export default store;
