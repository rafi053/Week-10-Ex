import { FC } from "react";
import './UnitStatus.css';
import { useGlobalDeployment } from "../../context/DeploymentContext";

interface UnitStatusProps {
  unit: {
    [key: string]: string;
}

}

const UnitStatus: FC<UnitStatusProps> = ({ unit }) => {
  const { setUnitStatus } = useGlobalDeployment();
  

  return (
    <div>
      
      <h2>{Object.keys(unit)}</h2>
      <h3>{Object.values(unit)}</h3>
      <button
        onClick={() => {
          setUnitStatus(Object.values(unit), 'Idle');
        }}
      >
        Idle
      </button>
      <button
        onClick={() => {
          setUnitStatus(unit.unit, 'In Progress');  
        }}
      >
        In Progress  
      </button>
      <button
        onClick={() => {
          setUnitStatus(unit.unit, 'Completed');
        }}
      >
        Completed
      </button>
      
    </div>
  );
};

export default UnitStatus;