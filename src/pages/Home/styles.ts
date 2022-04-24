import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 4.0625rem;

`

export const Content = styled.div`
    width: 800px;

    h1{
        color: var(--dark-gray);
    }

    p{
        padding-top: 0.3125rem;
        color: var(--gray);
        padding-bottom: 1.875rem;
    }
`