import React from 'react';
import { useNavigate, Route } from 'react-router-dom';
import { RouteProps } from "./src/interface/routes.interface";

const ProtectedRoute = ({ path, element }: RouteProps) => {
  const userToken = sessionStorage.getItem('userToken');
  const navigate = useNavigate();

  if (!userToken) {
    // Redirect to the login page if the user token is not present
    navigate('/login');
    return null;
  }

  return <Route path={path} element={element} />;
};

export default ProtectedRoute;