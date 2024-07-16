import React from 'react'
import styled from 'styled-components'
//import arrow from '../assets/img/arrow.svg'


const AnimatedButton = ({ text }) => {
   return (
      <AnimatedButtonStyled>
         {text}
         {/* <img src={arrow} alt="" /> */}
      </AnimatedButtonStyled>
   )
}

const AnimatedButtonStyled = styled.button`
   padding: 0.9rem 2rem;
   background-color: var(--dark-primary);
   border: 1px solid var(--primary);
   outline: none;
   border-radius: 18px;
   color: var(--primary);
   font-size: 1rem;
   font-family: inherit;
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: space-around;
   margin-top: 2rem;
   img{
      margin-left: 1rem;
      padding-left: inherit.9rem;
     
   }
      @media screen and (max-width: 540px) {
      margin-left: 10rem;
      align-items: flex-end;
      justify-content: space-evenly;
      z-index: 10;
      }
`

export default AnimatedButton