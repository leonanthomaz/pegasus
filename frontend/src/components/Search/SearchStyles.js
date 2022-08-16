import styled from 'styled-components'

export const Container = styled.div`
height: 50px;
padding-top: 10px;

.searchbar {
  margin: auto;
  width: 500px;
  height: 40px;
  background-color: white;
  border-radius: 30px;
  display: flex;
  align-items: center;
  border: 3px solid gray;

  @media(max-width: 760px){
    width: 300px;
  }
}

.searchIcon {
  font-size: 20px;
  margin-left: 10px;
}

.searchInput {
  border: none;
  width: 70%;
  
}

.searchInput:focus {
  outline: none;
}

`;
