import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import { Note } from "../../../tyeps/tyeps";

interface NotesState {
    notes: {
    id: number;
    title: string;
    content: string;
    category: 'work' | 'personal' | 'shopping' | null;
    createdAt: string;
    }[];

    }
      


const initialState: NotesState = {
    notes:[{id:1,title:'v',content:'ff',category:'work', createdAt:"a"}],
}



export const notesState = createSlice({
    initialState,
    name: "notesState",
    reducers: {
        addNote: (state, action: PayloadAction<{note:any}>) => {
            let newNote ={
                ...action.payload.note,
                createdAt:Date.now()
            }
            state.notes.push(newNote)
            
        },
        deleteNote: (state, action: PayloadAction<{id:number}>) => {
            const note = state.notes.find((note) => note.id === action.payload.id);
            if (note) {
                const index = state.notes.indexOf(note);
                state.notes.splice(index)
            }
        },

        updateNote: (state, action: PayloadAction<{id:number, note:any}>) => {
            // const note = state.notes.find((note) => note.id === action.payload.id);
            // const a = [...notes, action.payload.note]

        },

        
        
    }
})
export const { addNote, deleteNote, updateNote } = notesState.actions
export default notesState.reducer