import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import PrimaryButton from "./PrimaryButton";
import logo from "../assets/app-icon.png";

const Navigation = () => {
  return (
    <NavigationStyled>
    
      <ul>
      <li>
        <img src={logo} alt="" style={{maxWidth:"32px"}}/>
      </li>
        <li>
          <Link to="header" spy={true} smooth={true}>
            Home{" "}
          </Link>
        </li>
        <li>
          <Link to="features" spy={true} smooth={true}>
            Features{" "}
          </Link>
        </li>
        <li>
          <Link to="pricing" spy={true} smooth={true}>
            Pricing{" "}
          </Link>
        </li>
      </ul>
      <PrimaryButton name="Signup" />
    </NavigationStyled>
  );
};

const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  width: 100%;
  z-index: 2;
  position: relative;
 img: {
width: 32px;
height: 32px;
}
  ul {
    display: flex;
    justify-content: space-between;
    width: 40%;
    li {
      cursor: pointer;
    }
  }
`;

export default Navigation;
