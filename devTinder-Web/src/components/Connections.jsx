import { useEffect } from "react";
import { Baseurl } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addconnections } from "../utils/connectionSlice";
const Connections = () => {
    const dispatch = useDispatch();
    const connections = useSelector(store => store.connections)

    
const fetchConnections = async() => {
    try {
        const res = await axios.get(Baseurl + "/user/connections",{withCredentials:true});
        console.log(res.data,"alllll");
        dispatch(addconnections(res.data));

    } catch (error) {
        console.log(error);
    }

} 



useEffect(()=>{
fetchConnections()
},[])


if(!connections) return

if(connections && connections.length === 0) return

console.log(connections)

    return (
        connections && (
        <div>
           {connections.data.map((item,index) => (
            <h1 key={index}>{item.firstName}</h1>
           ))}
        </div>
        )
    )
};

export default Connections;