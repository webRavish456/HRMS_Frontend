"use client"

import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout=({children})=>{
    return(
        <div className="app-container">
            <Sidebar/>
        <div className="main-content">
            <Header/>
        <main className="content-area">
            {children}
        </main>
        </div>
    </div>
   
    )
}
export default Layout