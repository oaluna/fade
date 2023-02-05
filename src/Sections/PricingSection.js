import React from "react";
import styled from "styled-components";
import deviceGalaxyNote from "../assets/deviceGalaxyNote.png";
import gradient from "../assets/gradient-bg3.png";
import { InnerLayout } from "../styles/Layout";
import Fade from "react-reveal/Fade"

const PaymentSection = () => {
  return (
    <PaymentStyled id="pricing">
      <InnerLayout>
        <div data-aos="fade-down-right" className="payment-header">
          <p className="c-para">available to download</p>
          <h3 className="small-heading">
            No more bumping butts on buses.
          </h3>
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
        </div>
        <div className="card-con">
        <Fade right>
         <img src={deviceGalaxyNote}  alt="" />
         </Fade>
        </div>
      </InnerLayout>
    </PaymentStyled>
  );
};

const PaymentStyled = styled.section`
background-image: url(${gradient});
background-size: cover;
max-height: 85vh;
overflow-y: hidden;
position:relative;
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
      display:flex;
      flex-direction:row;
      align-items:center;
      justify-content:space-evenly;
   }
    @media screen and (max-width: 689px) {
      grid-template-columns: repeat(1, 1fr);
    }
    
  }
  .payment-header {
   display: flex;
   flex-direction: column;
   align-items:flex-start;
   padding-left: 6rem;
   width: 45%;
  }
  p {
    text-align: center;
    text-transform: uppercase;
    color: var(--neutral-light);
  }
  h3 {
   z-index:1;
   color: var(--neutral-light);
   text-align:left;
  }
`;

export default PaymentSection;
