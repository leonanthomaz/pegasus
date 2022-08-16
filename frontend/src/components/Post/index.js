import React, { useContext, useEffect, useState } from "react";
import * as C from './PostStyles'
import { Link } from "react-router-dom";
import axios from "axios";
// import { format } from "timeago.js";
import { AuthContext } from '../../context/AuthContext';
import { BsTrash } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import {api} from '../../config/api';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import TimeAgo from 'javascript-time-ago'
import pt from 'javascript-time-ago/locale/pt'
TimeAgo.addDefaultLocale(pt)
const timeAgo = new TimeAgo('pt-BR')


const Post = ({ post }) => {

    const { user } = useContext(AuthContext)

    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const [userCurrent, setUserCurrent] = useState({});
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const PFP = process.env.REACT_APP_PERSON_FOLDER;
    const [smShow, setSmShow] = useState(false);

    useEffect(() => {
        setIsLiked(post.likes.includes(user._id));
      }, [userCurrent._id, post.likes]);
    
      useEffect(() => {
        const fetchUser = async () => {
          const res = await api.get(`/users?userId=${post.userId}`);
          setUserCurrent(res.data);
        };
        fetchUser();
      }, [post.userId]);
    
      const likeHandler = () => {
        try {
          api.put("/posts/" + post._id + "/like", { userId: user._id });
        } catch (err) {}
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
      };

      const deletePost = async () => {
        try{
          await api.delete(`/posts/${post._id}`, { userId: user._id })
          window.location.reload()
        }catch(err){
          console.log(err)
        }
      }

      // console.log(PF + post.img)
      // console.log(userCurrent)

    return(
        <C.Container>
          <div className="post">
            <div className="postWrapper">
              <div className="postTop">
                <div className="postTopLeft">
                  <Link to={`/profile/${userCurrent.username}`}>
                    <img
                      className="postProfileImg"
                      src={
                        userCurrent.profilePicture
                          ? PFP + userCurrent.profilePicture
                          : PF + "person/noAvatar.png"
                          // : <img src="https://iotorrino.com.br/wp-content/uploads/2021/04/no-avatar.png" />
                      }
                      alt=""
                    />
                  </Link>
                  <span className="postUsername">{userCurrent.username}</span>
                  <span className="postDate">{timeAgo.format((new Date(post.createdAt)))}</span>
                </div>
                <div className="postDeleteIcon">
                  { post.userId === user._id ? <BsTrash onClick={() => setSmShow(true)} /> : "" }
                  <Modal
                    size="sm"
                    show={smShow}
                    onHide={() => setSmShow(false)}
                    aria-labelledby="example-modal-sizes-title-sm"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title id="example-modal-sizes-title-sm">
                        Confirma a exclusão do post?
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Button variant="danger" onClick={deletePost}>Sim</Button>
                      <Button closeButton>Não</Button>
                    </Modal.Body>
                  </Modal>
                </div>
              </div>
              <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                {/* <div className="updateDescPost" style={{ float: 'right'}}>
                    { post.userId === user._id ? <BiEditAlt/> : "" }
                </div> */}
                <img className="postImg" src={PF + post.img} alt="" />
              </div>
              <div className="postBottom">
                <div className="postBottomLeft">
                  {/* <img
                    className="likeIcon"
                    src={`${PF}like.png`}
                    onClick={likeHandler}
                    alt=""
                  /> */}
                  <img
                    className="likeIcon"
                    src={`${PF}heart.png`}
                    onClick={likeHandler}
                    alt=""
                  />
                  <span className="postLikeCounter">{like}</span>
                </div>
                {/* <div className="postBottomRight">
                  <span className="postCommentText">{post.comment} comentários</span>
                </div> */}
              </div>
            </div>
          </div>
        </C.Container>
    )
}

export default Post;