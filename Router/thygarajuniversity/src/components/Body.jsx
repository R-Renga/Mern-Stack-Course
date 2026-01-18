import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./footer";
import About from "./About";
import AboutClass from "./AboutClass";

const Body = () =>{
    return (
        <div>
            <Navbar/>
            <h1>Body</h1>
           

            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Body;