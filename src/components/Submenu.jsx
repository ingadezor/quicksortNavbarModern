import React from "react"
import sublinks from "../../data"
import { useGlobalContext } from "../context"

//submenu pops out when hovering over any navigation link on a big screen




export default function Submenu(){
    const {currentPageId, setCurrentPageId} = useGlobalContext();


    //looking for the right page links to display once hovered over any link in the navigation:
    const currentPage = sublinks.find((page)=>{
        return page.pageId==currentPageId;
    })


    function handleOnMouseLeave(e){
        //when cursor is not over the submenu any more, need to hide it
        setCurrentPageId(null);

    }
    





    return <article  onMouseLeave={handleOnMouseLeave} className={currentPage ? "show-submenu submenu" : "submenu"}>
       <h3>{currentPage?.page}</h3>
       
       <div className="sublinkss" style={{gridTemplateColumns: currentPage?.links.length>3 ? "1fr 1fr" : "1fr"}}>
        {
           currentPage?.links.map((link)=>{
            const {id, label, icon, url} = link;
            return <a href="url" key={id}>{icon}{label}</a>
           })

        }
       </div>
        
    </article>
} 