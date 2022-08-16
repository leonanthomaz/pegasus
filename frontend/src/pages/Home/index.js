import React, { useState, useContext } from "react";
import Feed from "../../components/Feed";
import * as C from './HomeStyles'
import Topbar from "../../components/Topbar";
import Search from "../../components/Search";
// import Sidebar from "../../components/Sidebar";

const Home = () => {
    return(
        <C.Container>
            <Topbar/>
            <Search/>
            {/* <Sidebar/> */}
            <Feed/> 
        </C.Container>
    )
}

export default Home;