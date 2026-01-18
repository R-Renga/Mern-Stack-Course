import { useContext } from "react";
import {Link} from "react-router-dom"
import UserContext from "../utils/Usercontext";
const Navbar = () => {
    const userInfo = useContext(UserContext)
    console.log(userInfo);
    return (
        <div>
            <h1>{userInfo.loggedUser}</h1>
            <Link to="/about">about</Link>
            <Link to="/profile"> profile</Link>
        </div>
    )
}

export default Navbar;