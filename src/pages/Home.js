import React, { useState } from "react";

import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import CheckIcon from "@mui/icons-material/Check";
import OutlinedInput from "@mui/material/OutlinedInput";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Carousel, { carouselClasses } from "mui-carousel";

import Hero from "../components/Hero";

import WhatIsFadeLeft from "../assets/whatisfadeleft.png";
import WhatIsFadeRight from "../assets/whatisfaderight.png";
import DriverImage from "../assets/DriverImage.png";
import getMatched from "../assets/getMatched.png";
import enterItinerary from "../assets/enterItinerary.png";
import Gradient from "../assets/gradient-bg3.png";
import "./Home.css";

const steps = [
  "Enter Itinerary Details",
  "Get matched with a Route",
  "Subscribe and Ride",
];

const accountTypes = [
  {
    price: "tbd",
    title: "Fade Driver",
    features: [
      "Post Commute Routes",
      "Accept subscriptions",
      "Receive Ratings",
    ],
  },
  {
    price: "tbd",
    title: "Fade Rider",
    features: [
      "Search the global feed for similar commute",
      "Request Pickups from Drivers",
      "Subscribe if needed regularly",
    ],
  },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const HomePage = ({ open, children, ...props }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const items = React.Children.toArray(children);

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
    <div>
      {/* hero */}
      <Hero />

      {/* about us */}
      <div className="about">
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 1, md: 1 }}
          >
            <Item
              sx={{
                boxShadow: "none",
                border: "none",
                marginBottom: "10vh",
                background: "#fcf7ff",
              }}
            >
              <Typography variant="h3" sx={{ width: "100vw" }}>
                What is Fade?
              </Typography>
            </Item>
          </Grid>
        </Box>
        <Box sx={{ width: "100%", maxWidth: "80vw", margin: "0 auto" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, md: 3 }}
            columnWidth={{ xs: 1 }}
            sx={{ alignItems: "center" }}
          >
            <Grid item xs={6} columnSpacing={{ xs: 1 }}>
              <Item
                xs={3}
                sx={{
                  boxShadow: "none",
                  background: "transparent",
                  border: "none",
                }}
              >
                <img
                  src="https://res.cloudinary.com/dgdnpkfun/image/upload/v1674448163/Galaxy_Note_20_Ultra_qnkpgl.png"
                  alt="fade"
                  style={{ objectFit: "cover", width: "100%", transform: "scale(1.2)", marginLeft: "-15vw" }}
                />
              </Item>
            </Grid>
            <Grid item xs={6} columnSpacing={{ xs: 1 }}>
              <Item
                xs={3}
                sx={{
                  boxShadow: "none",
                  background: "transparent",
                  border: "none",
                }}
              >
                <Typography variant="h6" style={{fontSize: 20, textAlign:'left', fontWeight: 400, letterSpacing: "-0.5px"}}>
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
            columnSpacing={{ xs: 1, md: 5 }}
            columnWidth={{ xs: 1 }}
            sx={{ alignItems: "center" }}
          >
            <Grid item xs={6} columnSpacing={{ xs: 1 }}>
              <Item
                xs={3}
                sx={{
                  boxShadow: "none",
                  background: "transparent",
                  border: "none",
                }}
              >
                <Typography variant="h6" style={{fontWeight: 400, textAlign: "left"}}>
                  How does it work? Fade matches your itinerary with the closest
                  match available among Drivers. Once matched, you may subscribe
                  to the driver's driving route, if their daily schedule works
                  with yours. Now you have a small group that you carpool with.
                  Yay!
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={6} columnSpacing={{ xs: 1 }}>
              <Item
                xs={3}
                sx={{
                  boxShadow: "none",
                  background: "transparent",
                  border: "none",
                }}
              >
                <img
                  src="https://res.cloudinary.com/dgdnpkfun/image/upload/v1674448163/iPhone_13_ethw8e.png"
                  alt="fade"
                  style={{ objectFit: "cover", width: "100%" }}
                />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>

      {/* how it works */}
      <Box
        sx={{
          width: "60vw",
          height: "100vh",
          margin: "0 auto",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Stepper
          activeStep={activeStep}
          sx={{ display: "flex", alignItems: "center", color: "#2afbff" }}
        >
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};

            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Box sx={{ flex: "1 auto" }} />
              <Button
                onClick={handleReset}
                sx={{
                  height: "70vh",
                  width: "100%",
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
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "80vh",
                  width: "80vw",
                  mx: "auto",
                }}
              >
                <Container maxWidth="lg">
                  <Grid container alignItems="center" spacing={3}>
                    <Grid item xs={12} md={5}>
                      <Typography component="h1" variant="h4">
                        Enter your Itinerary Details
                      </Typography>
                      <Typography color="text.secondary" sx={{ mt: 4 }}>
                        Enter a pickup address and a dropoff address, as well as
                        the date(s) and time(s) you need to be picked up.
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={6}
                      sx={{ height: "80vh", py: 15 }}
                    >
                      <img
                        alt="hero"
                      className="getmatched"
                        src="https://res.cloudinary.com/dgdnpkfun/image/upload/v1674502119/Google_Pixel_6a_device_frame_a2jahs.png"
                       
                      />
                    </Grid>
                  </Grid>
                </Container>
              </Box>
            )}
            {activeStep === 1 && (
              <Box
                component="section"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  py: 10,
                }}
              >
                <Container maxWidth="lg">
                  <Grid container alignItems="center" spacing={3}>
                    <Grid item xs={12} md={5}>
                      <Typography component="h1" variant="h4">
                        Get matched with a Fade Driver
                      </Typography>
                      <Typography color="text.secondary" sx={{ mt: 4 }}>
                        Fade will match you with drivers' routes based on your
                        needs, and you pick the route that works best for you.
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box
                        alt="hero"
                        component="img"
                        src="https://res.cloudinary.com/dgdnpkfun/image/upload/v1674516353/Google_Pixel_6_device_frame_pkdjpz.png"
                        sx={{ width: "90%", mx: "auto", pl:25 }}
                      />
                    </Grid>
                  </Grid>
                </Container>
              </Box>
            )}
            {activeStep === 2 && (
              <Box
                component="section"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  py: 10,
                }}
              >
                <Container maxWidth="lg">
                  <Grid container alignItems="center" spacing={3}>
                    <Grid item xs={12} md={5}>
                      <Typography component="h1" variant="h4">
                        Subscribe, and Ride. Don't forget the fade.
                      </Typography>
                      <Typography color="text.secondary" sx={{ mt: 4 }}>
                        Do you take this route frequently? You can subscribe to
                        a Fade driver's route for a small fee and ride with them
                        regularly.
                      </Typography>
                      <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
                        <Button size="xl" variant="outlined">
                          Rider Sign-Up
                        </Button>
                        <Button size="xl" variant="contained">
                          Driver Sign-Up
                        </Button>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box
                        alt="hero"
                        component="img"
                        src={DriverImage}
                        sx={{ width: "100%", margin: "0 auto" }}
                      />
                    </Grid>
                  </Grid>
                </Container>
              </Box>
            )}
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
          backgroundImage: Gradient,
          backgroundBlendMode:
            "soft-light, screen, overlay, overlay, difference, overlay, normal",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          p: 0,
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            minWidth: "100vw",
            backdropFilter: "blur(12px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mx: "auto",
            my: 0,
            px: 25,
            py: 10,
          }}
        >
          <Box sx={{ textAlign: "center", mb: 1 }}>
            <Typography component="h2" variant="h4" color="white">
              Signing Up for Fade
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {accountTypes.map((account) => (
              <Grid key={account.title} item xs={12} md={6}>
                <Card
                  sx={{
                    mx: 15,
                    boxShadow: "0px 1.5px 4px rgba(26,9,13,0.3)",
                    border:
                      account.title === "Fade Driver"
                        ? "5px solid #6b7d7d"
                        : "5px solid #ECDD7B",
                  }}
                >
                  <CardContent>
                    <Typography align="center" component="div" variant="h6">
                      {account.title}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        mt: 4,
                      }}
                    >
                      <Typography color="text.secondary" component="div">
                        $
                      </Typography>
                      <Typography component="div" variant="h3">
                        {account.price}
                      </Typography>
                    </Box>
                    <Stack spacing={2} sx={{ mt: 4 }}>
                      {account.features.map((feature) => (
                        <Box
                          key={feature}
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <CheckIcon color="primary" sx={{ mr: 2 }} />
                          <Typography color="text.secondary">
                            {feature}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>

                    <Button
                      fullWidth
                      sx={{
                        mt: 4,
                        backgroundColor:
                          account.title === "Fade Driver"
                            ? "#6b7d7d"
                            : "#ecdd7b",
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
        component="section"
        sx={{
          height: "80vh",
          width: "80vw",
          mt: 25,
          mb: 0,
          ml: "auto",
          mr: "auto",
        }}
      >
        <Carousel
          renderPrev={({ disabled }) => (
            <Button disabled={disabled}>
              <ArrowLeftIcon
                sx={{
                  color: "#2afbff",
                  width: "64px",
                  height: "64px",
                }}
              />
            </Button>
          )}
          renderNext={({ disabled }) => (
            <Button disabled={disabled}>
              <ArrowRightIcon
                sx={{
                  color: "#2afbff",
                  width: "64px",
                  height: "64px",
                }}
              />
            </Button>
          )}
          renderDot={({ current }) => (
            <Button variant={current ? "contained" : "outlined"} />
          )}
          dots={true}
          showSlides={2}
          speed={1000 * 1}
          spacing={5}
          autoPlay={false}
          infinity // prev slide animation is broken (fixed in future)
          // value={slide}
          // onChange={(rawSlide, slide) => console.log("slide", slide)}
          pauseOnHover
          centerMode
          transitionDuration={1000}
          disableTransition={false}
          sx={{
            [`& .${carouselClasses.list}`]: {
              px: 3,
            },
            [`& .${carouselClasses.item} > *`]: {
              transition: "all 0.5s",
            },
            [`& .${carouselClasses.center} > *`]: {
              transform: "scale(1.2)",
            },
          }}
        >
          {new Array(2).fill(0).map((_, i) => (
            <Paper
              key={`item-${i}`}
              sx={{
                height: 230,
                m: 3,
                p: 4,
                boxShadow: "0px 1.5px 4px rgba(26,9,13,0.3)",
                overflow: "hidden",
                background: i === 0 ? "#1A090D" : "white",
                color: i === 0 ? "white" : "#1A090D",
              }}
            >
              Become a {i === 0 ? "Rider" : "Driver"}
              {i === 0 && (
                <>
                  <Typography variant="h4" sx={{ textAlign: "left", pl: 0 }}>
                    Say goodbye to
                    <br />
                    butt-bumping on the bus
                  </Typography>
                  <img
                    src="https://miro.medium.com/max/600/1*xqT83bMEz92IBYxS9UQNow.png"
                    alt="app store"
                    style={{ width: "40%", margin: "25px 15px" }}
                  />
                  <img
                    src="https://miro.medium.com/max/600/1*nZu0dsnlCQltPT1QMCHFAA.png"
                    alt="google play"
                    style={{ width: "40%", margin: "25px 15px" }}
                  />
                </>
              )}
              {i === 1 && (
                <>
                  <Typography variant="h4" sx={{ textAlign: "left", pl: 0 }}>
                    Toss out that weird <br />
                    Carpool doll.
                  </Typography>
                  <img
                    src="https://miro.medium.com/max/600/1*xqT83bMEz92IBYxS9UQNow.png"
                    alt="app store"
                    style={{ width: "40%", margin: "25px 15px" }}
                  />
                  <img
                    src="https://miro.medium.com/max/600/1*nZu0dsnlCQltPT1QMCHFAA.png"
                    alt="google play"
                    style={{ width: "40%", margin: "25px 15px" }}
                  />
                </>
              )}
            </Paper>
          ))}
        </Carousel>
      </Box>
      {/* contact */}
      <Box
        component="section"
        sx={{
          mb: 50,
        }}
      >
        <Container maxWidth="md">
          <div
            style={{
              backgroundImage: `url(${Gradient})`,
              backgroundBlendMode:
                "soft-light, screen, overlay, overlay, difference, overlay, normal",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",

              color: "#fff",
              position: "absolute",
              left: 0,
              width: "100vw",
              boxShadow: "0px 1.5px 4px rgba(26,9,13,0.3)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CardContent
              sx={{ textAlign: "center", backdropFilter: "blur(32px)" }}
            >
              <Typography
                component="div"
                sx={{ mb: 1, py: 10, fontWeight: 700 }}
                variant="h4"
              >
                Sign up for the latest Fade updates!
              </Typography>
              <Typography component="div" sx={{ mb: 4, mx: 45 }} variant="h6">
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
          </div>
        </Container>
      </Box>
    </div>
  );
};

export default HomePage;
