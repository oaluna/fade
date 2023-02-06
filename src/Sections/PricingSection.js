import React from "react";
import styled from "styled-components";
import deviceGalaxyNote from "../assets/deviceGalaxyNote.png";
import gradient from "../assets/gradient-bg3.png";
import iconInstagram from "../assets/icon-instagram.png";
import iconFacebook from "../assets/icon-facebook.png";
import iconTwitter from "../assets/icon-twitter.png";
import { InnerLayout } from "../styles/Layout";
import Fade from "react-reveal/Fade";

const PaymentSection = () => {
  return (
    <PaymentStyled id="pricing">
      <InnerLayout>
        <div data-aos="fade-down-right" className="payment-header">
          <p className="c-para">available to download</p>
          <h3 className="small-heading">No more bumping butts on buses.</h3>
          <div className="app-buttons">
            <Fade left>
              <img
                src="https://miro.medium.com/max/600/1*nZu0dsnlCQltPT1QMCHFAA.png"
                alt="google play"
                style={{ width: "40%", margin: "25px 15px" }}
              />
              <img
                src="https://miro.medium.com/max/600/1*xqT83bMEz92IBYxS9UQNow.png"
                alt="app store"
                style={{ width: "40%", margin: "25px 15px" }}
              />
            </Fade>
          </div>
          <div className="share">
            <form className="share-links">
              <div className="form-group">
                <input
                  name="share"
                  type="text"
                  value="Carpool smarter with Fade - Try it Today! shorturl.at/cgx36"
                />
                <div className="social-icon-container">
                  <img src={iconFacebook} alt="" className="social-icon" />
                  <img src={iconInstagram} alt="" className="social-icon" />
                  <img src={iconTwitter} alt="" className="social-icon" />
                </div>
              </div>
              <br />
              <label htmlFor="share" value="">
                Share the link above and invite your friends to join Fade.
              </label>
            </form>
          </div>
        </div>

        <div className="card-con">
          <Fade right>
            <img src={deviceGalaxyNote} alt="" />
          </Fade>
        </div>
      </InnerLayout>
    </PaymentStyled>
  );
};

const PaymentStyled = styled.section`
  background-image: url(${gradient});
  background-size: cover;
  mix-blend-mode: blur(10px);
  max-height: 85vh;
  overflow-y: hidden;
  position: relative;
  margin-top: 20vh;
  z-index: 0;
  .card-con {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3rem;
    padding-top: 6.4rem;
    z-index: 0;
    img {
      position: absolute;
      top: -10vh;
      right: 13vw;
    }
    .app-buttons {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
    }
    @media screen and (max-width: 689px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  .payment-header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 6rem;
    width: 45%;
  }
  p {
    text-align: center;
    text-transform: uppercase;
    color: var(--neutral-light);
  }
  h3 {
    z-index: 1;
    color: var(--neutral-light);
    text-align: left;
  }
  .share {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 5rem;
    .form-group {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    input {
      width: 25rem;
      background: transparent;
      border: 1px solid var(--primary);
      border-radius: 4px;
      padding: 5px;
      color: #ffffff;
      height: 1.5rem;
    }
    label {
      color: #ffffff;
      font-size: 10px;
      text-transform: uppercase;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      text-align: left;
      padding-top: 0rem;
    }
    .social-icon-container {
      img {
        width: 32px;
        height: 32px;
      }

      width: auto;
    }
  }
`;

export default PaymentSection;
