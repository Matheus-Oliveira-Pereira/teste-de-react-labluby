import styled from 'styled-components'

export const Container = styled.header`
    display: flex;
    height: 7.5rem;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 9.375rem;
    background-color: var(--space-area);
    box-shadow: 0px 2px 25px rgba(169, 169, 169, 0.2);

    button{
        background-color: var(--primary-red);
        border-radius: 3px;
        border: none;
        width: 4.6875rem;
        height: 2.375rem;
        color: var(--space-area);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }
` 

export const InputContainer = styled.div`
    position: relative;
    input{ 
        display: flex;
        align-items: center;
        width: 26.875rem;
        height: 2.75rem;
        border: 1px solid;
        background: var(--input);
        border-color: var(--stroke);    
        border-radius: 3px;
        padding-left: 1rem;

    }
    img{
        height: 20px;
        width: 20px;
        position: absolute;
        bottom: 12px;
        right: 12px;
        
    }
`