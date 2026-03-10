import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import userContext from "../utils/userContext";
import { useContext, useState } from "react";
const Body = ()=>{
    const [text,setText] = useState("rengaaa")
    const {defaultUser} = useContext(userContext)
    return (
        <userContext.Provider value={{defaultUser:text,setText}}>
        <Navbar/>
        <h1>{defaultUser}</h1>
        <Outlet/>
        <Footer/>
        </userContext.Provider>
         
        
    )
}

export default Body;