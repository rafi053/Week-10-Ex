import {createSlice, PayloadAction} from "@reduxjs/toolkit"

interface TodoState {
    tasks: {
    id: number;
    text: string;
    completed: boolean;
    }[];
}  

const initialState: TodoState = {
    tasks: [
        { id: 1, text: "Learn React", completed: true },
        { id: 2, text: "Learn Redux", completed: false },
        { id: 3, text: "Learn TypeScript", completed: false },
    ],
}

export const todoSlice = createSlice({
    initialState,
    name: "todo",
    reducers: {
        markTaskCompleted: (state, action: PayloadAction<number>) => {
            const task = state.tasks.find((task) => task.id === action.payload);
            if (task) {
                task.completed = !task.completed;
            }
        }
        
    }
})
export const { markTaskCompleted} = todoSlice.actions
export default todoSlice.reducer