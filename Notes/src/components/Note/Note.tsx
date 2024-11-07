import { FC } from "react";
import './Note.css';
import useForm from '../../hooks/useForm';
import { RootState } from '../../store/store.ts'

import { useDispatch, useSelector } from "react-redux";

const { notes} = useSelector((state:RootState) => state.notes);
  const dispatch = useDispatch();

interface FormState {
  [key: string]: string;
}


const Note: FC = () => {
  const initialValues: FormState = {
    title: '',
    content: '',
    category: '',
  };

  const onSubmit = (values: FormState) => {
    
  };
  const { values, handleChange, handleSubmit } = useForm({
    initialValues,
    onSubmit,
  });
  
  return (
    <div className="Note">
      <h1>Create new Note</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title:
          <input
            id="title"
            type="text"
            name="title"
            value={values.title}
            onChange={handleChange}
            placeholder="Enter your title"
          />
        </label>
        <label htmlFor="content">
          Content:
          <input
            id="content"
            name="content"
            value={values.content}
            onChange={handleChange}
            placeholder="Enter your content"
          />
        </label>
        <label htmlFor="category">
          Category:
          <select
            id="category"
            name="category"
          >
            <option value="">Select a category</option>
            <option value="work">Work</option>
            <option value="personal">Personal</option>
            <option value="shopping">Shopping</option>
          </select>

        </label>
        <button type="submit">Create</button>
      </form>

      
    </div>
  );
};

export default Note;