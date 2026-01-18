import { useEffect, useState } from "react";

const About = () => {

    useEffect(()=>{
        let timer = setInterval(()=>{
            console.log("i am about");
        },1000)

    return ()=>{
        clearInterval(timer)
    }   
    },[])
  return (
    <div>
     about
    </div>
  );
};

export default About;
