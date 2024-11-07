import { FC, useState } from "react";
import style from "./CounterPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {decrement,increment,setCounter} from "../../store/features/counter/counterSlice"

const CounterPage: FC = () => {
  const [input, setinput] = useState<number>(0);
    const {counter} = useSelector((state:RootState)=> state.counter);
    const dispatch = useDispatch()

    const handleSetCounter = () => {
        dispatch(setCounter({counter:input}))
    }
    const handleResetCounter = () => {
        dispatch(setCounter({counter:0}))
        
    }  
  return (
    <main className={`page ${style.CounterPage}`}>
      <div className={style.counter}>
        <h3>{counter}</h3>
        <button onClick={handleResetCounter}>Reset</button>
        <input type="number" value={input} onChange={(e:any)=>setinput(e.target.value)} />
        <button onClick={handleSetCounter}>Set Counter</button>
        <div className="actions-container">
          <button onClick={()=>dispatch(decrement())}>-</button>
          <button onClick={()=>dispatch(increment())}>+</button>
        </div>
      </div>
    </main>
  );
};

export default CounterPage;
