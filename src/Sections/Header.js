import React from "react";

import styled from "styled-components";
import HeaderContent from "../components/HeaderContent";
import Navigation from "../components/Navigation";
import gradient from "../assets/gradient-bg3.png";

const Header = () => {
  return (
    <HeaderStyled id="header">
        <Navigation />
      <div className="header-content">
        <HeaderContent />
      </div>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
 background-image: url(${gradient}); 
 background-size: cover;
 background-repeat:no-repeat;
 
margin: 0;
padding: 0
z-index: 10;
 
  .header-content {
    padding: 0;
	}
 
`;

export default Header;
