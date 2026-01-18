import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { Baseurl } from "../utils/constants";

const Login = () => {
  const [emailID, setEmail] = useState("vijay@gmail.com");
  const [password, setPassword] = useState("vijay@123");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLogin ,setIsLogin] = useState("true")
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        Baseurl + "/login",
        {
          emailID,
          password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res.data));
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
    }
  };

  const handleSign = async()=>{
    try {
      const res = await axios.post(Baseurl +"/signup",{
        firstName,
        lastName,
        emailID,
        password
      },{
        withCredentials:true
      })
      dispatch(addUser(res.data.data))
      return navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex justify-center">
      <div className="card bg-base-500 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title justify-center">{isLogin ? "Login" : "signup"}</h2>
          <div>
            <fieldset className="fieldset">
          {!isLogin && (
            <>
            <legend className="fieldset-legend">FirstName</legend>
              <input
                type="text"
                className="input"
                value={firstName}
                placeholder=""
                onChange={(e) => setFirstName(e.target.value)}
              />
              <legend className="fieldset-legend">LastName</legend>
              <input
                type="text"
                className="input"
                value={lastName}
                placeholder=""
                onChange={(e) => setLastName(e.target.value)}
              />
              </>
  )}
              <legend className="fieldset-legend">Email Id</legend>
              <input
                type="text"
                className="input"
                value={emailID}
                placeholder=""
                onChange={(e) => setEmail(e.target.value)}
              />
              <legend className="fieldset-legend">password</legend>
              <input
                type="password"
                className="input"
                value={password}
                placeholder=""
                onChange={(e) => setPassword(e.target.value)}
              />
            </fieldset>
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={isLogin ? handleLogin : handleSign}>
            {isLogin ? "Login" : "signup"}
            </button>
          </div>
          <p onClick={()=>setIsLogin((value)=> !value)}> {isLogin ? "new user signup" : "existing user"}</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
