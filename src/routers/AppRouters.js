import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home";
import UserSignUp from "../components/UserSignUp";
//import NotFoundPage from "./pages/NotFound"
//import HelpPage from "./pages/Help"
import ToolBar from "../components/ToolBar";
import Footer from "../components/Footer";
//import DriverSignInPage from "./pages/DriverSignIn"
//import LoginPage from "./pages/Login"
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
          <Route path="/signup" element={<UserSignUp />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
};
export default AppRouters;
