import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   :root{
      --primary: #69C7F2;
      --seafoam: #4FC8B0;
      --neutral-light: #F2F6FF;
      --green: #2F90B0; /*Primary Font Color*/
      --dark-primary: #01000e;
      --border-colour: #CAD6F1;
   }
   *{
    max-width:100vw;
      margin: 0;
      padding: 0;
      list-style: none;
      box-sizing: border-box;
      font-family: 'Comfortaa', sans-serif;
      text-decoration: none;
      overflow-x: hidden;
   }

   body{
      background-color: var(--neutral-light);
      color: white;
      font-size: 1.2rem;
      font-family: 'Comfortaa', sans-serif;
   }
   a{
      color: inherit;
   }
   p{
      color: var(--dark-primary);
      line-height: 1.9rem;
   }
   .secondary-heading{
    font-family: 'Comfortaa', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 42px;
line-height: 52px;
/* identical to box height, or 124% */
color: var(--dark-primary);
text-align: center;
letter-spacing: -0.4px;
   }
   .small-heading{
      font-size: 2.5rem;
      color: var(--dark-primary);
      text-align: center;
   }

   span{
      color: var(--dark-primary);
   }


   .c-para{
      text-align: center;
   }

`;

export default GlobalStyle;
