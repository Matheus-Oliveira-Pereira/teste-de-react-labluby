import React from 'react';
import { Routes as Switch, Route, Navigate, useLocation, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import AllVehicles from '../pages/AllVehicles';
import Employees from '../pages/Employees';
import Home from '../pages/Home';
import Login from '../pages/Login';
import UserVehicles from '../pages/UserVehicles';


const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/login" element={<Login/>} />
      <Route element={<RequireAuth/>}>
        <Route path="/" element={<Home/>} />
        <Route path="/employees" element={<Employees/>} />
        <Route path="/allVehicles" element={<AllVehicles/>} />
        <Route path="/userVehicles" element={<UserVehicles/>} />
      </Route>
    </Switch>
  );
};

function RequireAuth() {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.token) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <Outlet/>
}


export default Routes;