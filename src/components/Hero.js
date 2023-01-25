import React from "react";

import FadeLogo from "../assets/fade-logo.svg";
import Gradient from "../assets/gradient-bg3.png";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Grid"
import Item from "@mui/material/Grid";

const Hero = () => {
  return (
    <Grid
     
      container
      className="hero"
      sx={{
        backgroundImage: `url(${Gradient})`,
        backgroundBlendMode:
          "soft-light, screen, overlay, overlay, difference, overlay, normal",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        className="hero"
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",

          position: "absolute",
          background: "#fcf7ff",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          mixBlendMode: "multiply",
          transform: "rotateX(180deg)",
          backdropFilter: "blur(44px)",
        }}
      ></div>
   
        <Item
          component="img"
          src={FadeLogo}
          alt="logo"
          className="hero-title"
        xs={4} md={5}
         position="absolute"
         sx={{objectFit: "contain", maxWidth: "100%", mx: 15, my: 15}}
        />

        <h4
          className="hero-body"
          style={{
            color: "#fff",
            fontSize: 30,
            fontWeight: 400,
            marginTop: "56vh",
            marginLeft: "8vw",
            maxWidth: "50%",
            textAlign: "left",
            zIndex: 1

          }}
        >
          Save time and money spent on your daily commute.{
            " "
          }{""}
          <a href="/about" style={{ color: "#2afbff", textDecoration: "none" }}>
            Learn More
          </a>
        </h4>
      
      <div className="device-image">
        <Item
          component="img"
          src="https://res.cloudinary.com/dgdnpkfun/image/upload/v1674248831/image_1_mcv5bp.png"
          alt="android"
          className="device"
          style={{
            width: "300px",
            position: "absolute",
            top: 80,
            right: 250,
          }}
        />
      </div>
    </Grid>
  );
};

export default Hero;
