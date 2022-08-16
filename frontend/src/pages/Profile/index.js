import React, { useState, useContext, useEffect } from "react";
import Feed from "../../components/Feed";
import * as C from './ProfileSyles';
import { AuthContext } from "../../context/AuthContext";

import Topbar from '../../components/Topbar';
import axios from "axios";
import { useParams } from "react-router";
import CardProfile from "../../components/CardProfile";
import { api } from "../../config/api";

const Profile = () => {
    const { user } = useContext(AuthContext)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    // const PFP = process.env.REACT_APP_PERSON_FOLDER;    
    const PFP = process.env.REACT_APP_PERSON_FOLDER; 
    const [currentUser, setCurrentUser] = useState({});
    const username = useParams().username;

    useEffect(() => {
        const fetchUser = async () => {
          const res = await api.get(`/users?username=${username}`);
          setCurrentUser(res.data);
        };
        fetchUser();
    }, [username]);

    return(
        <C.Container>
          <Topbar/>
          <C.Profile>
          <C.profileBox>
            <C.profileWrapper>
              <C.profileCover>
                <C.profileWrapperIMG>
                <img
                    className="profileCoverImg"
                    src={
                      currentUser.coverPicture
                        ? PFP + currentUser.coverPicture
                        : PF + "person/notCover.png"
                    }
                    alt=""
                  />
                </C.profileWrapperIMG>
                

                <img
                className="profileUserImg"
                src={
                  currentUser.profilePicture
                    ? PFP + currentUser.profilePicture
                    : PF + "person/noAvatar.png"
                }
                alt=""
                />
              </C.profileCover>
              
              <C.profileInfo>
                <h1 className="profileInfoName">{ currentUser.name ? currentUser.name : currentUser.username }</h1>
                <span className="profileInfoDesc">{currentUser.desc}</span>
              </C.profileInfo>

              <CardProfile user={currentUser} />
            </C.profileWrapper>

            <Feed username={username} />

          </C.profileBox>
        </C.Profile>
      </C.Container>
    )
}

export default Profile;