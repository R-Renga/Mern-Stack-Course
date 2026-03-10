import { useState } from "react"

const useCounter = (initialValue) => {
console.log(initialValue,"ini");

const [count,setCount] = useState(initialValue);
console.log(count,"count");

const increment = () => setCount(count + 1) 
const decrement = () => setCount(count - 1) 

return {count,increment,decrement}
}

export default useCounter;


function usefetchapi(url){
  const [data,setData] = useState(null);
  const [loading,setloading] = useState(true);
  const [error,setError] = useState(null);
  
  useEffect(()=>{
    setloading(true);
    fetch(url)
    .then((data)=>{
      return data.json()
    }).then((res)=>{
      setData(res);
      
    }).catch((error)=>{
      setError(error)
    }).finally(()=>{
      setloading(false)
    })
  },[url])
  return {data,loading,error};
};



const App = () => {
  const {data,loading,error} = usefetchapi(url)
  return (
    <div>
      {data.map(value=>(
      <h1>{value.name}</h1>
      ))}
    </div>
    )
}

