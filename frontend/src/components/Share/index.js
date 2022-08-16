import React, { useEffect } from "react";
import * as C from './ShareStyles';
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { BsCardImage, BsFillCameraFill, BsFillShareFill, BsTagFill, BsFillPinMapFill } from "react-icons/bs";
import { api } from "../../config/api";

const Share = () => {
    const { user } = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const PFP = process.env.REACT_APP_PERSON_FOLDER;
    const desc = useRef();
    const [file, setFile] = useState(null);
    const [ currentUser, setCurrentUser ] = useState({})

    useEffect(() => {
        const fetchUser = async () => {
          const res = await api.get(`/users?username=${user.username}`);
          setCurrentUser(res.data);
        };
        fetchUser();
    }, [user.username]);

    const submitHandler = async (e) => {
        e.preventDefault();
        const newPost = {
          userId: user._id,
          desc: desc.current.value,
        };
        if (file) {
          const data = new FormData();
          const fileName = Date.now() + file.name;
          data.append("name", fileName);
          data.append("file", file);
          newPost.img = fileName;
          console.log(newPost);
          try {
            await api.post("/upload", data);
          } catch (err) {}
        }
        try {
          await api.post("/posts", newPost);
          window.location.reload();
        } catch (err) {}
    };

    return(
        <C.Container>
            <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                <img
                    className="shareProfileImg"
                    src={
                    currentUser.profilePicture
                        ? PFP + currentUser.profilePicture
                        : PF + "person/noAvatar.png"
                    }
                    alt=""
                />
                <input
                    placeholder={"O que está pensando, " + user.username + "?"}
                    className="shareInput"
                    ref={desc}
                />
                </div>
                <hr className="shareHr" />
                {file && (
                <div className="shareImgContainer">
                    <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
                    <h1 className="shareCancelImg" onClick={() => setFile(null)}>X</h1>
                </div>
                )}
                <form className="shareBottom" onSubmit={submitHandler}>
                <div className="shareOptions">
                    <label htmlFor="file" className="shareOption">
                    <BsCardImage className="shareIcon" />
                    <span className="shareOptionText">Imagem</span>
                    <input
                        style={{ display: "none" }}
                        type="file"
                        id="file"
                        accept=".png,.jpeg,.jpg"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                    </label>
                    {/* <div className="shareOption">
                    <BsTagFill className="shareIcon" />
                    <span className="shareOptionText">Tag</span>
                    </div> */}
                    <div className="shareOption">
                    <BsFillPinMapFill className="shareIcon" />
                    <span className="shareOptionText">Localização</span>
                    </div>
                </div>
                <button className="shareButton" type="submit">
                    Publicar
                </button>
                </form>
            </div>
            </div>
        </C.Container>
    )
}

export default Share