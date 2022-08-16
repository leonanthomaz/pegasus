import React, { useContext } from "react";
import * as C from './MenuStyles';
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { FaUserCircle, FaUserTimes } from "react-icons/fa";

const Menu = ({ isOpen, toggle, currentUser,user }) => {
    const PFP = process.env.REACT_APP_PERSON_FOLDER;
    const { logout } = useContext(AuthContext);

    return(
        <C.Menu isOpen={isOpen} onClick={toggle}>

             <C.CloseIcon onClick={toggle}>
                <C.CloseIcon />
            </C.CloseIcon>

            <C.MenuContainer>
                <C.MenuUser>
                    <Link to={`/profile/${user.username}`}>
                        <img
                            src={
                            currentUser.profilePicture
                                ? PFP + currentUser.profilePicture
                                : PFP + "noAvatar.png"
                            }
                            alt=""
                            className="topbarImg"
                        />
                    </Link>
                    <C.MenuUsername>{user.username}</C.MenuUsername>
                </C.MenuUser>

                <C.MenuWrapper>
                    <C.MenuUL>
                        <C.MenuLI>
                            <C.MenuNavLink to={`/profile/${user.username}`}>
                                <FaUserCircle/> Meu perfil
                            </C.MenuNavLink>   
                        </C.MenuLI>  
                        <C.MenuLI>
                            <C.MenuNavLink to={`/`}>
                                <FaUserCircle/> Feed
                            </C.MenuNavLink>   
                        </C.MenuLI>  
                                   
                    </C.MenuUL>
                </C.MenuWrapper>
                
                <C.MenuFooter>
                    <C.MenuLogout onClick={logout}>
                        <FaUserTimes/> <span>Logout</span>
                    </C.MenuLogout>
                </C.MenuFooter>

            </C.MenuContainer>
        </C.Menu>
    )
}

export default Menu;