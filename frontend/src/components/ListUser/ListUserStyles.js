import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
background: #ffff;
color: white;
/* box-shadow: 0.4rem 0.4rem 0.4rem #555555; */
z-index: 9999;
margin: auto;
position: relative;

display: flex;
justify-content: flex-start;
width: 300px;
`;

export const Wrapper = styled.div`
    display: flex;
    margin: 0 10px;
    padding: 10px;
`;

export const WrapperImg = styled.div`
    width: 50px;
    height: 50px;
    
    img{
        width: 50px;
        height: 50px;
    }
`;

export const NavLink = styled(Link)`
    color: blue;
    text-decoration: none;
    margin: 10px;
    color: black;
`;
