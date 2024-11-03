import React, { createContext, useContext, useEffect, useState } from "react";
import { IntervalPlace } from "../types/enums";
import { COUNTER_CONSTANTS } from "../constants/constants";
interface CounterProviderProps {
  children: React.ReactNode;
}

interface ContextProps {
  counter: number;
  counterColor: IntervalPlace;
  increaseCounter: () => void;
  decreaseCounter: () => void;
  clearCounter: () => void;
}

const CounterContext = createContext<ContextProps>({
  counter: 0,
  counterColor: IntervalPlace.neutral,
  increaseCounter: () => {},
  decreaseCounter: () => {},
  clearCounter: () => {},
});

const CounterProvider: React.FC<CounterProviderProps> = ({ children }) => {
  const [counter, setCounter] = useState<number>(COUNTER_CONSTANTS.RESET_COUNTER);
  const [counterColor, seCounterColor] = useState<IntervalPlace>(
    IntervalPlace.neutral
  );

  useEffect(() => {
    // const currentPlace = counter > 0 ? IntervalPlace.positive: counter === 0 ? IntervalPlace.neutral: IntervalPlace.negative; // If you want in one line

    let currentPlace: IntervalPlace = IntervalPlace.neutral;
    if (counter > 0) currentPlace = IntervalPlace.positive;
    else if (counter === 0) currentPlace = IntervalPlace.neutral;
    else currentPlace = IntervalPlace.negative;

    seCounterColor(currentPlace);
  }, [counter]);

  const increaseCounter = (): void => {
    if (counter < COUNTER_CONSTANTS.MAX_COUNTER) {
      setCounter((prev) => prev + 1);
    }
  };

  const decreaseCounter = (): void => {
    if (counter > COUNTER_CONSTANTS.MIN_COUNTER) {
      setCounter((prev) => prev - 1);
    }
  };
  const clearCounter = (): void => {
    setCounter(COUNTER_CONSTANTS.RESET_COUNTER);
  };

  return (
    <CounterContext.Provider
      value={{
        counter,
        counterColor,
        increaseCounter,
        decreaseCounter,
        clearCounter,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export const useGlobalCounter = () => {
  return useContext(CounterContext);
};

export { CounterContext , CounterProvider };
