import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { authAxios } from '../../services/api';
import { Paginator } from 'primereact/paginator';
import { PageVehicles, VehiclesProps } from '../../types/Vehicle';
import Badge from '../../components/Badge';
import arrowLeft from '../../assets/arrow-left.png'

import { Container, NextButtom, NumberButton, PreviouButtom, TableContainer, TableHeader } from './styles';
import { useAuth } from '../../contexts/AuthContext';



const UserVehicles: React.FC = () => {

  const {user} = useAuth()
  console.log(user)

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


  return (
      <>
        <Header/>
        <Container>
          <h1>
          Seus Veículos
          </h1> 

          <TableContainer>
            <TableHeader>
              <h1>Listagem de veículos reservados e vendidos</h1>
            </TableHeader>
            <DataTable 
              value={user?.vehicles} 
              rows={user?.vehicles.length}
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

export default UserVehicles;