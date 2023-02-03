import React from "react";
import styled from "styled-components";
import iconDriver from "../assets/icon-driver.png";
import iconPassenger from "../assets/icon-passenger.png";
import deviceDual from "../assets/deviceDual.png";

const data = [
  {
    id: 0,
    title: "Fade Driver",
    imgSrc: iconDriver
  },
  {
    id: 1,
    title: "Fade Rider",
    imgSrc: iconPassenger,
   
  },
];

const MessagingSection = () => {
  return (
    <MessageStyle>
 
       
          <div className="left-items">
            <img src={deviceDual} alt="" />
          </div>
       
        <div className="right-items">
          <h2>You Driving or Riding Today?</h2>
          <p>

            We feature two account modes, Rider and Driver modes, for whichever
            you may need. You can freely switch back and forth as needed.
          </p>
          <div className="account-cards">
            {data.map((item) => (
              <>
                <div className="card" key={item.id}>
                  <img
                    src={item.imgSrc}
                    alt=""
                    className="card-image"
                    style={{ width: "64px", height: "64px" }}
                  />

                  <h6 className="card-title">{item.title}</h6>
<div className="card-body">
                {item.id === 0 ?(
                   <>
                   <p>Post Commutes to a Feed</p>
                  
                <p>Accept/Manage Subscriptions</p>
               
                <p>Receive a Rating from Riders</p>
                </>) 
                : 
                (
                  <>
                  <p>Search locally for similar commutes</p>
                 
                <p>Request Pickups from Drivers</p>
               
                <p>Subscribe if needed regularly</p>
                </>)
               }
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
     
    </MessageStyle>
  );
};

const MessageStyle = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction:row;
  align-items:center;
  overflow-y: hidden;
 margin: 5vh 0;
  
    .left-items {
      position:relative;
      width: 60vw;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction:column;
      align-items:flex-start;
      justify-content:space-evenly;
      img {
       object-fit: contain;
        width: 100%;
        height: 100%;
        overflow-y: none;
        margin-left: 2rem;

      }
    }

    .right-items {
      position: absolute;
      height: 100%:
      width: 50%;
left: 51.07%;
right: 8.21%;


      h2 {
         width: 100%;
         color: var(--dark-primary);
         font-size: 42px;
         padding-right: 4rem;
      }
      p {
         width: 100%;
         color: var(--dark-primary);
         padding-right: 4rem;
        }
      

      .account-cards {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content:space-evenly;
        width: 90%;
        height: 475px;
        
      
      .card {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-evenly;
        max-width: 100%:
        height: 400px;
        padding: 15px;
        margin: 0 15px 0 0;
        background: #fff;
border-radius: 45px;
box-shadow: 0px 0.5px 2px rgba(0,0,0,0.2);
      }
      .card-image {
        width: 36px;
        height: 36px;
        margin-top: 15px;
        margin-bottom: 15px;
      }
      .card-title {
        color: var(--primary);
        margin-bottom: 15px;
        text-transform: uppercase;
      }
      .card-body {
        color: var(--primary);
        p {
         font-size: 14px;
         line-height: 1.5;
         margin: 15px 0;
        }
      }
      }
    }
   
  
`;

export default MessagingSection;
