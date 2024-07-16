import React, { useRef } from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layout";
import Fade from "react-reveal/Fade"
import deviceHomeDual from "../assets/deviceHomeDual.png";

const featureList = [
  {
    id: 0,
    header: "How does it work?",
    body: "Fade matches your itinerary with the closest match available among Drivers.",
  },
  {
    id: 1,
    header: "Matching drivers and riders",
    body: "Once matched, you may subscribe to the driver's driving route, if their daily schedule works with yours.",
  },
  {
    id: 2,
    header: "Never run after a bus again",
    body: "With more people carpooling together, there could be less traffic overall. No more flipping off Uber cars.",
  },
];


const CardSection = () => {

  return (
    <CardSectionStyled id="card">
      <InnerLayout>
        <div className="card-header">
          <h2
            data-aos="fade-right"
            data-aos-duration="3000"
            className="secondary-heading"
          >
            What is Fade?
          </h2>
        </div>
        <div className="card-container">
          <div className="card-left">
            <span>
              Experience the ease of carpooling with Fade! Make getting to and from the office simpler and simpler than ever with our comprehensive carpooling solution. With Fade's convenient matching service, you can rely on reliable carpool partners for a smooth ride. Plus, our one-of-a-kind subscription offers guarantee a consistent connection with dependable carpoolers who understand the benefits of carpooling. Say goodbye to stressful travels and embrace hassle-free rides with Fade now!
            </span>
          </div>

          <div className="card-center">
            <Fade down delay="500ms">

              <img src={deviceHomeDual} alt="" className="device-home-dual" />

            </Fade>
          </div>
          <div className="card-right">
            <div className="feature-list">
              {featureList.map((feature) => (
                <>
                  <div className="list-item" key={feature.id}>
                    <span className="list-item-header" style={{ lineHeight: '24px' }}>
                      <h3>{feature.header}</h3>
                    </span>
                    <span className="list-item-body">
                      <p>{feature.body}</p>
                    </span>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </InnerLayout>
    </CardSectionStyled>
  );
};
// const FadeInLeft = styled.h1`
//    animation: 2s ${keyframes`${fadeInLeft}`};
// `

const CardSectionStyled = styled.section`
  display: flex;
  width: 100vw;
  height: 140vh;
  text-align: center;
  margin: 0;
  padding: 0;
  position: relative;
    @media screen and (min-width: 350px) {
      flex-direction:row;
    }
  .card-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    
    @media screen and (max-width: 540px) {
      left: 0rem;
      width: 100%;
    }
  .card-right {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    
    @media screen and (max-width: 540px) {
      justify-content: flex-start;
      position: relative;
      width: 100%;
    }
    .feature-list {
      width: 20vw;
      position: absolute;
      top: 25vh;
      right: 12vw;
      line-height: 16px;
      text-align: left;
      justify-content: space-evenly;
      font-family: "Comfortaa", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      @media screen and (max-width: 540px) {
        left: 0vw;
        top: 15vh;
        width: 100%;
       
      }

      .list-item {
          padding: 1rem 0;
        
        }
      }
    }
    .card-center {
      img {
        height: 100vh;
        max-width: 100vw;
        position: absolute;
        top: 31vh;
        left: 35vw;
        @media screen and (max-width: 540px) {
          width: 100%;
          height: auto;
          top: 40vh;
          left: 20vw;
        }
      }
    }
    .card-left {
      span {
        position: absolute;
        top: 30vh;
        left: 10vw;
        width: 14rem;
        text-align: left;
        font-family: "Comfortaa", sans-serif;
        font-size: 14px;
        line-height: 25px;
        @media screen and (min-width: 350px) {
          max-width: 100%;
          width: inherit;
          z-index: 2;
          top: 8rem;
          line-height: 20px;
           padding-right: 5vw;
           padding-bottom: 10vh;
        }
      }
    }
  }
  .card-header {
    h2 {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
      width: 100vw;
      height: auto;
      margin-top: -5rem;
      margin-left: -5rem;
    }
  }
`;

export default CardSection;
