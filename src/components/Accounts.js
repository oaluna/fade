import React from "react";
import {
  Box,
  Grid,
  Typography,
  Container,
  CardContent,
  Card,
  Button,
  Stack,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import Gradient from "../assets/gradient-bg3.png";
import DriverIcon from "../assets/icon-driver.png";
import PassengerIcon from "../assets/icon-passenger.png";

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

const Accounts = () => {
  return (
    <>
      <Box
        xs={12}
        sm={12}
        md={12}
        component="section"
        style={{
          backgroundImage: `url(${Gradient})`,
          backgroundBlendMode:
            "soft-light, screen, overlay, overlay, difference, overlay, normal",
          backgroundSize: "cover",
          objectFit: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          position: "relative",
          width: "100%",
          minHeight: { xs: "220vh", sm: "220vh", md: "220vh", lg: "100vh" },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            backdropFilter: "blur(12px)",
            width: "100%",
            height: { xs: "220vh", sm: "220vh", md: "220vh", lg: "100vh" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            py: 10,
          }}
        >
          <Box xs={12} sm={12} md={12} sx={{ textAlign: "center", mb: 1 }}>
            <Typography
              variant="h3"
              color="#fff"
              sx={{
                fontFamily: "Comfortaa",
                fontSize: 20,
                textAlign: "center",
                py: 5,
                fontWeight: 800,
              }}
            >
              Signing Up for Fade
            </Typography>
          </Box>
          <Grid container xs={12} sm={12} md={12}>
            {accountTypes.map((account) => (
              <Grid key={account.title} item xs={12} sm={12} md={12}>
                <Card
                  xs={10}
                  sm={10}
                  md={10}
                  sx={{
                    boxShadow: "0px 1.5px 4px rgba(26,9,13,0.3)",
                    border: "none",
                    backgroundColor: "#000040",
                  }}
                >
                  <CardContent xs={10} sm={10} md={10}>
                    <Typography
                      align="center"
                      component="div"
                      variant="h6"
                      color="#fff"
                      sx={{ fontFamily: "Comfortaa, sans-serif" }}
                    >
                      {account.title}
                    </Typography>
                    <img
                      src={account.id === 0 ? DriverIcon : PassengerIcon}
                      alt="account icon"
                      style={{ width: "85%", height: "auto" }}
                    />
                    <Stack xs={10} sm={10} md={10} sx={{ mt: 4 }}>
                      {account.features.map((feature) => (
                        <Box
                          key={feature}
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <CheckIcon sx={{ mr: 2, color: "#2afbff" }} />
                          <Typography
                            textAlign="left"
                            variant="p"
                            color="#fff"
                            sx={{
                              fontFamily: "Comfortaa, sans-serif",
                              fontWeight: 200,
                            }}
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
                      Download
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Accounts;
