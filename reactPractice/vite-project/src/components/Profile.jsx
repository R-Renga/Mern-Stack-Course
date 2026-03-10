import { useContext } from "react";
import userContext from "../utils/userContext";

const Profile = () => {
    const {defaultUser,setText} = useContext(userContext)
    return (
        <div>
            <h1>defaultUser</h1>
           <input type="text" onChange={(e)=>setText(e.target.value)}/>
        </div>
    )
}

export default Profile;