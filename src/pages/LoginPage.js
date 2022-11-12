import React, { useState } from "react";
import Logo from "../assets/fade-logo.svg";
import { useLocation } from "react-router-dom";
import {  createStore } from "little-state-machine";
import RiderLogin from "../components/auth/login/RiderLogin";
import DriverLogin from "../components/auth/login/DriverLogin";


import { Box, Tab, Typography, Tabs } from "@mui/material";

import PropTypes from "prop-types";

createStore({
  yourDetails: {
    firstName: "",
    lastName: "",
    address: "",
    number: "",
  },
});

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="span">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function Pages() {
  const location = useLocation();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Order Items" {...a11yProps(0)} />
          <Tab label="Customer Information" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <RiderLogin />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <DriverLogin />
      </TabPanel>
    </>
  );
}

export default function LoginPage() {
  return (
    <div className="container">
      <h1>
        <img src={Logo} alt="logo" /> Login
      </h1>
      <Pages />
    </div>
  );
}
