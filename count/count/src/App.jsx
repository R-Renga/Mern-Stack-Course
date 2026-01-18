import { useState } from "react"

function App() {
const [count,setCount] = useState(0)

  return (
  <>
  <h1 className="text-green-600 font-bold p-5">{count}</h1>
  <button className="p-4" onClick={()=>setCount(count + 1)}>increment</button>
  <button onClick={()=>setCount(count - 1)}>decrement</button>
  </>
  )
}

export default App
