import { FC } from "react";
import "./CounterActions.css"
import GenericButton from "../shared/GenericButton/GenericButton";
import { ButtonType } from "../../types/enums";
import { useGlobalCounter } from "../../context/CounterContext";

const CounterActions: FC = () => {
  const { increaseCounter, decreaseCounter } = useGlobalCounter();
  return (
    <div className="CounterActions">
      <GenericButton
        btnStyle={ButtonType.primary}
        btnText="+"
        onClickBtn={increaseCounter}
      />
      <GenericButton
        btnStyle={ButtonType.secondary}
        btnText="-"
        onClickBtn={decreaseCounter}
      />
    </div>
  );
};

export default CounterActions;
