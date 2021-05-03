import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    bottom: 0;
    box-sizing: border-box;
    outline: none;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  html {
    font-size: 62.5%;

    @media(max-width:768px){
      font-size: 54%;
    }
  }



  body {
    /* background: #6554C0; */
    background: #4C4499;

    color: #FFBB43;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 2rem;
  }

  input,
  textarea,
  button {
    font-family: "Source Sans Pro", sans-serif;
  }

  button {
    cursor: pointer;
  }

  h1 {
    font-size: 4.2rem;
  }

  h2 {
    font-size: 3.6rem;
  }

  h3 {
    font-size: 3rem;
  }

  h4 {
    font-size: 2.6rem;
  }

  h5 {
    font-size: 2.4rem;
  }
`;
