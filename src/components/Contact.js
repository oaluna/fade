import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Container,
  CardContent,
  OutlinedInput,
} from "@mui/material";
import Gradient from "../assets/gradient-bg3.png";

const Contact = () => {
  return (
    <Box component="section" xs={12} sm={12} md={12}>
      <Container xs={12} sm={12} md={12}>
        <Box
          xs={12}
          sm={12}
          md={12}
          sx={{
            mx: 0,
            px: 0,
            backgroundImage: `url(${Gradient})`,
            backgroundBlendMode:
              "soft-light, screen, overlay, overlay, difference, overlay, normal",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "75vh",
            color: "#fff",
          }}
        >
          <CardContent
            xs={12}
            sm={12}
            md={12}
            sx={{
              textAlign: "center",
              backdropFilter: "blur(32px)",
              height: "75vh",
            }}
          >
            <Typography
              component="h4"
              sx={{ fontFamily: "Comfortaa, sans-serif" }}
              variant="h4"
            >
              Sign up for the latest Fade updates!
            </Typography>
            <Typography
              sx={{
                fontFamily: "Comfortaa, sans-serif",
                fontWeight: 300,
                letterSpacing: -0.5,
                py: 5,
              }}
              variant="p"
            >
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
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
