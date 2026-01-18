import { useContext } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import {Outlet} from "react-router-dom"
import UserContext from "../utils/Usercontext";

const Body = () =>{
    const {loggedUser,setUsername} = useContext(UserContext)
    return (
        <div>
            <Navbar/>
            <h1>{loggedUser}</h1>
            <input type="text" value={loggedUser} onChange={(e)=>setUsername(e.target.value)}/>
            <Outlet/>
            <Footer/>      
        </div>
    )
}

export default Body;