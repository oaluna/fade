import React, { useRef } from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layout";
import { motion, useScroll } from "framer-motion";
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

const deviceVariants = {
  offscreen: {
    y: 300,
 
  },
  onscreen: {
    y: 50,
    rotate: -10,
  
    transition: {
      type: "easeIn",
      
      duration: 2,
    },
   
  }
};



const CardSection = () => {
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"]
  })
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
              Fade is a carpooling service that aims to reduce the time and
              money you spend on your daily commute,by encouraging our users to
              travel together. We aim to unburden you of long bus rides and
              congested rush hour traffic.
            </span>
          </div>
         
         <motion.div className="card-center"
      initial="offscreen"
  whileInView="onscreen"
  viewport={{ once: true }}
  >
      <motion.div variant={deviceVariants}>
        <img src={deviceHomeDual} alt="" className="device-home-dual" style={{ offsetY: scrollYProgress }}/>
      </motion.div>
          </motion.div>
          <div className="card-right">
            <div className="feature-list">
              {featureList.map((feature) => (
                <>
                  <div className="list-item" key={feature.id}>
                    <span className="list-item-header">
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
  width: 100vw;
  height: 140vh;
  text-align: center;

  margin: 0;
  padding: 0;
  position: relative;
  @keyframes fadeInUp {
    0% {
      transform: translateY(20rem);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  .card-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;

    @media screen and (max-width: 845px) {
      flex-direction: column;
    }

    .card-right {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      .feature-list {
        width: 20vw;
        position: absolute;
        top: 25vh;
        right: 12vw;

        text-align: left;
        justify-content: space-between;

        /* Text/Article */

        font-family: "Comfortaa", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 28px;
        .list-item {
          padding: 2rem 0;
        }
      }
    }
    .card-center {
      img {
        height: 100vh;
        max-width: 100vw;
        position: absolute;
        top: 30vh;
        left: 35vw;
        animation: fadeInUp 1.5s;
        transition: 1.5s ease-in;
      }
    }
    .card-left {
      span {
        position: absolute;
        top: 45vh;
        left: 10vw;
        width: 14rem;
        text-align: left;

        /* Text/Article */

        font-family: "Comfortaa", sans-serif;
        font-size: 16px;
        line-height: 28px;
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
      margin-left: -5rem;
    }
  }
`;

export default CardSection;
