import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FloorState {
  floorAccess: boolean[];
}

const initialState: FloorState = {
  floorAccess: [false, false, false, false, false],
};

const floorSlice = createSlice({
  initialState,
  name: "floor",
  reducers: {
    changeAccess(state, action: PayloadAction<number>) {
      const floorId = action.payload;
      const floor = state.floorAccess[floorId];
      state.floorAccess[floorId] = !floor;
    },
  },
});

export const { changeAccess } = floorSlice.actions;
export default floorSlice.reducer;
