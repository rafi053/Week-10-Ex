import building from "../data/building.json";

export const useBuildingData = () => {
  const getFloorByIndex = (index: number) => {
    return building[index];
  };

  const getListOfActivities = () => {
    return building.map((floor) => floor.activity);
  };

  return { getFloorByIndex, getListOfActivities };
}