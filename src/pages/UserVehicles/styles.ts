import styled from 'styled-components'

interface NumberButtonProps{
    isCurrent?: boolean;
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2.8125rem 9.375rem 6.125rem;
    gap: 2.25rem;
    background: var(--input);
    min-height: calc(100vh - 7.5rem);

    h1{
        font-size: 1.875rem;
        font-weight: 600;
        color: var(--titulo);
    }

    
`

export const TableContainer = styled.div`
    background-color: var(--space-area);
    border-radius: 3px;
    -webkit-box-shadow: 2px 2px 8px 2px rgba(0,0,0,0.15); 
    box-shadow: 2px 2px 8px 2px rgba(0,0,0,0.15);
    width: 101.25rem;
    padding: 0 1rem;

    .p-datatable-thead > tr > th{
        background: var(--input);
        border: none;
        color: var(--gray);
        font-size: 13px;
        font-weight: 700;
        padding: 25px;
    }

    .p-datatable-tbody > tr > td{
        color: var(--dark-gray);
        font-weight: 600;
        padding: 25px;
        border: none;
    }
`

export const TableHeader = styled.div`
    display: flex;
    padding: 25px 0 25px 15px;
    align-items: center;
    justify-content: space-between;

    h1{
        font-weight: 600;
        font-size: 1.25rem;
        color: var(--dark-gray);
    }
`

export const PreviouButtom = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 97px;
    height: 28px;
    background-color: #EDEDED;
    border: none;
    color: #858585;
    border-radius: 3px;
    font-weight: 600;
    font-size: 14px;
;
`
export const NextButtom = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 97px;
    height: 28px;
    font-weight: 600;
    border: none;
    color: #858585;
    border-radius: 3px;
    background: transparent;
    font-size: 14px;
    padding-left: 14px;

    img{
        transform: rotate(180deg);
    }
;
`

export const NumberButton = styled.button<NumberButtonProps>`


    border-radius: 3px;
    color: #858585;
    font-weight: 600;
    font-size: 13px;
    padding: 2px 8px;
    margin: 0 0 0 14px;
    border: none;
    background: transparent;

    .p-paginator-elemt{
        background: red;
    }

    ${({isCurrent}) => isCurrent && `
        background: var(--primary-red);
        color: var(--space-area)
    `}
    
`