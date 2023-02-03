import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layout";
import gradient from "../assets/gradient-bg3.png";
import iPhoneLarge from "../assets/iPhoneLarge.png";
import iPhoneSmall from "../assets/iPhoneSmall.png";
import AnimatedButton from "../components/AnimatedButton";

const data = [
  {
    id: 1,
    step: 1,
    text: "Enter your itinerary details",
  },
  {
    id: 2,
    step: 2,
    text: "Get matched with the closest available match",
  },
  {
    id: 3,
    step: 3,
    text: "Subscribe to the driver's route to ride daily, absolutely free!",
  },
];

const ChartSection = () => {
  return (
    <ChartStyled id="features">
      <InnerLayout>
        <div className="chart-con">
          <div className="chart-left">
            <h2 data-aos="fade-right" className="secondary-heading">
              Booking your Carpool
            </h2>
            <p>Getting matched with a Fade Driver is as easy as</p>
            <ul className="chart-left-steps">
              {data.map((item) => (
                <span>
                  <li className="chart-left-step">
                    <h6>
                      <strong>{item.step}.</strong>
                    </h6>
                    <p>
                      {""}
                      {item.text}
                    </p>
                  </li>
                </span>
              ))}
            </ul>
            <AnimatedButton text={"Learn More"} />
          </div>
          <div className="chart-right">
            <img src={iPhoneLarge} alt="" className="iphone-lg"/>
            <img src={iPhoneSmall} alt="" className="iphone-sm"/>
            {/* <Roll right>
                     <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem officia nemo distinctio dolores necessitatibus odit magni corrupti error,
                        voluptate alias adipisci ducimus nostrum maiores. Ad?
                     </p>
                  </Roll> */}
            {/* <Bounce right>
                     <AnimatedButton name={'Learn More'} />
                  </Bounce> */}
          </div>
        </div>
      </InnerLayout>
    </ChartStyled>
  );
};

const ChartStyled = styled.section`
  background-image: url(${gradient});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  height: 100vh;

  margin-right: 15rem;
  
  width: 100vw;
  overflow: hidden;

  .chart-con {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media screen and (max-width: 1347px) {
      grid-template-columns: repeat(1, 1fr);
    }
    .chart-left {
      width: 75%;
      margin-left: 6rem;
      h2 {
        text-align: left;
        color: var(--neutral-light);
      }
      p {
        color: var(--border);
      }
      @media screen and (max-width: 1347px) {
        width: 100%;
      }
      .chart-left-steps {
        text-decoration: none;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        height: 20vh;
        margin-top: 5vh;
      }
      .chart-left-step {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        h6 {
          color: var(--primary);
        }
        p {
          color: var(--neutral-light);
          font-size: 16px;
          margin-left: 25px;
        }
      }

      .stats {
        img {
          box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
          border-radius: 62px;
          width: 100%;
        }
        .stats-money {
          display: flex;
          padding-bottom: 1.3rem;
          justify-content: space-between;
        }
      }
    }
    .chart-right {
      top: 0vh;
      left: 50vw;
      position: absolute;
      padding-left: 2rem;
      height: 100%;
      width: 100%;
      img {
        position:absolute;
        bottom: 0vh;
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content:space-evenly;
      }
       img.iphone-sm {
         left: 14vw;
        }
      p {
        padding: 1.3rem 0;
      }
    }
  }
`;

export default ChartSection;
