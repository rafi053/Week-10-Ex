import { FC } from "react";
import "./CounterPage.css"
import CounterDisplay from "../../components/CounterDisplay/CounterDisplay";
import CounterActions from "../../components/CounterActions/CounterActions";

const CounterPage: FC = () => {
  return <main className="page CounterPage">
    <CounterDisplay/>
    <CounterActions/>
  </main>;
};

export default CounterPage;
