import React, { useState } from "react";
import styled from "styled-components";

import Hero from "../components/Hero";
import About from "../components/About";
import HowItWorks from "../components/HowItWorks";
import Accounts from "../components/Accounts";
import CarouselComponent from "../components/Carousel";
import Contact from "../components/Contact";

import "./Home.css";

const HomePageStyles = styled.div`
  text-align: center;
  width: 100vw;
  overflow-x: hidden;
`;

const HomePage = () => {
  return (
    <HomePageStyles>
      <Hero />
      <About />
      <HowItWorks />
      <Accounts />
      <CarouselComponent />
      <Contact />
    </HomePageStyles>
  );
};

export default HomePage;
