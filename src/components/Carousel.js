import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import Carousel, { carouselClasses } from "mui-carousel";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const CarouselComponent = () => {
  return (
    <Box
      component="section"
      xs={12}
      sm={12}
      md={12}
      sx={{
        height: "100vh",
      }}
    >
      <Carousel
        renderPrev={({ disabled }) => (
          <Box
            component="button"
            disabled={disabled}
            sx={{
              width: "24px",
              height: "50vh",
              p: 0,
              mx: 0,
              my: 5,
              background: "rgba(0,0,0,0.05)",
              border: "none",
            }}
          >
            <ArrowLeftIcon
              size="small"
              sx={{
                color: "#2afbff",
              }}
            />
          </Box>
        )}
        renderNext={({ disabled }) => (
          <Box
            component="button"
            disabled={disabled}
            sx={{
              width: "24px",
              height: "50vh",
              p: 0,
              mx: 0,
              my: 5,
              background: "rgba(0,0,0,0.05)",
              border: "none",
            }}
          >
            <ArrowRightIcon
              size="small"
              sx={{
                color: "#2afbff",
              }}
            />
          </Box>
        )}
        renderDot={({ current }) => (
          <Box
            component="button"
            sx={{ width: "12px", height: "12px", borderRadius: 0.5 }}
          />
        )}
        dots={true}
        showSlides={1}
        speed={1000 * 1}
        spacing={0}
        center={true}
        autoPlay={false}
        infinity // prev slide animation is broken (fixed in future)
        // value={slide}
        // onChange={(rawSlide, slide) => console.log("slide", slide)}
        pauseOnHover
        centerMode
        transitionDuration={1000}
        disableTransition={false}
        sx={{
          width: "100%",
          [`& .${carouselClasses.list}`]: {},

          [`& .${carouselClasses.item} > *`]: {
            transition: "all 0.5s",
          },
          [`& .${carouselClasses.itemActive} > *`]: {},
          [`& .${carouselClasses.center} > *`]: {
            mr: 15,
            ml: -5,
            width: "100vw",
            transform: "scale(0.8)",
          },
        }}
      >
        {new Array(2).fill(0).map((_, i) => (
          <Paper
            xs={12}
            sm={12}
            md={12}
            key={`item-${i}`}
            sx={{
              width: "100%",
              height: 230,
              mx: 1,
              p: 2,
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
  );
};

export default CarouselComponent;
