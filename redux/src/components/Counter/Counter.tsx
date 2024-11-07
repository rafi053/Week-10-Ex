import "./Counter.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import {
  increment,
  decrement,
} from "../../store/features/counter/counterSlice";

import colorActions from "../../store/features/color";
import { ChangeEvent, useState } from "react";

const Counter = () => {
  const [inputText, setInputText] = useState<string>("");
  const counter = useSelector((state: RootState) => state.counter.counter);
  const { color, borderColor } = useSelector((state: RootState) => state.color);

  const dispatch = useDispatch();

  const handleChangeColor = ():void => {
        dispatch(colorActions.setColor({color:inputText}))
  };
  const handleChangeColorBorder = ():void => {
        dispatch(colorActions.setBorderColor({borderColor:inputText}))
  };

  return (
    <section
      style={{ color: color, border: `2px ${borderColor} solid` }}
      className="Counter"
    >
      <h3>Counter</h3>
      <h4>{counter}</h4>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
        <input
          type="text"
          value={inputText}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInputText(e.target.value)
          }
        />
        <button onClick={handleChangeColor}>changeColor</button>
        <button onClick={handleChangeColorBorder}>changeBorderColor</button>
        <button onClick={() => dispatch(colorActions.setNoborder())}>
          cancel border
        </button>
      </div>
    </section>
  );
};

export default Counter;
