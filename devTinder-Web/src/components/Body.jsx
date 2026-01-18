import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import { Baseurl } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useEffect } from "react";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const userData = useSelector(store => store.user);



  const userProfile = async() =>{
    try {
      if(userData){
        return
      }
      const res = await axios.get(Baseurl + "/profile/view",{
        withCredentials : true
      })
      dispatch(addUser(res.data))
    } catch (error) {
      if(error.status === 401){
        navigate("/login")
      }
      console.log(error);
    }
  
  }

  useEffect(()=>{
   userProfile()
  },[])


  return (
    <div>
      <Navbar />
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default Body;
