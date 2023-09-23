import React from "react"
import {FaBars} from "react-icons/fa" //toggle button
import {useGlobalContext} from "../context" 

import NavLinks from "./NavLinks"


function Navbar(){
    const {isSidebarOpen, setIsSidebarOpen, setCurrentPageId} = useGlobalContext();


   function handleOnMouseOver(e){
        //if hovering over anything except a link in the nav -> hide submenu
        //console.log(e.target);
        if(!e.target.classList.contains("nav-link")) setCurrentPageId(null);
    }




    return <nav onMouseOver={handleOnMouseOver}>
        <div className="nav-center">
            <h2 className="logo">QuickSort</h2>
            <button className="toggle-btn" onClick={()=>{setIsSidebarOpen(true)}}><FaBars /></button>
       
             {/* navlinks (hidden by default and shown when 992px> screen width*/}
             <NavLinks />
        </div>


    </nav>
}


export default Navbar