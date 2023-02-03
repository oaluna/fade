import React from "react";
import styled from "styled-components";
import { Animate, AnimateKeyframes, AnimateGroup } from "react-simple-animate";
import SecondaryButton from "./SecondaryButton";
import deviceFrames from "../assets/deviceFrames.png";
import logo from "../assets/fade-logo.svg";

const HeaderContent = () => {
  return (
    <HeaderContentStyled>
      <div className="left-content">
        <div className="left-text-container">
          <Animate play start={{opacity: 0, transform: "translateX(-2rem)"}} end={{opacity: 1, transform: "translateX(0)"}} duration={1.5} sequenceIndex={0}>
            <img src={logo} alt="" />
          </Animate>
          <p className="white">
            Save time and money spent on your daily commute.
          </p>
          <br />
          <SecondaryButton name="Learn More" />
        </div>
      </div>
      
      <div className="right-content">
      <Animate play start={{opacity: 0, transform: "translateX(-2rem) rotate(20deg)"}} end={{opacity: 1, transform: "translateX(0) rotate(0deg)"}} duration={1.5} sequenceIndex={1}>
        <img src={deviceFrames} alt="" className="phone" />
        </Animate>
      </div>
    </HeaderContentStyled>
  );
};

// const Bounce=styled.h1`
//    animation: 3s ${keyframes`${bounce}`} infinite;
// `

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

  .left-content {
  height: 100%;
   max-width: 30vw;
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
max-width: 70vw;
width: 100%:
    height: 100vh;
    overflow-y: hidden;

    img {
height: 75vh;
   z-index: 10;
    }
  }

  
`;

export default HeaderContent;
