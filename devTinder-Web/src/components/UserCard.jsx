import axios from "axios";
import { Baseurl } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { removeFeed } from "../utils/feedSlice";

const UserCard = ({user}) => {
  const dispatch = useDispatch();
const handleRequest = async(status,id) => {
  try {
    const res = await axios.post(Baseurl + "/request/send/" + status + "/" + id,{},{withCredentials:true});
    dispatch(removeFeed(id))
  } catch (error) {
    console.log(error)
  }
}



  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src={user.photourl}
          alt="profileimg"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{user.firstName}</h2>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={()=>handleRequest("ignore",user._id)}>Ignore</button>
          <button className="btn btn-primary" onClick={()=>handleRequest("interested",user._id)}>Interest</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;