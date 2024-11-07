import { FC, useState } from 'react';
import { RootState } from '../../store/store.ts'
import { useDispatch, useSelector } from 'react-redux'
import { markTaskCompleted } from '../../store/features/todo/todoSlice.ts'

const TodoPage:FC = () => {
  
  const { tasks} = useSelector((state:RootState) => state.todo);
  const dispatch = useDispatch();


  return (
    <div>
      <h1>Todo Page</h1>
      
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input type="checkbox" checked={task.completed} onChange={() => dispatch(markTaskCompleted(task.id))}/> 
            <span>{task.text}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoPage
