import React, { useContext, useState } from "react";
import ModalBox from "../Modal";
import { FaUserEdit, FaMapMarkerAlt, FaRegKissWinkHeart } from "react-icons/fa";
import * as C from './InfoStyles';

const Info = ({user, currentUser, verifyFollower, handleClick}) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    var relacionameto = ''
    if(user.relationship === 1){
      relacionameto = 'Solteiro'
    }else if(user.relationship === 2){
      relacionameto = 'Casado'
    }else if(user.relationship === 3){
      relacionameto = 'Enrolado'
    }else{
      relacionameto = 'Não definido...'
    }

    return(
        <C.Container>

            {user.username === currentUser.username && (
              <C.InfoUpdateIcon>
                <FaUserEdit onClick={handleShow}/>
              </C.InfoUpdateIcon>
            )}

            <C.InfoButtonWrapper>
              {user.username !== currentUser.username && (
                <C.InfoButton className="rightbarFollowButton" onClick={handleClick}>
                  {verifyFollower ? "Deixar de seguir" : "Seguir"}
                </C.InfoButton>
              )}
            </C.InfoButtonWrapper>

            <ModalBox show={show} handleClose={handleClose} user={user} currentUser={currentUser} />

            <C.Info>
                <C.InfoUsername>
                    @{user.username}
                </C.InfoUsername>

                <C.InfoP><FaMapMarkerAlt/> Mora em: {user.city ? user.city : "Não informado..."}</C.InfoP>
                <C.InfoP><FaMapMarkerAlt/> De: {user.from ? user.from : "Não informado..."}</C.InfoP>
                <C.InfoP><FaRegKissWinkHeart/> {relacionameto}</C.InfoP>

            </C.Info>
        </C.Container>
    )
}

export default Info;