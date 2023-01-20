import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home";
import SignUpPage from "../pages/SignUpPage";
import NotFoundPage from "../pages/NotFoundPage"
import HelpPage from "../pages/HelpPage"

import AboutPage from "../pages/AboutPage";
import LoginPage from "../pages/LoginPage";
import RiderLogin from "../components/auth/login/RiderLogin";
import DriverLogin from "../components/auth/login/DriverLogin";
import {Result} from "../components/auth/login/consts"
import RidePage from "../pages/RidePage"
import MapPage from "../pages/MapPage"




const redirect = () => {
  return <NotFoundPage />;
}

const AppRouters = () => {
  return (

 <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/ride" element={<RidePage />} />
          <Route exact path="/login/rider" element={<RiderLogin />} />
          <Route path="/login/driver" element={<DriverLogin />} />          
        </Routes>
   
</>
  );
};
export default AppRouters;
