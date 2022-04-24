import { Container, Icon, Title } from "./styles";
import LogoImage from '../../assets/iconLogo.png'
export const Logo = () => {
    return(
        <Container>
            <Icon src={LogoImage} alt='Autoluby'/>
            <Title>AutoLuby</Title>
        </Container>
    );
}