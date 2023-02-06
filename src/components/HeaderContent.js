// import React from "react";
// import styled from "styled-components";
// import { InnerLayout } from "../styles/Layout";

// import Gradient from "../assets/gradient-bg3.png";

// const HeaderContent = () => {
//   return (
//     <HeaderContentStyled>
//       <InnerLayout>
//         <div className="left-content">
//           <div className="left-text-container">
//             <Fade left>
//               <img src={logo} alt="" />
//               <p className="white">
//                 Beat traffic with <span className="green">Fade</span> - Reduce
//                 commute time and traffic congestion, save money, and grow your
//                 network by carpooling in the Bay Area.
//               </p>
//               <br />
//               <SecondaryButton name="Learn More" />
//             </Fade>
//           </div>
//         </div>

//         <div className="right-content">
//           <div className="phone">
//             <Fade right>
//               <img src={devicesHeader} alt="" />
//             </Fade>
//           </div>
//         </div>
//       </InnerLayout>
//     </HeaderContentStyled>
//   );
// };

// const HeaderContentStyled = styled.div`
//   overflow-y: hidden;
//   position: relative;
//   height: 92vh;
//   padding-top: 0;
//   max-width: 100%;
//   @media screen and (max-width: 480px) {
//     display: flex;
//     flex-direction: column;
//   }

//   .left-content {
//     height: 100%;
//     width: 40vw;
//     position: absolute;
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     justify-content: center;
//     left: 0;
//     top: 0;
//     overflow-y: hidden;
//     z-index: 10;

//     img {
//       height: 5rem;

//       @media screen and (max-width: 700px) {
//         font-size: 3rem;
//       }
//     }
//     p {
//       padding-top: 1rem;
//       font-size: 18px;
//       letter-spacing: 0.75px;
//       font-weight: 300;
//     }
//     .white {
//       width: inherit;
//       color: #fff;
//       line-height: 1.5rem;
//     }
//     .green {
//       color: var(--green);
//     }
//   }
//   .right-content {
//     width: 100vw;
//     height: 100%;
//     padding: 0;
//     margin: 0;
//     position: absolute;
//     overflow-x: visible;
//     overflow-y: hidden;

//     .phone {
//       overflow: hidden;
//       padding: 0;
//       img {
//         height: 100%;
//         position: absolute;
//       }
//     }
//   }
// `;

// export default HeaderContent;
import React from "react";
import styled from "styled-components";
import gradient from "../assets/gradient-bg3.png";
import SecondaryButton from "./SecondaryButton";
import deviceFrames from "../assets/deviceFrames.png";
import logo from "../assets/fade-logo.svg";
import Roll from "react-reveal/Roll";
import { InnerLayout } from "../styles/Layout";
import Fade from "react-reveal/Fade";

const HeaderContent = () => {
  return (
    <HeaderStyled id="header">
      <InnerLayout>
        <div data-aos="fade-down-right" className="left-header">
        <Fade left>
          <img src={logo} alt="" className="logo" />
          <h2 className="header-text">
            Beat traffic with <span className="green">Fade</span> - Reduce
            commute time and traffic congestion, save money, and grow your
            network by carpooling in the Bay Area.
          </h2>
        <br />
        <SecondaryButton name="Learn More" /> 
        </Fade>
        </div>
        <div className="right-header">
          <Roll right>
            <img src={deviceFrames} alt="" />
          </Roll>
        </div>
      </InnerLayout>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.section`
  background-image: url(${gradient});
  background-size: cover;
  mix-blend-mode: blur(10px);
  height: 100vh;
  width: 100vw;
  overflow-y: hidden;
  position: relative;
  margin-top: -8vh;
  margin-left: -11vw;
  z-index: 0;
  display: flex;
    overflow-x:hidden;
  flex-direction: row;
  align-items: center;
  .right-header {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3rem;
  
    z-index: 0;
    img {
 position:absolute;
 top: 20%;
 left: 65%;
 height: 80%;
      z-index: 0;
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
  .left-header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 6rem;
    width: 45%;
    z-index: 1;
    .header-text {
      text-align: left;
      color: var(--neutral-light);
      z-index: 1;
      line-height: 1.5;
      font-size: 1.2rem;
      padding-top: 1.5rem;

      text-align: left;
      .green {
        color: var(--green);
      }
    }

    img {
      z-index: 1;
      max-width: 100%;
    }
  }
  .share {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 5rem;
  }
`;

export default HeaderContent;
