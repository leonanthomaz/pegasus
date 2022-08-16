import styled from 'styled-components'

export const Container = styled.div`
.share {
  width: 100%;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
}

.shareWrapper {
  padding: 10px;

  @media(max-width: 760px){
    ::placeholder{
      font-size: 16px;
    }
  }
}

.shareTop {
  display: flex;
  align-items: center;
}

.shareProfileImg {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
}

.shareInput {
  border: none;
  width: 80%;
}

.shareInput:focus {
  outline: none;
}

.shareHr {
  margin: 20px;
}

.shareBottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.shareOptions{
    display: flex;
    margin-left: 20px;
}

.shareOption{
    display: flex;
    align-items: center;
    margin-right: 15px;
    cursor: pointer;
}

.shareIcon{
    font-size: 18px;
    margin-right: 3px;
}

.shareOptionText{
    font-size: 14px;
    font-weight: 500;
}

.shareButton{
    border: none;
    padding: 7px;
    border-radius: 5px;
    background-color: green;
    font-weight: 500;
    margin-right: 20px;
    cursor: pointer;
    color: white;
}

.shareImgContainer{
  padding: 0 20px 10px 20px;
  position: relative;
}

.shareImg{
  width: 100%;
  object-fit: cover;
}

.shareCancelImg{
  position: absolute;
  top: 0;
  right: 20px;
  cursor: pointer;
  opacity: 0.7;
}
`;
