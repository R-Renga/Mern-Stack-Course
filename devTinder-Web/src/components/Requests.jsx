import { useEffect } from "react";
import { Baseurl } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addconnections } from "../utils/connectionSlice";
import { addRequest, removeRequest } from "../utils/requestsSlice";

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.request);

    const reviewRequests = async(status,id)=>{
        const res = await axios.post(Baseurl + "/request/review/" + status + "/" + id,{},{withCredentials:true});

        dispatch(removeRequest(id))
    }

  const fetchRequests = async () => {
    try {
      const res = await axios.get(Baseurl + "/user/requests/recieved", {
        withCredentials: true,
      });
      dispatch(addRequest(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if(!requests) return

if(requests && requests.data.length === 0) return

console.log(requests,"requests")

  return (
    requests && (
      <div>
        <h1>{requests.data[0].fromUserId.firstName}</h1>
        <div>
          <button className="btn btn-primary" onClick={()=>reviewRequests("accepted",requests.data[0]._id)}>Accepet</button>
          <button className="btn btn-secondary" onClick={()=>reviewRequests("rejected",requests.data[0]._id)}>reject</button>
        </div>
      </div>
    )
  );
};

export default Requests;
