
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import FadeLogo from "../assets/fade-logo.svg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Footer() {
  return (
    <Box sx={{ flexGrow: 1, paddingTop: 20 }}>
      <Grid container spacing={2}>
        <Grid xs={12} md={5} lg={4}>
          <Item
            style={{
              border: "none",
              boxShadow: "none",
              background: "transparent",
            }}
          >
            <img src={FadeLogo} alt="Fade" style={{ width: 150 }} />
          </Item>
        </Grid>
        <Grid container xs={12} md={7} lg={8} spacing={4}>
          <Grid xs={6} lg={3}>
            <Item
              sx={{
                boxShadow: "none",
                border: "none",
                background: "transparent",
              }}
            >
              <Box
                id="category-a"
                sx={{ pl: 2, listStyle: "none", textAlign:"left", fontFamily: "Comfortaa, sans-serif"}}
              >
                Our Product
              </Box>
              <Box
                component="ul"
                aria-labelledby="category-a"
                sx={{ pl: 2, listStyle: "none", textAlign:"left", fontFamily: "Comfortaa, sans-serif"}}
              >
                <li>Link 1.1</li>
                <li>Link 1.2</li>
                <li>Link 1.3</li>
              </Box>
            </Item>
          </Grid>
          <Grid xs={6} lg={3}>
            <Item
              sx={{
                boxShadow: "none",
                border: "none",
                background: "transparent",
              }}
            >
              <Box
                component="ul"
                aria-labelledby="category-b"
                sx={{ pl: 2, listStyle: "none", textAlign:"left", fontFamily: "Comfortaa, sans-serif"}}
              >
                Accounts
              </Box>
              <Box
                component="ul"
                aria-labelledby="category-b"
                sx={{ pl: 2, listStyle: "none", fontFamily: "Comfortaa, sans-serif", textAlign:"left" }}
              >
                <li>Link 2.1</li>
                <li>Link 2.2</li>
                <li>Link 2.3</li>
              </Box>
            </Item>
          </Grid>
          <Grid xs={6} lg={3}>
            <Item
              sx={{
                boxShadow: "none",
                border: "none",
                background: "transparent",
              }}
            >
              <Box
                id="category-c"
                sx={{ pl: 2, listStyle: "none", textAlign:"left", fontFamily: "Comfortaa, sans-serif"}}
              >
                Resources
              </Box>
              <Box
                component="ul"
                aria-labelledby="category-c"
                sx={{ pl: 2, listStyle: "none", textAlign:"left", fontFamily: "Comfortaa, sans-serif"}}
              >
                <li>Link 3.1</li>
                <li>Link 3.2</li>
                <li>Link 3.3</li>
              </Box>
            </Item>
          </Grid>
          <Grid xs={6} lg={3}>
            <Item
             sx={{ pl: 2, listStyle: "none", textAlign:"left", fontFamily: "Comfortaa, sans-serif"}}
            >
              <Box
                id="category-d"
                sx={{ pl: 2, listStyle: "none", textAlign:"left", fontFamily: "Comfortaa, sans-serif"}}
              >
                Contact
              </Box>
              <Box
                component="ul"
                aria-labelledby="category-d"
                sx={{ pl: 2, listStyle: "none" }}
              >
                <li><strong>Phone</strong>: (415)123-4567</li>
               
                <li><strong>Email</strong>: support@fade.ride</li>
              </Box>
            </Item>
          </Grid>
        </Grid>
        <Grid
          xs={12}
          container
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ xs: "column", sm: "row" }}
          sx={{ fontSize: "12px" }}
        >
          <Grid sx={{ order: { xs: 2, sm: 1 } }}>
            <Item sx={{ boxShadow: "none", border: "none", pl: 10, background:"transparent" }}>
              © 2022 by <a href="https://oscarluna.dev">Oscar Armando Luna</a>
            </Item>
          </Grid>
          <Grid container columnSpacing={1} sx={{ order: { xs: 1, sm: 2 } }}>
            <Grid>
              <Item
                sx={{
                  boxShadow: "none",
                  border: "none",
                  background: "transparent",
                }}
              >
                Careers
              </Item>
            </Grid>
            <Grid>
              <Item
                sx={{
                  boxShadow: "none",
                  border: "none",
                  background: "transparent",
                }}
              >
                Privacy Policy
              </Item>
            </Grid>
            <Grid>
              <Item
                sx={{
                  boxShadow: "none",
                  border: "none",
                  background: "transparent",
                }}
              >
                Support
              </Item>
            </Grid>
            <Grid xs={12} sm={12} md={12}>
              <Item xs={5} sm={5} md={5} sx={{ boxShadow: "none", border: "none", background: "transparent" }}>
             
                
                <img
                  src="https://miro.medium.com/max/600/1*xqT83bMEz92IBYxS9UQNow.png"
                  alt="app store"
                  style={{ width: "40%", margin: "25px 15px" }}
                />
                </Item>
            </Grid>
            <Grid>
              <Item
               xs={5} sm={5} md={5} sx={{ boxShadow: "none", border: "none", background: "transparent" }}>
                
                <img
                  src="https://miro.medium.com/max/600/1*nZu0dsnlCQltPT1QMCHFAA.png"
                  alt="google play"
                  style={{ width: "40%", margin: "25px 15px" }}
                />
                </Item>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Footer;
