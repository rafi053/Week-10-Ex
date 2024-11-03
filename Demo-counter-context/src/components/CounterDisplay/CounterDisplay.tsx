import { FC } from "react";
import "./CounterDisplay.css";
import { useGlobalCounter } from "../../context/CounterContext";
import GenericButton from "../shared/GenericButton/GenericButton";
import { ButtonType } from "../../types/enums";
const CounterDisplay: FC = () => {
  const {clearCounter,counter,counterColor} = useGlobalCounter();

  return (
    <div className="CounterDisplay">
      <h2>MY COUNTER</h2>
      <h3 style={{color:counterColor}}>{counter}</h3>
      <GenericButton btnStyle={ButtonType.styled} btnText="RESET" onClickBtn={clearCounter}/>
    </div>
  );
};

export default CounterDisplay;
