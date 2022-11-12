import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home";
import SignUpPage from "../pages/SignUpPage";
//import NotFoundPage from "./pages/NotFound"
//import HelpPage from "./pages/Help"
import ToolBar from "../components/ToolBar";
import Footer from "../components/Footer";
//import DriverSignInPage from "./pages/DriverSignIn"
import LoginPage from "../pages/LoginPage";
import RiderLogin from "../components/auth/login/RiderLogin";
import DriverLogin from "../components/auth/login/DriverLogin";
//import {Result} from "../components/auth/login/consts"
//import RidePage from "./pages/Ride"
//import MapPage from "./pages/Map"
import { ThemeProvider } from "@mui/material";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const AppRouters = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ToolBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route exact path="/login/rider" element={<RiderLogin />} />
          <Route path="/login/driver" element={<DriverLogin />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
};
export default AppRouters;
