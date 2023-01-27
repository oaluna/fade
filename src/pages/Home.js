import React, { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import CheckIcon from "@mui/icons-material/Check";
import OutlinedInput from "@mui/material/OutlinedInput";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Hero from "../components/Hero";

import WhatIsFadeLeft from "../assets/whatisfadeleft.png";
import WhatIsFadeRight from "../assets/whatisfaderight.png";
import DriverImage from "../assets/icon-driver.png";
import RiderImage from "../assets/icon-passenger.png";
import getMatched from "../assets/getMatched.png";
import enterItinerary from "../assets/enterItinerary.png";
import Gradient from "../assets/gradient-bg3.png";
import FadeLogo from "../assets/fade-logo.svg";

import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const steps = [
  "Enter Itinerary Details",
  "Get matched with a Route",
  "Subscribe and Ride",
];

const accountTypes = [
  {
    id: 0,
    price: "tbd",
    title: "Fade Driver",
    features: [
      "Post Commute Routes",
      "Accept subscriptions",
      "Receive Ratings",
    ],
  },
  {
    id: 1,
    price: "tbd",
    title: "Fade Rider",
    features: [
      "Search the global feed for similar commute",
      "Request Pickups from Drivers",
      "Subscribe if needed regularly",
    ],
  },
];

const HomePageStyles = styled.div`
  text-align: center;
  width: 100vw;
  overflow-x: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
`;

const HomePage = ({ open, children, ...props }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const items = React.Children.toArray(children);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep > 0 && prevActiveStep - 1);

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <HomePageStyles>
      {/* hero */}
      <Hero />

      {/* about us */}
      <div className="about">
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            columnSpacing={{ xs: 0, sm: 1, md: 1 }}
          >
            <Item
              sx={{
                position: "relative",
                boxShadow: "none",
                border: "none",
                mt: 5,
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  width: "100vw",
                  paddingTop: "15vh",
                  fontFamily: "Comfortaa",
                }}
              >
                What is Fade?
              </Typography>
            </Item>
          </Grid>
        </Box>
        <Box sx={{ width: "100%", maxWidth: "80vw", margin: "0 auto" }}>
          <Grid
            container
            rowSpacing={1}
            columns={{ xs: 1, sm: 1, md: 1 }}
            sx={{ my: 15 }}
          >
            <Grid item xs={12} columnSpacing={{ xs: 0 }}>
              <Item
                xs={12}
                sx={{
                  boxShadow: "none",
                  background: "transparent",
                  border: "none",
                }}
              >
                <img
                  src="https://res.cloudinary.com/dgdnpkfun/image/upload/v1674448163/Galaxy_Note_20_Ultra_qnkpgl.png"
                  alt="fade"
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    transform: "scale(1.2)",
                  }}
                />
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item
                xs={12}
                sx={{
                  boxShadow: "none",
                  background: "transparent",
                  border: "none",
                  width: { xs: "100vw", sm: "100vw", md: "50vw" },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    left: 0,
                    width: { xs: "30%", sm: "30%", md: "70%" },
                    fontSize: { xs: 12, sm: 12, md: 16, lg: 20 },
                    textAlign: "left",
                    fontWeight: 400,
                    letterSpacing: "-0.5px",

                    mt: { xs: "-50vh", sm: "-50vh" },
                    left: { xs: 32, sm: 15, md: 25 },
                  }}
                >
                  Fade is a carpooling service that aims to reduce the time and
                  money you spend on your daily commute,by encouraging our users
                  to travel together. We aim to unburden you of long bus rides
                  and congested rush hour traffic.
                </Typography>
              </Item>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ width: "100%", maxWidth: "80vw", margin: "0 auto" }}>
          <Grid
            container
            rowSpacing={1}
            columns={{ xs: 1, sm: 1, md: 1 }}
            sx={{ my: 25 }}
          >
            <Grid item xs={12} columnSpacing={{ xs: 0 }}>
              <Item
                xs={12}
                sx={{
                  boxShadow: "none",
                  background: "transparent",
                  border: "none",
                  marginTop: 5,
                }}
              >
                <Box
                  alt="hero"
                  component="img"
                  src="https://res.cloudinary.com/dgdnpkfun/image/upload/v1674697000/deviceframes_yn3swy.png"
                  sx={{
                    objectFit: "cover",
                    width: "100%",
                    padding: 0,

                    transform: "scale(1.2)",
                  }}
                />
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item
                xs={12}
                sx={{
                  boxShadow: "none",
                  background: "transparent",
                  border: "none",
                  width: { xs: "100vw", sm: "100vw", md: "50vw" },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    left: 0,
                    width: { xs: "85%", sm: "70%", md: "70%" },
                    fontSize: { xs: 12, sm: 12, md: 16, lg: 20 },
                    textAlign: "left",
                    fontWeight: 400,
                    letterSpacing: "-0.5px",
                  }}
                >
                  How does it work? Fade matches your itinerary with the closest
                  match available among Drivers. Once matched, you may subscribe
                  to the driver's driving route, if their daily schedule works
                  with yours. Now you have a small group that you carpool with.
                  Yay!
                </Typography>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>

      {/* how it works */}
      <Box xs={12} sm={12} md={12} sx={{ mt: 5 }}>
        <Grid container xs={12} sm={12}>
          <Typography
            variant="h3"
            xs={12}
            sm={12}
            md={12}
            sx={{
              mx: "auto",
              my: 15,
              textAlign: "center",
              fontFamily: "Comfortaa",
            }}
          >
            How Fade Works
          </Typography>
        </Grid>
        <Stepper
          activeStep={activeStep}
          sx={{ display: "flex", alignItems: "center", color: "#2afbff" }}
        >
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {
              fontFamily: "Comfortaa",
            };

            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Box xs={12}>
              <Box sx={{ flex: "1 auto" }} />
              <Button
                onClick={handleReset}
                sx={{
                  height: "60vh",
                  width: "90%",
                  mx: "auto",
                  background: "transparent",
                }}
              >
                Reset
              </Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {activeStep === 0 && (
              <Box
                component="section"
                xs={12}
                sm={12}
                md={12}
                sx={{ height: "100vh" }}
              >
                <Container xs={12} sm={12} md={12}>
                  <Grid container alignItems="center" xs={12} sm={12} md={12}>
                    <Grid item xs={12} sm={12} md={12}>
                      <Typography
                        component="h1"
                        variant="h5"
                        xs={12}
                        md={12}
                        sx={{
                          mt: 5,
                          fontFamily: "Comfortaa",
                          textAlign: "left",
                        }}
                      >
                        Enter your Itinerary Details
                      </Typography>
                      <Typography
                        color="text.secondary"
                        xs={12}
                        sm={12}
                        md={12}
                        sx={{
                          mt: 4,
                          fontFamily: "Comfortaa",
                          textAlign: "left",
                        }}
                      >
                        Enter a pickup address and a dropoff address, as well as
                        the date(s) and time(s) you need to be picked up.
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box
                        alt="hero"
                        component="img"
                        src="https://res.cloudinary.com/dgdnpkfun/image/upload/v1674502119/Google_Pixel_6a_device_frame_a2jahs.png"
                        xs={10}
                        sm={5}
                        md={5}
                        sx={{
                          transform: "scale(0.5)",
                          ml: -10,
                          mt: -50,
                          clipPath: "inset(50% 0% 0% 0%)",
                        }}
                      />
                    </Grid>
                  </Grid>
                </Container>
              </Box>
            )}
            <Box
              component="section"
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                p: 5,
              }}
            >
              <Container maxWidth="lg" sx={{ p: 5 }}>
                <Grid container alignItems="center" spacing={3}>
                  <Grid item xs={12} md={5}>
                    <Typography
                      component="h1"
                      variant="h4"
                      sx={{ fontFamily: "Comfortaa", textAlign: "left" }}
                    >
                      Get matched with a Fade Driver
                    </Typography>
                    <Typography
                      color="text.secondary"
                      sx={{ mt: 4, fontFamily: "Comfortaa", textAlign: "left" }}
                    >
                      Fade will match you with drivers whose commutes are the
                      closest matches to your needs, then select the one that
                      works best for you.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ height: "60vh", py: 15 }}>
                    <Box
                      alt="hero"
                      component="img"
                      src="https://res.cloudinary.com/dgdnpkfun/image/upload/v1674516353/Google_Pixel_6_device_frame_pkdjpz.png"
                      sx={{ width: "100%", mx: "auto", px: 10 }}
                    />
                  </Grid>
                </Grid>
              </Container>
            </Box>

            <Box
              component="section"
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                p: 5,
              }}
            >
              <Container maxWidth="lg">
                <Grid container alignItems="center" spacing={3}>
                  <Grid item xs={12} md={5}>
                    <Typography
                      component="h1"
                      variant="h4"
                      sx={{ fontFamily: "Comfortaa", textAlign: "left" }}
                    >
                      Subscribe, and Ride. Don't forget the fade.
                    </Typography>
                    <Typography
                      color="text.secondary"
                      sx={{ mt: 4, fontFamily: "Comfortaa", textAlign: "left" }}
                    >
                      If the commute works out for both driver and rider, you
                      can subscribe to a Fade driver's route and ride with them
                      regularly.
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ mt: 4 }}>
                      <Button
                        size="xs"
                        variant="outlined"
                        sx={{ color: "#000040" }}
                      >
                        Rider Sign-Up
                      </Button>
                      <Button
                        size="xs"
                        variant="contained"
                        sx={{ color: "#fff", backgroundColor: "#000040" }}
                      >
                        Driver Sign-Up
                      </Button>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ height: "60vh", py: 15 }}>
                    <Box
                      alt="hero"
                      component="img"
                      src="https://res.cloudinary.com/dgdnpkfun/image/upload/v1674448163/iPhone_13_ethw8e.png"
                      sx={{ width: "100%", margin: "0 0 0 15vw" }}
                    />
                  </Grid>
                </Grid>
              </Container>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2, pb: 15 }}>
              <Button color="inherit" onClick={handleBack} sx={{ mr: 1 }}>
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />

              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>

      {/* accounts */}
      <Box
        component="section"
        sx={{
          backgroundImage: `url(${Gradient})`,
          backgroundBlendMode:
            "soft-light, screen, overlay, overlay, difference, overlay, normal",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          position: "relative",
          width: "100vw",
          height: "175vh",
        }}
      >
        <Container
          xs={12}
          sm={12}
          md={12}
          sx={{
            height: "175vh",
            width: "100vw",
            backdropFilter: "blur(12px)",
          }}
        >
          <Box sx={{ mb: 1 }} xs={12} sm={12} md={12}>
            <Typography
              component="h2"
              variant="h4"
              color="white"
              xs={12}
              sm={12}
              md={12}
              sx={{ px: 5, py: 5, fontFamily: "Comfortaa" }}
            >
              Signing Up for Fade
            </Typography>
          </Box>
          <Grid container xs={12} sm={12} md={12}>
            {accountTypes.map((account) => (
              <Grid
                key={account.title}
                item
                xs={12}
                sm={12}
                md={12}
                sx={{ m: 2 }}
              >
                <Card
                  xs={12}
                  sm={12}
                  md={12}
                  sx={{
                    boxShadow: "0px 1.5px 4px rgba(26,9,13,0.3)",
                    border: "none",
                    backgroundColor: "#000040",
                  }}
                >
                  <CardContent xs={12} sm={12} md={12}>
                    <Typography
                      align="center"
                      component="div"
                      variant="h6"
                      color="#fff"
                      sx={{ fontFamily: "Comfortaa" }}
                    >
                      {account.title}
                    </Typography>
                    <Box xs={12} sm={12} md={12}>
                      <img
                        src={account.id === 0 ? DriverImage : RiderImage}
                        alt="Account Icon"
                        style={{ width: "60px", height: "60px" }}
                      />
                    </Box>
                    <Stack xs={12} sm={12} md={12}>
                      {account.features.map((feature) => (
                        <Box
                          xs={12}
                          sm={12}
                          md={12}
                          key={feature}
                          sx={{ flexDirection: "column", alignItems: "center" }}
                        >
                          <CheckIcon color="#2afbff" xs={6} sm={6} md={6} />
                          <Typography
                            color="#fff"
                            xs={6}
                            sm={6}
                            md={6}
                            sx={{ fontFamily: "Comfortaa" }}
                          >
                            {feature}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>

                    <Button
                      fullWidth
                      sx={{
                        mt: 4,
                        backgroundColor: "#2afbff",
                        boxShadow: "0px 1.5px 4px rgba(26,9,13,0.3)",
                      }}
                      variant="normal"
                    >
                      Buy Now
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      {/* carousel */}
      <Box
        xs={12}
        sm={12}
        md={12}
        component="section"
        sx={{
          my: 25,
        }}
      >
        <Slider {...settings}>
          {new Array(2).fill(0).map((_, i) => (
            <Paper
              key={`item-${i}`}
              xs={12}
              sm={12}
              md={12}
              sx={{
                height: 230,
                width: "60vw",
                boxShadow: "0px 1.5px 4px rgba(26,9,13,0.3)",
                overflow: "hidden",
                background: i === 0 ? "#000040" : "white",
                color: i === 0 ? "white" : "#000040",
                p: 2,
              }}
            >
              <Typography
                variant="h3"
                sx={{ fontFamily: "Comfortaa", letterSpacing: "-2px" }}
              >
                Become a {i === 0 ? "Rider" : "Driver"}
              </Typography>
              {i === 0 && (
                <>
                  <Typography
                    variant="p"
                    sx={{ textAlign: "left", pl: 0, fontFamily: "Comfortaa" }}
                  >
                    Say goodbye to
                    <br />
                    butt-bumping on the bus
                  </Typography>
                </>
              )}
              {i === 1 && (
                <>
                  <Typography
                    variant="p"
                    sx={{ textAlign: "left", pl: 0, fontFamily: "Comfortaa" }}
                  >
                    Toss out that weird <br />
                    Carpool doll.
                  </Typography>
                </>
              )}
              <Grid
                xs={12}
                sm={12}
                md={12}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  pl: 5,
                  py: 5,
                  mx: "auto",
                }}
              >
                <Item
                  component="img"
                  xs={6}
                  sm={6}
                  md={3}
                  sx={{ width: "40%" }}
                  src="https://miro.medium.com/max/600/1*xqT83bMEz92IBYxS9UQNow.png"
                  alt="app store"
                />
                <Item
                  component="img"
                  xs={6}
                  sm={6}
                  md={3}
                  sx={{ width: "40%" }}
                  src="https://miro.medium.com/max/600/1*nZu0dsnlCQltPT1QMCHFAA.png"
                  alt="google play"
                />
              </Grid>
            </Paper>
          ))}
        </Slider>
      </Box>
      {/* contact */}
      <Box
        component="section"
        sx={{
          mb: 50,
     
        }}
      >
        <Container xs={12} sm={12} md={12}>
          <Grid
            xs={12}
            sm={12}
            md={12}
            sx={{
              backgroundImage: `url(${Gradient})`,
              backgroundBlendMode:
                "soft-light, screen, overlay, overlay, difference, overlay, normal",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "200vh",
              color: "#fff",
              position:"absolute",
              left: 0,
              top: 100,
              bottom: 0
            }}
          >
            <CardContent
              xs={12}
              sm={12}
              md={12}
              sx={{
                textAlign: "center",
                backdropFilter: "blur(32px)",
                height: "200vh",
              }}
            >
              <Typography
                sx={{ mb: 1, py: 10, fontWeight: 700, fontFamily: "Comfortaa" }}
                variant="h3"
              >
                Sign up for the latest Fade updates!
              </Typography>
              <Typography sx={{ mb: 4, fontFamily: "Comfortaa" }} variant="h5">
                This app is currently in development, but you can subscribe here
                to receive the latest news about the development of the Fade app
                and its services.
              </Typography>
              <OutlinedInput
                id="mail"
                endAdornment={<Button variant="contained">Register</Button>}
                placeholder="E-mail"
                sx={{ bgcolor: "background.default", pr: 0.5 }}
              />
            </CardContent>
          </Grid>
        </Container>
        {/* footer  */}
          <Item xs={12} lg={3} sx={{textAlign:"center"}}>
            <img src={FadeLogo} alt="Fade" style={{ width: "80%", height:"auto", position:"absolute", top: "140vh", left: 30}} />
          </Item>

        <Grid
          xs={12}
          sm={12}
          md={12}
          columns={1}
          sx={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
           top: 0,
            left: 0,
            width: "100vw",
            height: "90vh",
            zIndex: 10,
          }}
        >
        

        <div
          style={{
    
           height:"auto",
           position:"relative",
            marginBottom: 0,
top: "100vh",
fontFamily:"Comfortaa",
            display:"flex",
            flexDirection:"row",
            justifyContent: "space-evenly",
          }}
        >
          <div>
            <div>
              <Typography variant="p" sx={{ color: "#fff" }}>
               About
              </Typography>
              <div style={{flexDirection:"column"}}>
                <Typography variant="p" sx={{ color: "#fff" }}>
                 How It Works
                </Typography>
                <Typography variant="p" sx={{ color: "#fff" }}>
                  Pricing
                </Typography>
                <Typography variant="p" sx={{ color: "#fff" }}>
                  Signup
                </Typography>
                <Typography variant="p" sx={{ color: "#fff" }}>
                  Login
                </Typography>
              </div>
            </div>
            <div>
              <Typography variant="p" sx={{ color: "#fff" }}>
                Contact Us
              </Typography>
              <div style={{flexDirection:"column"}}>
                <Typography variant="p" sx={{ color: "#fff" }}>
                  Address: 
                </Typography>
                <Typography variant="p" sx={{ color: "#fff" }}>
                 City: 
                </Typography>
                <Typography variant="p" sx={{ color: "#fff" }}>
                  Email:
                </Typography>
                <Typography variant="p" sx={{ color: "#fff" }}>
                  Help Center: 
                </Typography>
              </div>
            </div>
            <div style={{flexDirection:"column"}}>
              <Typography variant="p" sx={{ color: "#fff" }}>
                Legal Press
              </Typography>
              <div>
                <Typography variant="p" sx={{ color: "#fff" }}>
                  Privacy Policy
                </Typography>
                <Typography variant="p" sx={{ color: "#fff" }}>
                  Terms of Use
                </Typography>
                <Typography variant="p" sx={{ color: "#fff" }}>
                  IP / DMCA Notices
                </Typography>
                <Typography variant="p" sx={{ color: "#fff" }}>
                  Press &amp; Media
                </Typography>
              </div>
            </div>
            <div>
              <Typography variant="p" sx={{ color: "#fff" }}>
                Download the App
              </Typography>
              <div style={{flexDirection:"column"}}>
                <Typography variant="p" sx={{ color: "#fff" }}>
                  App Store
                </Typography>
                <Typography variant="p" sx={{ color: "#fff" }}>
                  Play Store
                </Typography>
               
              </div>
            </div>
       
          
            <Typography variant="p" sx={{ color: "#fff" }}>
              Copyright © 2023 by <a style={{color:"#2afbff", textDecoration:"none"}} href="https://oscarluna.dev">Oscar Armando Luna</a>
            </Typography>
           
            <Typography variant="p" sx={{ color: "#fff" }}>
              All Rights Reserved.
            </Typography>
          </div>
   </div>
   </Grid>
      </Box>
    </HomePageStyles>
  );
};

export default HomePage;
