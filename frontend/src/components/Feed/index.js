import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import * as C from './FeedStyles'
import Post from "../Post";
import { AuthContext } from "../../context/AuthContext";
import Share from "../Share";
import { api } from "../../config/api";


const Feed = ({username}) => {
    const [posts, setPosts] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchPosts = async () => {
          const res = username
            ? await api.get("/posts/profile/" + username)
            : await api.get("/posts/timeline/" + user._id);
          setPosts(
            res.data.sort((p1, p2) => {
              return new Date(p2.createdAt) - new Date(p1.createdAt);
            })
          );
        };
        fetchPosts();
      }, [username, user._id]);

    return(
        <C.Container>
            <C.Feed>
              <C.FeedWrapper>
                {(!username || username === user.username) && <Share />}
                {posts.map((p) => (
                  <Post key={p._id} post={p} user={user} />
                ))}
              </C.FeedWrapper>
            </C.Feed>
        </C.Container>
    )
}

export default Feed;