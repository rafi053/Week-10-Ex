import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { changeAccess } from '../store/floorreducer';
import { useNavigate } from "react-router-dom";
import Forbidden from '../pages/Forbidden/Forbidden';
import { FC, ReactNode, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const  floorAccess  = useSelector((state: RootState) => state.floorAccess
  .floorAccess);

  useEffect(() => {
    const index = Number(id) ;
    if (!floorAccess[index]) {
      navigate('/forbidden');
    }
  }, []);

  return <div className="ProtectedRoute">{children}</div>;
};


export default PrivateRoute;