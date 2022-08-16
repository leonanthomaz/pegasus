import React, { useContext, useRef } from "react";
import * as C from './RegisterStyles';
import { useNavigate } from "react-router";
import { api } from "../../config/api";
// import { AuthContext } from "../../context/AuthContext";

const Register = () => {
    // const  { status, setStatus } = useContext(AuthContext)  

    const username = useRef();
    const email = useRef();
    const password = useRef();
    const confirmPassword = useRef();
    const navigate = useNavigate()

    const handleClick = async (e) => {
        e.preventDefault();
        if (confirmPassword.current.value !== password.current.value) {
            confirmPassword.current.setCustomValidity("Senhas não conferem!");
        } else {
          const user = {
            username: username.current.value,
            email: email.current.value,
            password: password.current.value,
          };
          try {
            await api.post("/auth/register", user);
            navigate("/login");
          } catch (err) {
            // console.log(err);
            console.log(err)
          }
        }
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
                    {/* { status.type === 'error' ? <p style={{color: 'red'}}>{status.msg}</p> : ''} */}
                    <C.Form onSubmit={handleClick}>
                      <C.Input 
                      placeholder="Username" 
                      type="text"
                      required
                      ref={username}
                      />
                      <C.Input 
                      placeholder="Email"
                      type="email" 
                      required
                      ref={email}
                      />
                      <C.Input 
                      placeholder="Senha"
                      type="password" 
                      minLength="6"
                      required
                      ref={password}
                      />
                      <C.Input 
                      placeholder="Confirme a senha"
                      type="password" 
                      minLength="6"
                      required
                      ref={confirmPassword}
                      />
                      <C.Button type="submit">Registrar</C.Button>
                    </C.Form>
                    <C.Footer>
                      Tem uma conta?<C.FooterButton to='/login'>Faça login!</C.FooterButton>
                    </C.Footer>
                </C.FormContainer>
                
            </C.CardRight>
        </C.ContainerWrapper>
      </C.Container>
    )
}

export default Register;