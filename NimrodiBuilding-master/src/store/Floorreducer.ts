import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface floorInterface {
    floorAccess: [boolean,boolean,boolean,boolean,boolean];
  }
const FloorInitialState: floorInterface = {
  floorAccess: [false,false,false,false,false],
};


const floorAccessSlice = createSlice({
  name: 'floorAccess',
  initialState:FloorInitialState,
  reducers: {
    grantAccess(state, action: PayloadAction<number>) {
      state.floorAccess[action.payload] = true;
    },
    removeAccess(state, action: PayloadAction<number>) {
        state.floorAccess[action.payload] = false;
    },
    changeAccess(state,action: PayloadAction<number>)
    {
        state.floorAccess[action.payload] = !state.floorAccess[action.payload];
    }
  },
});



export const { grantAccess, removeAccess,changeAccess } = floorAccessSlice.actions; 

export default floorAccessSlice.reducer; 
