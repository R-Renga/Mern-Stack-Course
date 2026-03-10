import { useState,useEffect} from 'react'
import './App.css'

function App() {
  const [light,setLight] = useState("green");

  const getDelay = (light) => {
    switch(light){
      case "green" : return 3000;
      case "yellow" : return 1000;
      case "red" : return 5000; 
      default: return 3000;
    }
  }
 

  useEffect(()=>{
    const timer = setTimeout(()=>{
     if(light === "green"){
      setLight("yellow")
     }else if(light === "yellow"){
      setLight("red")
     }else {
      setLight("green")
     }
    },light === "green" ? 3000 : light === "yellow" ? 1000 : 5000)

    return () => {
      clearTimeout(timer)
      console.log("componentwillunmount");
    }
  },[getDelay(light)])

  return (
      <div style={{
        color : light === "green" ? "green" 
        : light === "yellow" ? "yellow" : "red"
      }}>
       Traffic Lights
      </div>
  )
}

export default App
