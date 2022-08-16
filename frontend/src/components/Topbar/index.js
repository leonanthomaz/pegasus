import React, { useContext, useState, useEffect } from "react";
import * as C from './TopbarStyles';
import { AuthContext } from "../../context/AuthContext";
import Menu from "../Menu";
import axios from "axios";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { api } from "../../config/api";

const Topbar = () => {
    const { user, logout } = useContext(AuthContext);
    const PFP = process.env.REACT_APP_PERSON_FOLDER;
    const [ currentUser, setCurrentUser ] = useState({})

    useEffect(() => {
        const fetchUser = async () => {
          const res = await api.get(`/users?username=${user.username}`);
          setCurrentUser(res.data);
        };
        fetchUser();
    }, [user.username]);

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
      };

    return(
        <C.Container>
            <div className="topbarContainer">

                <div className="topbarLeft">
                    <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">Projeto Pégasus</span>
                    </Link>
                </div>

                <C.Icon>
                    <BiMenu onClick={toggle}/>
                </C.Icon>

                <Menu isOpen={isOpen} 
                    toggle={toggle} 
                    user={user} 
                    currentUser={currentUser} 
                />
            </div>
        </C.Container>
    )
}

export default Topbar