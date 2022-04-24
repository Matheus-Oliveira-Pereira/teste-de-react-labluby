import React from 'react';
import { Logo } from '../Logo';
import search from '../../assets/search.png';
import logout from '../../assets/log-out.png';

import { Container, InputContainer } from './styles';
import { useAuth } from '../../contexts/AuthContext';

interface HeaderProps {
    haveSerachInput?: boolean;
}

const Header: React.FC<HeaderProps> = ({haveSerachInput = false}: HeaderProps) => {
    const { signOut } = useAuth();

    return (
        <Container>
            <Logo/>

            {haveSerachInput &&
                <InputContainer>
                    <input id='serach' type='text' />
                    <img src={search} alt="Buscar" />
                </InputContainer>
            }

            <button type='button' onClick={signOut}>
                Sair
                <img src={logout} alt="Sair" />
            </button>
        </Container>
    );
}

export default Header;