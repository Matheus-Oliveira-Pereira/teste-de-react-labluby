import React from 'react';

import { Container } from './styles';

interface BadgeProps{
    status: 'Vendido' | 'Disponível' | 'Reservado';
}


const Badge: React.FC<BadgeProps> = ({status}) => {
  return(
    <Container status={status}>
        {status}
    </Container>  
  );
}

export default Badge;