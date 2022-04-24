import React from 'react';
import Header from '../../components/Header';
import MenuCard from '../../components/MenuCard';
import { useAuth } from '../../contexts/AuthContext';
import UserReservedVehiclesImage from '../../assets/userReservedVehicles.png';
import TotalVehiclesImage from '../../assets/vehicles.png';
import TotalEmployeesImage from '../../assets/employees.png';
import { useNavigate } from "react-router-dom";


import { Container, Content } from './styles';

const Home: React.FC = () => {

  const { user, totalVehicles, totalEmployees } = useAuth();

  const navigate = useNavigate();


  return (
    <>
      <Header haveSerachInput/>
      <Container>
        <Content>
          <h1>Bem-vindo, {user?.name}</h1>
          <p>Menu</p>
          <MenuCard 
            imgSource={UserReservedVehiclesImage} 
            title="Veículos reservados e vendidos" 
            subtitle="Veículos reservados e vendidos por você"
            numberOfVehicles={user?.vehicles.length}
            onClick={() => navigate('/userVehicles')}
          />
           <MenuCard 
            imgSource={TotalVehiclesImage} 
            title="Listagem geral de veículos" 
            subtitle="Listagem de veículos de toda a empresa"
            numberOfVehicles={totalVehicles}
            onClick={() => navigate('/allVehicles')}
          />
           <MenuCard 
            imgSource={TotalEmployeesImage} 
            title="Funcionários da empresa" 
            subtitle="Listagem de todos os funcionários da empresa"
            numberOfVehicles={totalEmployees}
            onClick={() => navigate('/employees')}
          />
        </Content>
      </Container>
    </>
  );
}

export default Home;

