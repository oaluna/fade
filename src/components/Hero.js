import React from 'react'

import FadeLogo from "../assets/fade-logo.svg";
import Gradient from  "../assets/gradient-bg3.png";

import Grid from "@mui/material/Grid";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import CheckIcon from "@mui/icons-material/Check";
import OutlinedInput from "@mui/material/OutlinedInput";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";

const Hero = () => {
  return (
    <div className="hero">
<Grid xs={12} sm={12} md={12} lg={12} xl={12} container>
    <div
        className="hero-bg"
        style={{
          backgroundImage:`url(${Gradient})`,
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
            //   "url(https://images.pexels.com/photos/2120/city-traffic-people-smartphone.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            mixBlendMode: "multiply",
            transform: "rotateX(180deg)",
            backdropFilter: "blur(44px)",
          }}
        ></div>
        <div
          style={{
            flexGrow: 1,
            maxWidth: "50%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            marginLeft: 125,
            textAlign: "left",
            position: "relative",
          }}
        >

        <img src={FadeLogo} alt="logo" className="hero-title"  />

          <h4
         
      className="hero-body"
           style={{color:"#fff", fontSize: 30, fontWeight: 400, marginTop: 75, maxWidth: '100%'}}
          >
            Save time and money spent on your daily commute.{""}
          <a href="/about" style={{color: "#2afbff", textDecoration: "none"}}>Learn More</a>
          </h4>

      </div>
        <div className="device-image">
          <img src="https://res.cloudinary.com/dgdnpkfun/image/upload/v1674248831/image_1_mcv5bp.png" alt="android" className="device" style={{width: "300px", position:"absolute", top:80, right: 250}} />
        </div>
        </div>
      </Grid>
      </div>
  )
}

export default Hero;