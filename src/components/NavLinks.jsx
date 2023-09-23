import React from "react"
import sublinks from "../../data"

import { useGlobalContext } from "../context";
// navlinks (hidden by default and shown when 992px> screen width

export default function NavLinks(){
    const {setCurrentPageId} = useGlobalContext(); //when hover over any link in the nav, need to identify that link by setting a



    return <div className="navlinks">
        {
            sublinks.map((navlink)=>{
                const {pageId, page, links} = navlink;
                return <button className="nav-link" onMouseEnter={()=>{setCurrentPageId(pageId)}} key={pageId}>{page}</button>
            })
        }


    </div>
}

