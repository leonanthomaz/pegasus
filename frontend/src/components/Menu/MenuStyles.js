import styled from 'styled-components'
import { BsXLg } from "react-icons/bs";
import { Link } from 'react-router-dom';

export const Menu = styled.div`

position: fixed;
z-index: 999;
width: 300px;
height: auto;
background: #fafafa;
color: black;
align-items: center;
top: 0;
transition: 0.3s ease-in-out;
right: ${({ isOpen }) => (isOpen ? '0' : '-1000px')};

@media screen and (max-width: 400px) {
width: 100%;
}
`;

export const MenuContainer = styled.div`
    padding: 10px;
    margin-top: 35px;
`;

export const CloseIcon = styled(BsXLg)`
  color: #000;
  font-size: 25px;
  float: right;
  margin: 10px;
  cursor: pointer;
`;

export const MenuUser = styled.div`
    display: flex;
    margin: 5px;
`;

export const MenuUsername = styled.h4`
    margin-left: 7px;
    margin-top: 10px;
`;

export const MenuWrapper = styled.div`
    margin-top: 20px;
`;
export const MenuUL = styled.ul`
    list-style: none;
  
`;

export const MenuLI = styled.li`
    color: black;
`;

export const MenuNavLink = styled(Link)`
    color: black;
    text-decoration: none;

    &:hover{
        color: red;
    }
`;

export const MenuFooter = styled.div`
padding: 5px;
`;

export const MenuLogout = styled.div`
    font-size: 20px;
    margin: 10px;
    cursor: pointer;
    
    span{
        font-size: 16px;
    }
`;