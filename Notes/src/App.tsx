import { FC } from 'react'
import Login from './components/Login/Login'
import NotesList from './components/NotesList/NotesList'
import Note from './components/Note/Note'
const App:FC = () => {
  return (
    <div>
      {/* <Login /> */}
      <NotesList />
      <Note/>
    </div>
  )
}

export default App