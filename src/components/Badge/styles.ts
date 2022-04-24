import styled from 'styled-components'

interface ContainerProps {
    status: 'Vendido' | 'Disponível' | 'Reservado'
}


export const Container = styled.div<ContainerProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1.875rem;
    width: 6.375rem;
    border-radius: 3px;
    font-weight: 500;
    font-size: 1rem;
    color: var(--primary-red);
    background: rgba(245, 74, 72, 0.2);


    ${({status}) => status === 'Disponível' && `
        background: rgba(52, 195, 143, 0.2);
        color: var(--confirmation);
    `}
    ${({status}) => status === 'Reservado' && `
        background: rgba(250, 193, 47, 0.2);
        color: #FAC12F;
    `}
`