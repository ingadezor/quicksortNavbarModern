import React from "react";



const GlobalContext = React.createContext();



export function AppProvider({children}){
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
    const [currentPageId, setCurrentPageId] = React.useState(null);

    return <GlobalContext.Provider value={{isSidebarOpen, setIsSidebarOpen, currentPageId, setCurrentPageId}}>
        {children}
    </GlobalContext.Provider>

}




export function useGlobalContext(){
    return React.useContext(GlobalContext);
}