import React, { useState } from "react";
import {
  Container,
  Box,
  Grid,
  Typography,
  Button,
  Stepper,
  Step,
  StepLabel,
  Stack,
} from "@mui/material";
import Item from "@mui/material/Grid";
import DeviceDual from "../assets/deviceDual.png";
import DeviceHome from "../assets/deviceHome.png";
import DeviceRouteOptions from "../assets/deviceRouteOptions.png";

const steps = [
  "Enter Itinerary Details",
  "Get matched with a Route",
  "Subscribe and Ride",
];

const HowItWorks = ({ children }) => {
  const [activeStep, setActiveStep] = useState(1);
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
    <>
      <Box xs={12} sm={12} md={12} sx={{ height: "140vh", mb: 10 }}>
        <Grid container xs={12}>
          <Item xs={12}>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Comfortaa",
                fontSize: 20,
                textAlign: "center",
                mt: 15,
                mb: 5,
                fontWeight: 800,
              }}
            >
              How Fade Works
            </Typography>
          </Item>
        </Grid>
        <Stepper
          activeStep={activeStep}
          sx={{ display: "flex", alignItems: "center", color: "#2afbff" }}
        >
          {steps.map((label, index) => {
            const stepProps = {
              textAlign: "left",
            };
            const labelProps = {};

            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>

        <Grid xs={12} sm={12} md={12}>
          {activeStep === 0 && (
            <React.Fragment>
              <Box
                component="section"
                xs={12}
                sm={12}
                md={12}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",

                  mx: "auto",
                }}
              >
                <Container maxWidth="lg">
                  <Grid
                    container
                    alignItems="center"
                    xs={12}
                    sm={12}
                    md={12}
                    sx={{ my: 10 }}
                  >
                    <Grid item xs={12} sm={12} md={12}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: 12,
                          fontFamily: "Comfortaa",
                          my: 0,
                          letterSpacing: -0.5,
                          lineHeight: 1,
                          fontWeight: 500,
                          textAlign: "left",
                          height: "150px",
                        }}
                      >
                        Enter a pickup address and a dropoff address, as well as
                        the date(s) and time(s) you need to be picked up.
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={12}
                      sx={{
                        height: { xs: "50%", sm: "50%", md: "50%" },
                        mt: { xs: -15, sm: -15, md: -15 },
                      }}
                    >
                      <Box
                        xs={12}
                        sm={12}
                        md={12}
                        alt="hero"
                        component="img"
                        src={DeviceRouteOptions}
                        sx={{
                          objectFit: "contain",
                          maxWidth: "100%",
                          height: "350px",
                          mt: { xs: -15, sm: -15, md: -15 },
                          py: 0,
                          clipPath: "inset(50% 0% 0% 0%)",
                        }}
                      />
                    </Grid>
                  </Grid>
                </Container>
              </Box>
              <Box xs={2} sm={2} md={2}>
                <Button color="inherit" onClick={handleBack}>
                  Back
                </Button>
              </Box>
              <Box xs={2} sm={2} md={2}>
                <Button
                  onClick={handleNext}
                  sx={{
                    background: "transparent",
                  }}
                >
                  Next
                </Button>
              </Box>
            </React.Fragment>
          )}
          {activeStep === 1 && (
            <React.Fragment>
              <Box
                component="section"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Container maxWidth="lg">
                  <Grid container alignItems="center" spacing={3}>
                    <Grid item xs={12} sm={12} md={12}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: 12,
                          fontFamily: "Comfortaa",
                          py: 5,
                          letterSpacing: -0.5,
                          lineHeight: 1,
                          fontWeight: 500,
                          textAlign: "left",
                          height: "150px",
                        }}
                      >
                        <strong>Fade</strong> will match you with drivers whose
                        commutes are the closest matches to your needs, then
                        select the one that works best for you.
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={12}
                      sx={{
                        height: { xs: "50%", sm: "50%", md: "50%" },
                        mt: { xs: -15, sm: -15, md: -15 },
                      }}
                    >
                      <Box
                        alt="hero"
                        component="img"
                        src={DeviceHome}
                        sx={{
                          objectFit: "contain",
                          maxWidth: "100%",
                          height: "300px",
                          py: 5,
                        }}
                      />
                    </Grid>
                  </Grid>
                </Container>
              </Box>
              <Box xs={3} sm={3} md={3}>
                <Button color="inherit" onClick={handleBack}>
                  Back
                </Button>
              </Box>
              <Box xs={3} sm={3} md={3}>
                <Button
                  onClick={handleNext}
                  sx={{
                    background: "transparent",
                  }}
                >
                  Next
                </Button>
              </Box>
            </React.Fragment>
          )}
          {activeStep === 2 && (
            <React.Fragment>
              <Box
                component="section"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Container maxWidth="lg">
                  <Grid container alignItems="center" spacing={3}>
                    <Grid item xs={12} sm={12} md={12}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: 12,
                          fontFamily: "Comfortaa",
                          py: 5,
                          letterSpacing: -0.5,
                          lineHeight: 1,
                          fontWeight: 500,
                          textAlign: "left",
                          height: "150px",
                        }}
                      >
                        If the commute works out for both driver and rider, you
                        can subscribe to a <strong>Fade</strong> driver's route
                        and ride with them regularly.
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                      <Box
                        alt="hero"
                        component="img"
                        src={DeviceDual}
                        sx={{
                          objectFit: "contain",
                          maxWidth: "100%",
                          height: "300px",
                          py: 5,
                          mt: { xs: -15, sm: -15, md: -15 },
                        }}
                      />
                      <Stack
                        direction="row"
                        xs={6}
                        sm={6}
                        md={6}
                        sx={{ pb: 2 }}
                      >
                        <Box
                          component="button"
                          sx={{
                            width: "50%",
                            borderRadius: "5px",
                            boxShadow: "0px 0.5px 4px rgba(0,0,0,0.2)",
                            padding: "5%",
                            mx: 1,
                            fontFamily: "Comfortaa, sans-serif",
                            letterSpacing: -0.5,
                            fontWeight: 700,
                            backgroundColor: "#01000e",
                            color: "#fff",
                            border: "none",
                          }}
                        >
                          Rider Sign-Up
                        </Box>
                        <Box
                          component="button"
                          sx={{
                            width: "50%",
                            borderRadius: "5px",
                            boxShadow: "0px 0.5px 4px rgba(0,0,0,0.2)",
                            padding: "5%",
                            mx: 1,
                            fontFamily: "Comfortaa, sans-serif",
                            letterSpacing: -0.5,
                            fontWeight: 700,
                            color: "#01000e",
                            backgroundColor: "#2afbff",
                            border: "none",
                          }}
                        >
                          Driver Sign-Up
                        </Box>
                      </Stack>
                    </Grid>
                  </Grid>
                </Container>
              </Box>
              <Box xs={2} sm={2} md={2}>
                <Button color="inherit" onClick={handleBack}>
                  Back
                </Button>
              </Box>
              <Box xs={2} sm={2} md={2}>
                <Button
                  onClick={handleReset}
                  sx={{
                    background: "transparent",
                  }}
                >
                  Reset
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Grid>
      </Box>
    </>
  );
};

export default HowItWorks;
