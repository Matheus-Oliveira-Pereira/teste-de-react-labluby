import styled from 'styled-components';
import asideBackgroundImage from '../../assets/aside.png';


export const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: stretch;
`;

export const Aside = styled.div`
  flex: 1;
  background-image: url(${asideBackgroundImage});
  background-position: center;
  background-size: cover;
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`

export const MainContentLogoBox = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 70px;
  left: 150px;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 26.5625rem;
  margin-bottom: 70px;

  h1{
    font-size: 36px;
    font-weight: 600;
    color: var(--dark-gray);
  }
  h2{
    font-size: 12px;
    color: var(--light-gray);
    font-weight: 600;
  }
`

export const FormLogin= styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1.875rem;
`
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  
  margin-top: 0.625rem;
  height: 2.3125rem;
  width: 26.5625rem;
  
  background-color: var(--primary-red);
  border: none;
  border-radius: 3px;

  font-size: 0.875rem;
  font-weight: 600;
  color: var(--space-area);

  &:hover{
    border: 1.5px solid;
    border-color: var(--tertiary-red);
    background-color: var(--secondary-red);
  }

  &:active{
    transform: scale(0.95);
  }
`

export const PasswordOptionsContainer = styled.div`   
  display: flex;
  gap: 5.6875rem;

  div{
    display: flex;
    gap: 17.33px;
    align-items: center;
    justify-content: center;
    
    input{
      accent-color: var(--primary-red);
      color: var(--space-area);
      width: 24px;
      height: 24px;
      border-radius: 3px;
      cursor: pointer;
    }

    label{
      color: var(--primary-red);
      font-weight: 500;
      font-size: 0.875rem;
      cursor: pointer;
    }
  }

  a{
    color: var(--primary-red);
    font-size: 0.875rem;
    font-weight: 500;
    text-decoration: none;
  }
`

export const CreateAccountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 26.5625rem;
  margin-top: 2.5rem;

  p{
    font-weight: 500;
    color: var(--gray);
    font-size: 0.875rem;

    a{
      color: var(--primary-red);
      text-decoration: none;
      cursor: pointer;
    }
  }
`