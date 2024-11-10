import { useState, useEffect } from 'react';

interface Floor {
  name: string;
  soldiers: number;
  purpose: string;
  description: string;
  activity:string
}

const useBuildingData = () => {
  const [buildingData, setBuildingData] = useState<Floor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await import('../data/building.json');
        setBuildingData(response.default);
      } catch (error) {
        console.error("Failed to load building data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const getFloorByName = (floorName: string): Floor | undefined => {
    return buildingData.find(floor => floor.name === floorName);
  };
  const getFloorByIndex = (floorIndex:number): Floor |undefined =>
  {
    return buildingData[floorIndex];
  }
  const getListOfActivities = ():string[]=>{
    return buildingData.map((e:Floor) => e.activity)
  }
  return {
    buildingData,
    loading,
    getFloorByName,
    getFloorByIndex,
    getListOfActivities
  };
};

export default useBuildingData;
