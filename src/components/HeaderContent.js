import React from "react";
import styled from "styled-components";
import SecondaryButton from "./SecondaryButton";
import deviceFrames from "../assets/deviceFrames.png";
import logo from "../assets/fade-logo.svg";
import Fade from "react-reveal/Fade"

const HeaderContent = () => {



  return (
    <HeaderContentStyled>
      <div className="left-content">
          <div className="left-text-container">
       <Fade left>
            <img src={logo} alt="" />
            <p className="white">
              Save time and money spent on your daily commute.
            </p>
            <br />
            <SecondaryButton name="Learn More" />
            </Fade>
          </div>
      </div>

      <div className="right-content">
       <Fade right>
          <img src={deviceFrames} alt="" className="phone" />
          </Fade>
      </div>
    </HeaderContentStyled>
  );
};

const HeaderContentStyled = styled.div`
 display: flex;
 flex-direction:row;
 align-items:center;
 justify-content:space-evenly;
padding: 2rem 0;
  max-width: 100%:
  height: 100vh;

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }

  .left-content {
  height: 100%;
   max-width: 100%;
   margin-right: 25rem;

    @media screen and (max-width: 480px) {
      width: 100%;
    
    }

    img {
      height: 8rem;
      width: 30vw;
      @media screen and (max-width: 700px) {
        font-size: 3rem;
      }
    }
    .white {
      color: #fff;
      line-height: 2rem;
    }
  }
  .right-content {
max-width: 100%;
    height: 100%;
    overflow-y: hidden;

    img {
height: 75vh;
   z-index: 10;
    }
  }

  
`;

export default HeaderContent;