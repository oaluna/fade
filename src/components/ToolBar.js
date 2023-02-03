import React from "react";
import styled from "styled-components";
import PrimaryButton from "../components/button/PrimaryButton";
import SecondaryButton from "./button/SecondaryButton";
import Navigation from "./Navigation";
import logo from "../assets/fade-logo-alt.png";
import gradient from "../assets/gradient-bg3.png";
import deviceFrames from "../assets/deviceFrames.png";

const HeaderContent = () => {
  return (
    <HeaderContentStyled>
      <div className="left-content">
        <div className="left-text-container">
          <div className="logo-container" data-aos="zoom-in-right">
            <img src={logo} alt="" />
          </div>
          <p className="white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            delectus architecto sed, corrupti sint nobis cumque numquam
            provident molestias nemo sequi. Accusantium neque laboriosam nemo
            fugit fuga. At, rem sed.
          </p>
          <SecondaryButton name="Registered now" />
        </div>
      </div>
      <div className="right-content">
        <img src={deviceFrames} alt="" className="phone" />
      </div>
    </HeaderContentStyled>
  );
};

const HeaderContentStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 3rem;
  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
  .left-content {
    display: flex;
    align-items: center;
    padding-right: 3rem;
    @media screen and (max-width: 480px) {
      width: 100%;
    }
    .logo-container {
      max-width: 50vw;
      @media screen and (max-width: 700px) {
        font-size: 3rem;
      }
    }
    .white {
      color: #fff;
      line-height: 1.8rem;
    }
  }
  .right-content {
    position: relative;
    display: flex;
    justify-content: center;

    .phone {
      width: 80%;
    }
    .ring1 {
      position: absolute;
      bottom: 10%;
      right: 0;
      left: auto;
      animation: move2 20s infinite;
      transition: all 0.4s ease-in-out;
    }
    .message1 {
      position: absolute;
      top: 0;
      right: 0;
      left: auto;
      animation: move 5s infinite;
      transition: all 0.4s ease-in-out;
    }
    .message2 {
      position: absolute;
      bottom: 15%;
      left: 0;
      transition: all 0.4s ease-in-out;
      animation: move 8s infinite;
      animation-delay: 0.5s;
      transition: all 0.4s ease-in-out;
    }
  }
  .message1 {
    @keyframes move {
      0% {
        transform: translateY(0) rotate(0) scale(0.3) translateX(0);
      }
      50% {
        transform: translateY(-10px) rotate(20deg) scale(0.4) translateX(10px);
      }
      100% {
        transform: translateY(0) rotate(0deg) scale(0.5) translateX(0);
      }
    }
    @keyframes move2 {
      0% {
        transform: translateY(0) rotate(0) scale(1) translateX(0);
      }
      50% {
        transform: translateY(-10px) rotate(60deg) scale(1.1) translateX(10px);
      }
      100% {
        transform: translateY(0) rotate(0deg) scale(1) translateX(0);
      }
    }
  }
`;

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
  min-height: 100vh;
  width: 100%;
  background: transparent;
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
  }
`;

export default Header;
