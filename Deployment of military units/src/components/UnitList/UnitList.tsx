import { FC } from "react";
import './UnitList.css';
import UnitStatus from "../UnitStatus/UnitStatus";
import ChangeStatus from "../ChangeStatus/ChangeStatus";
import { useGlobalDeployment } from "../../context/DeploymentContext";

interface UnitListProps {
  units: { [key: string]: string }[];
}

const UnitList: FC<UnitListProps> = () => {
  const { units } = useGlobalDeployment();

  return (
    <div>
      <h1>Unit List</h1>
      {
        Object.entries(units).map(([key, value], index) => 
          <UnitStatus
            key={index}
            unit={{ [key]: value }}            
            
            />
            
        )
      }
    </div>
  );
};

export default UnitList;