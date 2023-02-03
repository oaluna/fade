import React from 'react'
import styled from 'styled-components'

const SecondaryButton = ({ name }) => {
   return (
      <SecondaryButtonStyled>
         <span>{name}</span>
         
         <i className="fas fa-arrow-right"></i>
      </SecondaryButtonStyled>
   )
}

const SecondaryButtonStyled = styled.button`
   padding: 0.9rem 2rem;
   background-color: var(--dark-primary);
   border: 1px solid var(--primary);
   outline: none;
   border-radius: 18px;
  
   font-size: 1rem;
   font-family: inherit;
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: space-around;
   
   span{
      margin-right: 10px;
      color: var(--primary);
   }
`

export default SecondaryButton