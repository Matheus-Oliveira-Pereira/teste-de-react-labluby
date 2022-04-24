import styled from 'styled-components';

interface InputProps {
  error: boolean
  success: boolean
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
    position: relative;

    img{
      height: 14px;
      width: 14px;
      position: absolute;
      right:  15px;
      bottom: 11px;
    }
`

export const Input = styled.input<InputProps>`
  padding: 10px 15px;
  width: 26.5625rem;
  height: 2.25rem;
  border-radius: 3px;
  background: var(--input);

  border: 1px solid;
  border-color: var(--stroke);
  border-radius: 3px;


  color: var(--light-gray);
  font-weight: 400;

  ::placeholder {
    color: var(--light-gray);

    ${({error}) => error && `
      color: var(--error);
    `}
  }

  ${({error}) => error && `
    border: 2px solid;
    border-color: var(--error);
    
  `}

  ${({success}) => success && `
    border: 2px solid;
    border-color: var(--confirmation);
  `}
  
`

export const Label = styled.label`
  color: var(--gray);
  font-weight: 600;

`