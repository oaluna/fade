import React from "react";
import styled from "styled-components";
import Icon from "../assets/app-icon.png";
// For styling any nested component, Overlay use the styled method.
// This method works perfectly on all of your any third-party component, as long as they attach the passed className prop to a DOM element.
// Here an example: https://gist.github.com/Miniplop/80b042d1b44293329ef7332fd47b770c

// Nested component imports
import HeaderButtonComponent from "./HeaderButton";

const Header = styled.div`
  display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 30px 115px;
gap: 868px;

position: relative;
width: 1400px;
height: 100px;

`;
const AppIcon1 = styled.img`
  max-width: 32px;
  height: 34.23px;
  margin-top: 5px;
  margin-right: 868px;
`;
const Menu = styled.div`
  display: flex;
  align-items: flex-start;
`;
const Link = styled.p`
  width: 12.22%;
  font-family: "Comfortaa";
  font-size: 14px;
  font-weight: 400;
  line-height: 10px;
  color: ${props => props.theme.colors.primary};
  margin-top: 9.4px;
  margin-right: 42px;
`;
const Link2 = styled.p`
  width: 16.67%;
  font-family: "Comfortaa";
  font-size: 14px;
  font-weight: 400;
  line-height: 10px;
  color: ${props => props.theme.colors.primary};
  margin-top: 9.4px;
  margin-right: 42px;
`;
const StyledHeaderButton = styled(HeaderButtonComponent)``;

const HeaderComponent = () => {
  return (
    <Header>
      <Menu>
      <AppIcon1
        alt=""
        src={Icon}
      />
        <Link>Tour</Link>
        <Link2>About</Link2>
        <StyledHeaderButton />
      </Menu>
    </Header>
  );
};

export default HeaderComponent;