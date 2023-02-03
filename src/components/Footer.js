import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layout";
import logo from "../assets/app-icon.png";

const Footer = () => {
  return (
    <FooterStyled>
      <InnerLayout>
        <div className="footer-con">
          <div className="footer-left">
            <span className="links">
              <a href="/">Home</a>
              <a href="https://oscarluna.dev">oscarluna.dev</a>
              <a href="/howItWorks">How It Works</a>
            </span>
          </div>
          <div className="footer-center">
            <div className="logo-wrap">
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="footer-right">
          <span className="links">
              <a href="/">Pricing</a>
              <a href="/aboutUs">About</a>
             
            </span>
          </div>
        </div>
      </InnerLayout>
    </FooterStyled>
  );
};
const FooterStyled = styled.footer`
  background: radial-gradient(0% 0%, #180b41 0%, #000040 50%, #01000e 100%);
  height: 15vh;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100vw;
  margin-top: -5vh;
  overflow-y: hidden;
  z-index: 1;

  @media screen and (max-width: 1347px) {
    padding: 5rem 14rem;
  }
  @media screen and (max-width: 1186px) {
    padding: 5rem 8rem;
  }
  @media screen and (max-width: 990px) {
    padding: 5rem 4rem;
  }

  .footer-con {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100vw;

    @media screen and (max-width: 480px) {
      grid-template-columns: repeat(1, 1fr);
      .logo-wrap {
        margin: 0 auto;
      }
    }
  }
  .footer-right {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    padding-right: 0;
    a {
      color: #fff;
      font-size: 12px;
    }
  }
  .footer-center {
width: 100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    img {
      width: 32px;
      height: 32px;
    }
  }
  .footer-left {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    padding-left: 6.5rem;
  }
  .links {
    color: #ffffff;
    width: 100%;
    display: flex;
    flex-direction: row;

    a {
      display: flex;
      flex-direction: row;
      flex-wrap:wrap;
      align-items: center;
      justify-content: space-between;
      padding: 0 5rem 0 0;
      font-size: 12px;
      text-transform: uppercase;
      
    }
  }
`;

export default Footer;
