import { FC } from "react";
import './NotesList.css';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../../store/store.ts'
import Note from "../Note/Note.tsx";
import NoteItem from "../NoteItem/NoteItem.tsx";

const NotesList: FC = () => {
  const { notes} = useSelector((state:RootState) => state.notes);
  const dispatch = useDispatch();

  return (
    <div className="NotesList">
      {
        notes.map((note) => (
          <div key={note.id}> 
          <NoteItem note= {note}/>
          </div>
        ))
      }
    </div>
  );
};

export default NotesList;