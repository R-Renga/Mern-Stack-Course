import { useContext } from "react"
import { Link } from "react-router-dom"
import userContext from "../utils/userContext"

const Navbar = ()=>{
    const {defaultUser} = useContext(userContext);
    console.log(defaultUser);
    return (
        <div>
            <h1>Navbar</h1>
            <h1>{defaultUser}</h1>
            <Link to="/profile">Profile</Link>
        </div>
    )
}

export default Navbar