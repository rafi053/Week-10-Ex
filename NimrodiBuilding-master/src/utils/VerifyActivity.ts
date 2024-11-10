import roles from "../data/roles.json";

interface IuseActivityParams {
  activity: string;
  role: string;
  activities: string[];
}

const useIsVerified = ({ activity, role, activities }: IuseActivityParams) => {
  const indexOfActivity = activities.findIndex((act: string) => act === activity);
  const indexOfRole = roles.findIndex((r: string) => r === role);

  return indexOfActivity !== -1 && indexOfRole !== -1 && indexOfRole >= indexOfActivity;
};

export default useIsVerified;
