import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import roles from '../data/roles.json';

interface RoleState {
    role: string;
}

const initialState: RoleState = {
    role: roles[0],
};

const roleSlice = createSlice({
  name: 'role',
  initialState,
  reducers: {
    setRole(state, action: PayloadAction<number>) {
      const newRole = action.payload;
        state.role = roles[newRole];
    },
  },
});

export const { setRole } = roleSlice.actions;
export default roleSlice.reducer;