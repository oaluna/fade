import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { StateMachineProvider } from "little-state-machine";
//import "./index.css";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import Main from "./Main";
import GlobalStyle from './GlobalStyle';
import reportWebVitals from "./reportWebVitals";

let theme = createTheme();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <StateMachineProvider>
        <GlobalStyle/>
          <Main />
        </StateMachineProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
