import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';

import { Container, InputContainer, NextButtom, NumberButton, PreviouButtom, TableContainer, TableHeader } from './styles';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { authAxios } from '../../services/api';
import { Paginator } from 'primereact/paginator';
import { PageVehicles, VehiclesProps } from '../../types/Vehicle';
import Badge from '../../components/Badge';
import arrowLeft from '../../assets/arrow-left.png'
import searchImg from '../../assets/search.png';


const AllVehicles: React.FC = () => {

  const [search, setSearch] = useState<string>('')
  const [vehicles, setVehicles] = useState<PageVehicles<VehiclesProps>>({
    vehicles: [],
    currentPage: 0,
    perPage: 10,
    totalRecords:0
  })

  useEffect(() => {
    const url: string = `vehicles?perPage=7`
    authAxios.get(url).then(res => setVehicles({...res.data, currentPage: res.data.currentPage - 1} ))
  }, [])

  const formatMoney = (money: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(money);
  }

  const formatKm= (km: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'decimal',
    }).format(km);
  }

  const template: any = {
    layout: 'PrevPageLink PageLinks NextPageLink',

    'PrevPageLink': (options: any) => {

        return (
            <PreviouButtom type="button" onClick={() => onPageChange(vehicles.currentPage)}>
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
        options.currentPage = vehicles.currentPage;

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
      const url: string = `vehicles?perPage=7&page=${page}&model=${search}`
      authAxios.get(url).then(res => setVehicles({...res.data, currentPage: res.data.currentPage - 1} ))
    }
  }

  const onFilter = () => {
      const url: string = `vehicles?perPage=7&page=${1}&model=${search}`
      authAxios.get(url).then(res => setVehicles({...res.data, currentPage: res.data.currentPage - 1} ))
    
  }



  return (
      <>
        <Header/>
        <Container>
          <h1>
            Todos Veículos
          </h1> 

          <TableContainer>
            <TableHeader>
              <h1>Listagem geral de veículos</h1>
              <div>
                <Paginator 
                  first={1}
                  rows={vehicles.perPage} 
                  totalRecords={vehicles.totalRecords}
                  template={template}
                  onPageChange={(e) => {
                    onPageChange(e.page + 1)}}
                />
                <InputContainer>
                  <input id='serach' type='text' onChange={e => setSearch(e.target.value)} onKeyDown={(e) => 
                    {if (e.key === 'Enter') onFilter()}
                  }/>
                  <img src={searchImg} alt="Buscar" onClick={onFilter}/>
                </InputContainer>
              </div>
            </TableHeader>
            <DataTable 

              value={vehicles.vehicles} 
              rows={7}
              dataKey="id"  
              emptyMessage="Não foram encontrados veículos"
            >
              <Column field="brand" header="MARCA"  />
              <Column field="model" header="MODELO"  />
              <Column field="yer" header="ANO"  />
              <Column 
                header="KM"  
                body={(record: any) => (
                  formatKm(record.value)
                )}
              />
              <Column field="color" header="COR"  />
              <Column header="STATUS" body={(record) => <Badge status={record.status}/>} />
              <Column field="chassi" header="CHASSI"  />
              <Column 
                header="VALOR"  
                body={(record: any) => (
                  formatMoney(record.value)
                )}
              />
            </DataTable>
          </TableContainer>
        </Container>
        
      </>
  );
}

export default AllVehicles;