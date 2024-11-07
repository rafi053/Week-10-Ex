import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import { get } from "mongoose";

interface NotesState {
    notes: {
    id: number;
    title: string;
    content: string;
    category: 'work' | 'personal' | 'shopping';
    createdAt: string;
    }[];
    activeCategory: 'all' | 'work' | 'personal' | 'shopping';
    }
      


const initialState: NotesState = {
    notes:[],
    activeCategory: 'all',
}



export const notesState = createSlice({
    initialState,
    name: "notesState",
    reducers: {
        addNote: (state, action: PayloadAction<NotesState>) => {
            
        },
        deleteNote: (state, action: PayloadAction<number>) => {

        },

        updateNote: (state, action: PayloadAction<NotesState>) => {

        },

        
        
    }
})
export const { addNote, deleteNote, updateNote } = notesState.actions
export default notesState.reducer