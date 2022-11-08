import React, { useState } from "react";

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

const steps = [
  "Enter Itinerary Details",
  "Get matched with a Route",
  "Subscribe and Ride",
];

const pricings = [
 
  {
    price: "tbd",
    title: "Fade Driver",
    features: ["Post Commute Routes", "Accept subscriptions", "Receive Ratings"],
  },
  {
    price: "tbd",
    title: "Fade Rider",
    features: ["Search the global feed for similar commute", "Request Pickups from Drivers", "Subscribe if needed regularly"],
  },
];


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const HomePage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

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
      <div
        className="hero-bg"
        style={{
          background:
            "linear-gradient(0deg,rgba(255,255,255,1) 0%, rgba(255,255,255,0.95) 15%, rgba(255,255,255,0.5) 45%, rgba(255,255,255,0.25) 55%, rgba(255,255,255,0) 80%)",
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
            backgroundImage:
              "url(https://images.pexels.com/photos/133826/pexels-photo-133826.jpeg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            mixBlendMode: "overlay",
          }}
        ></div>
        <div
          style={{
            width: "50%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
          }}
        >
          <img
            src="https://res.cloudinary.com/dgdnpkfun/image/upload/v1667700415/fade-logo_dnkylf.svg"
            alt="logo"
          />
          <Typography variant="h2" fontWeight="bold" color={"black"}>
            Save time and money spent on your daily commute.
          </Typography>
        </div>
      </div>
      {/* about us */}
      <div className="about">
        <Box sx={{ width: "100%" }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }}>
            <Item
              sx={{ boxShadow: "none", border: "none", marginBottom: "10vh" }}
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
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <Item sx={{ boxShadow: "none", border: "none" }}>
                <img
                  src="https://img.freepik.com/free-vector/carpool-concept-illustration_114360-9268.jpg?w=996&t=st=1667856518~exp=1667857118~hmac=c27919a479071cc85f058d4e24b56236c7f0f498103381380ad8f9a507ecc70f"
                  alt="fade"
                  style={{ objectFit: "cover", width: "100%" }}
                />
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item sx={{ boxShadow: "none", border: "none" }}>
                <img
                  src="https://img.freepik.com/free-vector/man-with-map-smartphone-renting-car-driver-using-car-sharing-app-phone-searching-vehicle-vector-illustration-transport-transportation-urban-traffic-location-app-concept_74855-10109.jpg?w=1060&t=st=1667845830~exp=1667846430~hmac=910c79e8f80493fb65b6d934983457d9e7d810453192502a9784a89431aaeed4"
                  alt="fade"
                  style={{ objectFit: "cover", width: "100%" }}
                />
              </Item>
            </Grid>
            <Grid item xs={6} sx={{ mb: 15 }}>
              <Item sx={{ boxShadow: "none", border: "none" }}>
                <Typography variant="h6">
                  Fade is a carpooling service that aims to reduce the time and
                  money you spend on your daily commute,by encouraging our users
                  to travel together. We aim to unburden you of long bus rides
                  and congested rush hour traffic.
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={6} sx={{ mb: 15 }}>
              <Item sx={{ boxShadow: "none", border: "none" }}>
                <Typography variant="h6">
                  How does it work? Fade matches a rider's daily itinerary with
                  a driver's similar itinerary. If the driver's itinerary works
                  for you, subscribe to their commute times for a small fee to
                  ride with them regularly.{" "}
                </Typography>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
      {/* how it works */}
      <Box sx={{ width: "60%", margin: "0 auto" }}>
        <Stepper activeStep={activeStep}>
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
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {activeStep === 0 && (
              <Box component="section">
                <Container sx={{ py: 10 }} maxWidth="lg">
                  <Grid container alignItems="center" spacing={3}>
                    <Grid item xs={12} md={5}>
                      <Typography component="h1" variant="h3">
                        Enter your Itinerary Details
                      </Typography>
                      <Typography color="text.secondary" sx={{ mt: 4 }}>
                        Enter a pickup address and a dropoff address, as well as
                        the date(s) and time you need to be picked up.
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box
                        alt="hero"
                        component="img"
                        src="https://img.freepik.com/free-vector/city-driver-concept-illustration_114360-1209.jpg?w=996&t=st=1667858164~exp=1667858764~hmac=537375a9c6b69536e785bef685112971c6bb14c6e06c8586dae884acedec01db"
                        sx={{ width: "100%" }}
                      />
                    </Grid>
                  </Grid>
                </Container>
              </Box>
            )}
            {activeStep === 1 && (
              <Box component="section">
                <Container sx={{ py: 10 }} maxWidth="lg">
                  <Grid container alignItems="center" spacing={3}>
                    <Grid item xs={12} md={5}>
                      <Typography component="h1" variant="h3">
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
                        src="https://img.freepik.com/free-vector/man-with-map-smartphone-renting-car-driver-using-car-sharing-app-phone-searching-vehicle-vector-illustration-transport-transportation-urban-traffic-location-app-concept_74855-10109.jpg?w=1060&t=st=1667858235~exp=1667858835~hmac=fd33c14294db89eed2426233cfaa4df8c6f6e66dd8d82eb2aac971099b1d47a6"
                        sx={{ width: "100%" }}
                      />
                    </Grid>
                  </Grid>
                </Container>
              </Box>
            )}
            {activeStep === 2 && (
              <Box component="section">
                <Container sx={{ py: 10 }} maxWidth="lg">
                  <Grid container alignItems="center" spacing={3}>
                    <Grid item xs={12} md={5}>
                      <Typography component="h1" variant="h3">
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
                        src="https://img.freepik.com/free-vector/happy-passenger-looking-out-roof-car-with-hands-up-friends-having-fun-road-trip-together-flat-vector-illustration-summer-vacation-concept-banner-website-design-landing-page_74855-21176.jpg?w=996&t=st=1667858409~exp=1667859009~hmac=8cebfabe29c20ca64184bd4bf78c04f8ba1e913100fd957b425033ec283e8df3"
                        sx={{ width: "100%" }}
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
        bgcolor: "#97C7D2",
        py: 10,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 1 }}>
          <Typography component="h2" variant="h4">
            Signing Up on Fade
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {pricings.map((pricing) => (
            <Grid key={pricing.title} item xs={12} md={6}>
              <Card sx={{boxShadow:"0px 1.5px 4px rgba(0,0,0,0.3)"}}>
                <CardContent>
                  <Typography align="center" component="div" variant="h6">
                    {pricing.title}
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
                      {pricing.price}
                    </Typography>
                  </Box>
                  <Stack spacing={2} sx={{ mt: 4 }}>
                    {pricing.features.map((feature) => (
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
                  <Button fullWidth sx={{ mt: 4 }} variant="outlined">
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
        sx={{ height: "80vh", width: "80vw", mt:25, mb:0, ml:"auto", mr:"auto" }}
      >
        <Carousel 
          renderPrev={({ disabled }) => (
            <Button disabled={disabled}>Prev</Button>
          )}
          renderNext={({ disabled }) => (
            <Button disabled={disabled}>Next</Button>
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
                boxShadow:"0px 1.5px 4px rgba(0,0,0,0.3)",
                overflow: "hidden",
                background: i === 0 ? "black" : "white",
                color: i === 0 ? "white" : "black",
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
                    alt="app store" style={{width:"40%", margin:"25px 15px"}}
                  />
                  <img
                    src="https://miro.medium.com/max/600/1*nZu0dsnlCQltPT1QMCHFAA.png"
                    alt="google play" style={{width:"40%", margin:"25px 15px"}}
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
                    alt="app store" style={{width:"40%", margin:"25px 15px"}}
                  />
                  <img
                    src="https://miro.medium.com/max/600/1*nZu0dsnlCQltPT1QMCHFAA.png"
                    alt="google play" style={{width:"40%", margin:"25px 15px"}}
                  />
                </>
              )}
            </Paper>
          ))}
        </Carousel>
      </Box>
      {/* contact */}
      <Box component="section" sx={{mb:16}}>
      <Container maxWidth="md" sx={{ py: 10 }}>
        <Card
          sx={{ bgcolor: "primary.dark", color: "background.default", py: 6, boxShadow:"0px 1.5px 4px rgba(0,0,0,0.3)" }}
        >
          <CardContent sx={{ textAlign: "center" }}>
            <Typography component="div" sx={{ mb: 2 }} variant="h4">
              Sign up for the latest news about Fade!
            </Typography>
            <Typography component="div" sx={{ mb: 4 }} variant="subtitle1">
              This app is currently in development, but you can subscribe here to receive the latest news about the development of Fade and its services.
            </Typography>
            <OutlinedInput
              id="mail"
              endAdornment={<Button variant="contained">Register</Button>}
              placeholder="E-mail"
              sx={{ bgcolor: "background.default", pr: 0.5 }}
            />
          </CardContent>
        </Card>
      </Container>
    </Box>
    </div>
  );
};

export default HomePage;
