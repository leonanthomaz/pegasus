
import styled from 'styled-components'

export const Container = styled.div`

.editPhotoProfile{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    top: -10px;
    font-size: 20px;
    
    &:hover{
        opacity: 1;
    }
}

`;

export const Profile = styled.div`
    display: flex;
`;

export const profileBox = styled.div`
    width: 100vw;
    height: 100vh;
`;

export const profileWrapper = styled.div`

`;

export const profileWrapperIMG = styled.div`
    width: 100%;
    height: 250px;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const profileCover = styled.div`
    height: 320px;
    position: relative;

    .profileCoverImg{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .profileUserImg{
        width: 150px;
        height: 150px;
        border-radius: 50%;
        object-fit: cover;
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
        top: 150px;
        border: 3px solid white;
    }
`;


export const profileInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;

    .profileInfoName{
        font-size: 36px;
        font-weight: 700;
    }

    span{
        font-size: 14px;
        font-weight: 300;
        font-style: italic;
    }
`;


