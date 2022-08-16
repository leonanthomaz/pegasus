import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`


`

export const ContainerWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100vw;
height: 80vh;

`;

export const CardLeft = styled.div`
  flex: 1;
  margin-top: 150px;

  img{
    width: 100%;
  }

  @media(max-width: 760px){
    display: none;
  }
`

export const CardTitle = styled.h1`
text-align: center;
`;

export const CardSubTitle = styled.h4`
text-align: center;
font-style: italic;
padding-bottom: 10px;
`;

export const CardRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const FormContainer = styled.div`
height: 300px;
padding: 20px;
background-color: white;
border-radius: 10px;
display: flex;
flex-direction: column;
justify-content: space-between;

`;

export const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
padding: 10px;
`;

export const Input = styled.input`
    height: 50px;
    border-radius: 10px;
    border: 1px solid gray;
    font-size: 18px;
    padding-left: 20px;
    margin: 10px;

    &:focus{
        outline: none;
    }
`;


export const Button = styled.button`
    height: 50px;
    border-radius: 10px;
    border: none;
    background-color: #1775ee;
    color: white;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
    max-width: 50%;
    margin: auto;
    width: 200px;
    

    &:focus{
        outline: none;
    }

    &:disabled{
        cursor: not-allowed;
    }

`;

export const Footer = styled.div`
  font-weight: 500;
  text-align: center;
  padding-top: 1rem;
`;

export const FooterButton = styled(Link)`
    background: red;
    width: 100px;
    margin: auto;
    padding: 5px;
    color: white;
    border-radius: 5px;
    cursor: pointer;
`;