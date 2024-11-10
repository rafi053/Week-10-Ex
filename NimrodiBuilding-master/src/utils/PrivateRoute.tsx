import { ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";

interface IPrivateRoute{
    component: ReactNode,
}

const PrivateRoute = ({ component}:IPrivateRoute) => {
    const { index } = useParams<{ index: string }>(); 
    const floorAccess = useSelector((state: { floorAccess: { floorAccess: [boolean, boolean, boolean, boolean, boolean] } }) => state.floorAccess.floorAccess);
        const floorIndex = parseInt(index || "0", 10);
        console.log( floorAccess)
        const isAuthorized = floorAccess[floorIndex]
        const navigate = useNavigate();
        useEffect(() => {
            if (!isAuthorized) {
              navigate('/forbidden');
            }
          }, [isAuthorized, navigate]);
        
    return <>
    {isAuthorized && component }
    </>;
};

export default PrivateRoute