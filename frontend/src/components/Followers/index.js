import React from "react";
import * as C from './FollowersStyles';
import { Link } from "react-router-dom";

const Followers = ({friends}) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const PFP = process.env.REACT_APP_PERSON_FOLDER;

    return(
        <C.Container>

            <C.FollowingsTitle>Seguindo...</C.FollowingsTitle>
            <C.Followings>
              <C.FollowingsBox>
                {friends.map((friend) => (
                    <C.FollowingsLink
                      to={"/profile/" + friend.username}
                      style={{ textDecoration: "none" }}
                    >
                    <C.FollowingsUser>
                      <img
                        src={
                          friend.profilePicture
                            ? PFP + friend.profilePicture
                            : PF + "person/noAvatar.png"
                        }
                        alt=""
                        className="postProfileImg"
                      />
                      <span className="rightbarFollowingName">{friend.username}</span>
                    </C.FollowingsUser>
                  </C.FollowingsLink>
                ))}
              </C.FollowingsBox>
            </C.Followings>

          </C.Container>
    )
}

export default Followers;