import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ColorStateType {
  color: string;
  borderColor: string;
}

const initialState: ColorStateType = {
  color: "black",
  borderColor: "red",
};

export const colorSlice = createSlice({
  initialState,
  name: "color",
  reducers: {
    setColor: (state, action: PayloadAction<{ color: string }>) => {
      state.color = action.payload.color;
    },
    setBorderColor: (state, action: PayloadAction<{ borderColor: string }>) => {
      state.borderColor = action.payload.borderColor;
    },
    setNoborder: (state) => {
      state.borderColor = "#00000000";
    },
  },
});

export const {setColor,setBorderColor,setNoborder} = colorSlice.actions
export default colorSlice.reducer
