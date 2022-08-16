import styled from 'styled-components'

export const Container = styled.div`
.topbarContainer {
  height: 70px;
  width: 100%;
  background-color: #020275;
  display: flex;
  align-items: center;
  top: 0;
  z-index: 999;
}

.topbarLeft {
  flex: 3;
}

.logo {
  font-size: 24px;
  margin-left: 20px;
  font-weight: bold;
  color: white;
  cursor: pointer;
}

.topbarRight {
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;

  margin-right: 30px;

  img{
    margin: 10px;
  }

  button{
    margin: 10px;
  }
}

.topbarImg {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
}

`;

export const Icon = styled.div`
  color: white;
  font-size: 35px;
  margin-right: 20px;
  cursor: pointer;

`;

