import { FC } from "react";
import './NoteItem.css';

const NoteItem: FC<any> = ({note}) => {
  return (
    <div className="NoteItem">
      <h4>{note.title}</h4>
      <h4>{note.content}</h4>
      <h4>{note.category}</h4>
      <h4>{note.createdAt}</h4>

      
    </div>
  );
};

export default NoteItem;