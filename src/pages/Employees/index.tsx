import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { Container, InputContainer, NextButtom, NumberButton, PreviouButtom, TableContainer, TableHeader } from './styles';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { authAxios } from '../../services/api';
import { Paginator } from 'primereact/paginator';
import { EmployeesProps, PageEmployees } from '../../types/Employees';
import arrowLeft from '../../assets/arrow-left.png'
import searchImg from '../../assets/search.png';

const Employees: React.FC = () => {

  const [search, setSearch] = useState<string>('')
  const [employees, setEmployees] = useState<PageEmployees<EmployeesProps>>({
    employees: [],
    currentPage: 0,
    perPage: 10,
    totalRecords:0
  })

  useEffect(() => {
    const url: string = `employees?perPage=7`
    authAxios.get(url).then(res => setEmployees({...res.data, currentPage: res.data.currentPage - 1} ))
  }, [])

  

  const formatMoney = (money: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(money);
  }

  const template: any = {
    layout: 'PrevPageLink PageLinks NextPageLink',

    'PrevPageLink': (options: any) => {

        return (
            <PreviouButtom type="button" onClick={() => onPageChange(employees.currentPage)}>
              <img src={arrowLeft} alt="Anterior" />
              Anterior
            </PreviouButtom>
        )
    },

    'NextPageLink': (options: any) => {
        return (
            <NextButtom type="button" onClick={options.onClick}>
                Próxima
                <img src={arrowLeft} alt="Anterior" />
            </NextButtom>
        )
    },
    'PageLinks': (options: any) => {
        options.currentPage = employees.currentPage;

        if((options.currentPage) === options.page){
          return (
            <NumberButton type="button" onClick={options.onClick} isCurrent>
                {options.page + 1}
            </NumberButton> 
          )
        }

        return (
            <NumberButton type="button" onClick={options.onClick}>
                {options.page + 1}
            </NumberButton>
        )
    },
  };

  const onPageChange = (page: number) => {
    console.log(page);
    if(page) {
      const url: string = `employees?perPage=7&page=${page}`
      authAxios.get(url).then(res => setEmployees({...res.data, currentPage: res.data.currentPage - 1} ))
    }
  }

  return (
    <>
      <Header/>
      <Container>
          <h1>
            Funcionários
          </h1> 

          <TableContainer>
            <TableHeader>
              <h1>Listagem de funcionários da empresa</h1>
              <div>
                <Paginator 
                  first={1}
                  rows={employees.perPage} 
                  totalRecords={employees.totalRecords}
                  template={template}
                  onPageChange={(e) => {
                    onPageChange(e.page + 1)}}
                />
                <InputContainer>
                  <input id='serach' type='text' onChange={e => setSearch(e.target.value)}/>
                  <img src={searchImg} alt="Buscar" />
                </InputContainer>
              </div>
            </TableHeader>
            <DataTable 

              value={employees.employees} 
              rows={7}
              dataKey="id"  
              emptyMessage="Não foram encontrados veículos"
            >
              <Column field="name" header="NOME"  />
              <Column field="email" header="EMAIL"  />
              <Column field="cpf" header="CPF"  />
              <Column 
                header="SALÁRIO"  
                body={(record: any) => (
                  formatMoney(record.salary)
                  )}
              />
              <Column field="bio" header="BIO"  />
            </DataTable>
          </TableContainer>
        </Container>
      
    </>
);
}

export default Employees;