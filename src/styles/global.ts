import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root{
    --space-area: #FFFFFF;

    --input: #F9F9F9;

    --light-gray: #A2A2A2;
    --gray: #7C7C7C;
    --dark-gray: #3C3C3C;

    --stroke: #E6E6E6;
    
    --primary-red: #F54A48;
    --secondary-red: #DF3938;
    --tertiary-red: #971212;


    --error: #FA982F;
    --confirmation: #34C38F;

    --titulo: #495057;


  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  html{
    @media(max-width: 1080px) {
        font-size: 93.75%;
    }
    @media(max-width: 720px){
        font-size: 87.5%;
    }
  }
  body{
    background-color: var(--space-area);
    color: var(--space-area);
    -webkit-font-smoothing: antialised;
    font-family: 'Poppins', sans-serif;
  }
  body, input, button{
    font-family: 'Poppins', serif;
    font-weight: 500;
  }
  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }
  button{
    cursor: pointer
  }
  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }
`;