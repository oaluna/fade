import React from "react";

import styled from "styled-components";
import HeaderContent from "../components/HeaderContent";
import Navigation from "../components/Navigation";
import gradient from "../assets/gradient-bg3.png";

const Header = () => {
  return (
    <HeaderStyled id="header">
      <div className="header-content">
        <Navigation />
        <HeaderContent />
      </div>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  height: 100vh;
  width: 100%;

  background-image: url(${gradient});

  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 100%;
  .header-content {
    padding: 0 10rem;

    @media screen and (max-width: 1347px) {
      padding: 5rem 14rem;
    }
    @media screen and (max-width: 1186px) {
      padding: 5rem 8rem;
    }
    @media screen and (max-width: 990px) {
      padding: 5rem 4rem;
    }
    @media screen and (max-width: 768px) {
      padding: 5rem 2rem;
    }
    @media screen and (max-width: 485px) {
      padding: 4rem 1rem;
    }
    @media screen and (max-width: 350px) {
      padding: 0;
    }
  }
`;

export default Header;
