import React, { useEffect, useState } from "react";
import * as C from './SearchStyles';
import ListUser from "../ListUser";
// import axios from "axios";
import { api } from "../../config/api";
import { BsSearch } from "react-icons/bs";

const Search = () => {
    const [ list, setList ] = useState([])
    const [ text, setText ] = useState('')

    useEffect(()=>{
        const selectUser = async () => {
            const user = await api.get(`/users/all`)
            setList(user.data)
        } 
        selectUser()
    }, [])

    return (
        <C.Container>
            <div className="searchbar">
            <BsSearch className="searchIcon" />
            <div className="searchIcon"></div>
            <input
                placeholder="Ache seus amigos..."
                className="searchInput"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            </div>
            { text ? 
            list.filter(e => e.username.toLowerCase().includes(text)).map((e)=>{
                return (
                    <ListUser user={[e.username]} foto={e.profilePicture}/>
                )
            })
            : ""}
        </C.Container>
    )
}

export default Search;