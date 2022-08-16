import React, { useContext, useEffect, useState }  from "react";
import * as C from './CardProfileStyles';
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { api } from "../../config/api";

import Info from "../Info";
import Followers from "../Followers";

const CardProfile = ({ user }) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const PFP = process.env.REACT_APP_PERSON_FOLDER;
    const [friends, setFriends] = useState([]);
    const { user: currentUser, dispatch } = useContext(AuthContext);
    const [followed, setFollowed] = useState(
      currentUser.followings.includes(user?.id)
    );
    const verifyFollower = currentUser.followings.includes(user._id)

    useEffect(() => {
        const getFriends = async () => {
          try {
            const friendList = await api.get("/users/friends/" + user._id);
            setFriends(friendList.data);
          } catch (err) {
            console.log(err);
          }
        };
        getFriends();
      }, [user]);

      const handleClick = async () => {
        try {
          if (verifyFollower) {
            try{
              await api.put(`/users/${user._id}/unfollow`, {
                userId: currentUser._id,
              });
              dispatch({ type: "UNFOLLOW", payload: user._id });
            }catch(err){
              console.log(err)
            }
          } else {
            try{
              await api.put(`/users/${user._id}/follow`, {
                userId: currentUser._id,
              });
              dispatch({ type: "FOLLOW", payload: user._id });
            }catch(err){
              console.log(err)
            }
          }
          setFollowed(!followed);
        } catch (err) {
        }
      };

      return (
        <C.Container>
            <Info user={user} 
            currentUser={currentUser} 
            verifyFollower={verifyFollower}
            handleClick={handleClick}
             />
             
            <Followers 
            friends={friends}
            />
            
          </C.Container>
      );
}

export default CardProfile;