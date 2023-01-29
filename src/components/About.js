import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Item from "@mui/material/Grid";
import DeviceGalaxyNote from "../assets/deviceGalaxyNote.png";
import DeviceHomeDual from "../assets/deviceHomeDual.png";

const About = () => (
  <>
    <Box xs={12} sm={12} md={12}>
      <Grid container xs={12} sm={12} md={12}>
        <Item xs={12} sm={12} md={12} sx={{ mt: 15 }}>
          <Typography
            variant="h3"
            sx={{
              width: "100vw",
              fontFamily: "Comfortaa",
              fontSize: "20px",
              textAlign: "center",
              fontWeight: 800,
            }}
          >
            What is Fade?
          </Typography>
        </Item>
      </Grid>
    </Box>

    <Box xs={12} sm={12} md={12}>
      <Grid container xs={12} sm={12} md={12}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          sx={{ display: "flex", flexDirection: "row", px: 1, my: 10 }}
        >
          <Item
            xs={8}
            sm={8}
            md={8}
            sx={{
              boxShadow: "none",
              background: "transparent",
              border: "none",
            }}
          >
            <Box
              component="img"
              src={DeviceGalaxyNote}
              alt="fade"
              sx={{
                maxWidth: "100%",
                transform: "scale(1.5) rotate(-15deg)",
                ml: -12,
                mt: 4,
              }}
            />
          </Item>

          <Item
            xs={5}
            sm={5}
            md={5}
            sx={{
              boxShadow: "none",
              background: "transparent",
              border: "none",
              mr: 2,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: 12,
                fontFamily: "Comfortaa",
                pl: 2,
                letterSpacing: -0.5,
                lineHeight: 1,
                fontWeight: 500,
                textAlign: "left",
              }}
            >
              <strong>Fade</strong> is a carpooling service that aims to reduce
              the time and money you spend on your daily commute,by encouraging
              our users to travel together. We aim to unburden you of long bus
              rides and congested rush hour traffic.
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
    <Box xs={12} sm={12} md={12}>
      <Grid container xs={12} sm={12} md={12}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          sx={{ display: "flex", flexDirection: "row", px: 1, my: 10 }}
        >
          <Item
            xs={5}
            sm={5}
            md={5}
            sx={{
              boxShadow: "none",
              background: "transparent",
              border: "none",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: 12,
                fontFamily: "Comfortaa",
                pl: 2,
                letterSpacing: -0.5,
                lineHeight: 1,
                fontWeight: 500,
                textAlign: "left",
              }}
            >
              How does it work? Fade matches your itinerary with the closest
              match available among Drivers. Once matched, you may subscribe to
              the driver's driving route, if their daily schedule works with
              yours. Now you have a small group that you carpool with. Yay!
            </Typography>
          </Item>

          <Item
            xs={7}
            sm={7}
            md={7}
            sx={{
              boxShadow: "none",
              background: "transparent",
              border: "none",
            }}
          >
            <Box
              component="img"
              src={DeviceHomeDual}
              alt="fade"
              sx={{ maxWidth: "100%", transform: "scale(1.5)", ml: 7 }}
            />
          </Item>
        </Grid>
      </Grid>
    </Box>
  </>
);

export default About;
