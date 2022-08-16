import React, { useState, useEffect, useContext} from "react";
import * as C from './SidebarStyles';
import { AuthContext } from "../../context/AuthContext";
import { api } from "../../config/api";

const Sidebar = () => {
    const [friends, setFriends] = useState([]);
    const { user: currentUser, dispatch } = useContext(AuthContext);

    useEffect(() => {
        const getFriends = async () => {
          try {
            const friendList = await api.get("/users/friends/" + currentUser._id);
            setFriends(friendList.data);
          } catch (err) {
            console.log(err);
          }
        };
        getFriends();
      }, [currentUser]);

      console.log(friends)
      
    return(
        <C.Container>
            <div className="sidebar">
            <div className="sidebarWrapper">
               
                {friends.map((u) => (
                    <div key={u.id} user={u}>
                        <h2>{u.username}</h2>
                        <h2>asdasdw</h2>
                        <h2>asdasdw</h2>
                        <h2>asdasdw</h2>
                        <h2>asdasdw</h2>
                        <h2>asdasdw</h2>
                        <h2>asdasdw</h2>
                        <h2>asdasdw</h2>
                        <h2>asdasdw</h2>
                        <h2>asdasdw</h2>
                        <h2>asdasdw</h2>
                        <h2>asdasdw</h2>
                        <h2>asdasdw</h2>
                    </div>
                    // <CloseFriend key={u.id} user={u} />
                ))}
            </div>
            </div>
        </C.Container>
    )
}

export default Sidebar;