import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const Container = styled.div`

width: 500px;
margin: auto;

@media(max-width: 760px){
  width: 300px;
}

`;

export const Followings = styled.div`
display: flex;
justify-content: center;

img{
  width: 50%;
}
`;

export const FollowingsBox = styled.div`
display: grid;
grid-template-columns: 100px 100px 100px;
padding: 10px;

`;

export const FollowingsUser = styled.h4`
  display: flex;
  justify-content: center;
  align-items: center;  
  flex-direction: column;


  .postProfileImg {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    object-fit: cover;
  }

`;

export const FollowingsTitle = styled.h4`
  text-align: center;
  padding: 5px;
`;

export const FollowingsLink = styled(Link)`
  color: black;

  &:hover{
    color: red;
  }
  
  span{
    font-size: 16px;
  }
`;

export const FollowingsDesc = styled.div`
width: 150px;
`;