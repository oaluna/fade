import React from "react";

import FadeLogo from "../assets/fade-logo.svg";
import Gradient from "../assets/gradient-bg3.png";
import DeviceThree from "../assets/deviceThree.png";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Hero = () => {
  return (
    <Grid
      container
      className="hero"
      sx={{
        objectFit: "cover",
        backgroundImage: `url(${Gradient})`,
        backgroundBlendMode:
          "soft-light, screen, overlay, overlay, difference, overlay, normal",
        height: { xs: "150vh", md: "100vh" },
        width: "100vw",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",

        position: "relative",
      }}
    >
      <Item
        component="img"
        className="hero-bg-overlay"
        sx={{
          width: "100vw",
          margin: 0,
          padding: 0,
          height: { xs: "150vh", md: "100vh" },
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          borderRight: "none",
          position: "absolute",
          background: "#fcf7ff",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          mixBlendMode: "multiply",

          backdropFilter: "blur(44px)",
        }}
      ></Item>

      <Item
        component="img"
        src={FadeLogo}
        alt="logo"
        className="hero-title"
        xs={10}
        md={6}
        position="absolute"
        sx={{
          objectFit: "contain",

          maxWidth: "100%",
          mx: { xs: 3, sm: "auto", md: 5, lg: "auto" },
          mt: 15,
          px: { xs: 1, sm: 1, md: 5 },
        }}
      />

      <Typography
        variant="h4"
        className="hero-body"
        sx={{
          color: "#fff",
          padding: { xs: 4 },
          fontSize: { xs: 14, sm: 18, md: 22, lg: 24, xl: 30 },
          fontWeight: 400,
          fontFamily: "Comfortaa",
          marginTop: { xs: 25, sm: 35, md: 80, lg: 120 },
          height: { xs: "80vh" },
          verticalAlign: "center",
          left: { xs: 0, md: 15 },
          maxWidth: { xs: "100%", sm: "100%", md: "50%" },
          textAlign: "left",
          zIndex: 1,
        }}
      >
        Save time and money spent on your daily commute. {""}
        <a href="/about" style={{ color: "#2afbff", textDecoration: "none" }}>
          Learn More
        </a>
      </Typography>

      <div className="device-image">
        <Item
          component="img"
          src={DeviceThree}
          alt="android"
          className="device"
          sx={{
            width: { xs: "300px", sm: "600px", md: "500px", lg: "600px" },
            position: "absolute",
            alignItems: "center",
            top: { xs: 240, md: 80 },
            left: { xs: 15, md: 15 },
            transform: { xs: "scale(0.85)", sm: "scale(0.5)" },
          }}
        />
      </div>
    </Grid>
  );
};

export default Hero;
