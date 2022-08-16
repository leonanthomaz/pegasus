import React, { useContext, useRef } from "react";
import * as C from './LoginStyles';
import { loginCall } from '../../config/api';
import { AuthContext } from '../../context/AuthContext';
import { CircularProgress } from "@material-ui/core";

const Login = () => {
    const email = useRef();
    const password = useRef();
    const { isFetching, dispatch, user } = useContext(AuthContext);

    const handleClick = (e) => {
        e.preventDefault();
        loginCall(
            { email: email.current.value, password: password.current.value },
            dispatch
        );
    };

    return(
        <C.Container>
            <C.ContainerWrapper>
                <C.CardLeft>
                    <img src="https://rrnetwork.org/assets/general-images/difficult-convos.png" alt="" />
                </C.CardLeft>
                <C.CardRight>
                    <C.FormContainer>
                        <C.CardTitle>Projeto Pégasus</C.CardTitle>
                        <C.CardSubTitle>Faça login para continuar</C.CardSubTitle>
                        <div style={{ textAlign: 'center'}}>
                            <p><strong>Usuário teste:</strong> teste@teste.com</p>
                            <p><strong>Senha:</strong>  123456</p>
                        </div>
                        <C.Form onSubmit={handleClick}>
                            <C.Input 
                            placeholder="Email" 
                            type="email"
                            required
                            ref={email}
                            />
                            <C.Input 
                            placeholder="Password" 
                            type="password"
                            required
                            minLength="6"
                            ref={password}
                            />
                            <C.Button type="submit" disabled={isFetching}>
                                {isFetching ? (
                                    <CircularProgress color="white" size="20px" />
                                ) : (
                                    "Logar"
                                )}
                            </C.Button>
                        </C.Form>
                        <C.Footer>
                            Não tem uma conta?<C.FooterButton to='/register'>Cadastre-se!</C.FooterButton>
                        </C.Footer>
                    </C.FormContainer>
                </C.CardRight>
            </C.ContainerWrapper>
        </C.Container>
        
    )
}

export default Login;