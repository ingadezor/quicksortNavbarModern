import React from "react"
import {FaTimes} from "react-icons/fa" //close icon
import sublinks from "../../data";

import {useGlobalContext} from "../context" 
//displayed on small screen when toggle button pushed. Takes the whole screen space



function Sidebar(){
    const {isSidebarOpen, setIsSidebarOpen} = useGlobalContext();




    // sidebar class is a hidden sidebar by default
    return <aside className={isSidebarOpen ? "sidebar open-sidebar" : "sidebar"}>
                <div className="sidebar-container">
                    <button className="close-btn" onClick={()=>{setIsSidebarOpen(false);}}><FaTimes /></button>


                    {/* parsing LINKS */}
                    <div className="sidebar-links">
                        {
                            sublinks.map((sublink)=>{
                                const {pageId, page, links} = sublink;

                                return <article key={pageId}>
                                    <h3>{page}</h3>
                                    <div className="sidebar-sublinks">
                                        {
                                            links.map((link)=>{
                                                return <a key={link.id} href={link.url}>{link.icon}{link.label}</a>
                                            })
                                        }
                                    </div>
                                </article>

                            })
                        }

                    </div>
                </div>

        
            </aside>

}

export default Sidebar