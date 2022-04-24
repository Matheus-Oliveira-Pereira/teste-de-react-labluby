import React, { useCallback } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import { Container, Aside, Main, MainContentLogoBox, FormLogin, ButtonContainer, Button, TitleContainer, PasswordOptionsContainer, CreateAccountContainer } from './styles';
import { Formik } from 'formik';
import { InputComponent } from '../../components/InputComponent';
import { Logo } from '../../components/Logo';

interface SignInFormData {
  email: string;
  password: string;
}

interface FormProps{
  values: any,
  handleChange: (text: string) => void,
  handleSubmit: (values: any) => void,
  errors: any,
  setFieldValue: any
}

const loginValidation = Yup.object().shape({
  email: Yup.string().required('Email inválido').email('Email inválido'),
  password: Yup.string().required('Senha inválida!'),
});


const Login: React.FC = () => {

  

  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleLogin = useCallback(
    async (data: SignInFormData) => {
      console.log('PEPERONI')
      await signIn({
        email: 'admin@luby.com.br',
        password: 'admin',
      });
  
      navigate('/');
    },
    [signIn, navigate],
  );


  return (
    <Container>
      
      <Main>

        <MainContentLogoBox>
          <Logo></Logo>
        </MainContentLogoBox>

        <TitleContainer>
          <h1>Bem-vindo á AutoLuby</h1>
          <h2>Faça o login para acessar a sua conta</h2>
        </TitleContainer>

        <FormLogin>
          <Formik
            validateOnBlur={false}
            validateOnChange={false}
            validationSchema={loginValidation}
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={(values) => {
              console.log('banana')
              console.log(values)
              handleLogin(values)
            }}

          >
            {({ values, setFieldValue, handleSubmit, errors }: FormProps) => (

              <>  
                  <FormLogin>
                    <InputComponent
                      label='Endereço de email'
                      onChange={
                        (email:string) => setFieldValue('email', email)
                      }
                      value={values.email}
                      // error={Object.keys(errors).length > 0 ? errors : null}
                      error={errors?.email}
                      id='email'
                      placeholder='@mail.com'
                      type='email'
                      key='email'
                      success={Object.keys(errors).length > 0 && !errors.email}
                    />
                    <InputComponent
                      onChange={
                        (password:string) => setFieldValue('password', password)
                      }
                      value={values.password}
                      // error={Object.keys(errors).length > 0 ? errors : null}
                      error={errors?.password}
                      id='password'
                      label='Senha'
                      placeholder='senha'
                      type='password'
                      key='password'
                      success={Object.keys(errors).length > 0 && !errors.password}
                    />

                    <PasswordOptionsContainer>
                      <div>
                        <input type="checkbox" id='checkbox'/>
                        <label htmlFor="checkbox"> Lembrar minha senha</label>
                      </div>
                      <a href="">Esqueceu a senha?</a>
              
                    </PasswordOptionsContainer>

                   <Button
                      type='button'
                      onClick={() => {
                        console.log(errors)
                        handleSubmit(values)
                      }}
                    >
                      Entrar
                    </Button>
                  </FormLogin>
              </>

            )}
          </Formik>
        </FormLogin>

        <CreateAccountContainer>
          <p> Ainda não possui conta? <a href="">Criar conta</a></p>
        </CreateAccountContainer>

      </Main>
      <Aside/>
    </Container>
  );
}

export default Login;

