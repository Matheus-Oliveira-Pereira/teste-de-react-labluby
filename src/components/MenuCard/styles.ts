import styled from 'styled-components';

interface ContainerProps{
    imgSource: string;
}

export const Container = styled.div<ContainerProps>`
    width: 50rem;
    height: 12.5rem;
    border: 2px solid var(--stroke);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1.25rem;
    border-radius: 3px;
    cursor: pointer;

    div:first-child{
        width: 33.875rem;
        padding: 1.875rem;
        display: flex;
        flex-direction: column;

        h1{
            font-size: 1.625rem;
        }

        p{
            padding-top: 0.625rem;
            font-size: 1.125rem;
        }

        strong{
            color: var(--primary-red);
            align-self: flex-end;
            font-weight: 700;
        }
    }

    div:last-child{
        overflow: hidden;
        width: 16.125rem;
    }

    img{
        height: 100%;
        width: 16.125rem;
        object-fit: cover;
        transition: all 1s ease;
    }

    :hover{
        img{
            transform: scale(1.4);
            transform-origin: 50% 50%;
        }
    }
`