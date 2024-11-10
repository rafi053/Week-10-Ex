import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import rolesData from '../data/roles.json'
const Role:string[] = rolesData
const roleInitialState :string =Role[0]
console.log(Role)
const roleSlice = createSlice({
    name: 'role',
    initialState: roleInitialState,
    reducers: {
      setRole(_,action: PayloadAction<number>)
      {
         return Role[action.payload]
      }
    },
  });
  export const { setRole } = roleSlice.actions;
  export default roleSlice.reducer; 