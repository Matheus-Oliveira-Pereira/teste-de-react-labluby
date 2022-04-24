import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Container } from './styles';

interface MenuCardProps{
    title: string;
    subtitle: string;
    imgSource: string;
    numberOfVehicles: number | undefined;
    onClick: () => void;
}

const MenuCard: React.FC<MenuCardProps> = ({imgSource, title, subtitle, numberOfVehicles, onClick}) => {

    return (
        <Container imgSource={imgSource} onClick={onClick}> 
            <div>
                <h1>{title}</h1>
                <p>{subtitle}</p>
                <strong>{numberOfVehicles} veículos</strong>
            </div>
            <div>
                <img src={imgSource} alt="Car picture" />
            </div>
        </Container>
    );
}

export default MenuCard;