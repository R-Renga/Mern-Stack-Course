import { useEffect, useState } from "react";

const Auth = (ProfilewithAuth) => {
  return function AuthComponent(){
    const [isAuth,setIsAuth] = useState(false)
    console.log("RENDER:", isAuth);
    useEffect(()=>{
        console.log("useefffect:", isAuth);
        setIsAuth(prev=>!prev)
    },[])
    if(!isAuth){
        return <h1>not login</h1>
    }
    return (
        <ProfilewithAuth />
    )
  }
  
};

export default Auth;
