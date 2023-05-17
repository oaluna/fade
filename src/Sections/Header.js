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
  width: 100vw;
margin: 0;
padding: 0
z-index: 10;
 
  .header-content {
    padding: 0 14rem;
	}
`;

export default Header;
