
import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface DeploymentProviderProps {
  children: ReactNode;
}

interface ContextProps {
  units: {
    [key: string]: string;
  };
  setUnitStatus: (unit: string, status: string) => void;

  

}

const DeploymentContext = createContext<ContextProps>({
  units: {},
  setUnitStatus: () => {},
  
});

const DeploymentProvider: FC<DeploymentProviderProps> = ({ children }) => {
  const [units, setUnits] = useState({
    Golani: 'Idle',
    Paratroopers: 'Idle',
    Givati: 'Idle',
    Nahal: 'Idle',
    Kfir: 'Idle',
    NetzahYehuda: 'Idle',
    Duvdevan: 'Idle',
    Maglan: 'Idle',
    Shayetet13: 'Idle',
    
  });

  

  // useEffect(() => {
  // }, []);

  const setUnitStatus = (unit: string, status: string) => {
    setUnits((prevUnits) => ({
      ...prevUnits,
      [unit]: status,
    }));
  };

  return (
    < DeploymentContext.Provider
      value={{
        units,
        setUnitStatus
        
      }}
    >
      {children}
    </DeploymentContext.Provider>
  );
};

export const useGlobalDeployment = () => {
  return useContext(DeploymentContext);
};

export { DeploymentContext, DeploymentProvider};













