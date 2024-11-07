import { FC } from "react"
import UnitList from "./components/UnitList/UnitList"
import MissionCompleted from "./components/MissionCompleted/MissionCompleted"

const App:FC = () => {
  return (
    <div>
      <UnitList />
      <MissionCompleted/>
    </div>
  )
}

export default App
