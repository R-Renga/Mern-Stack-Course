import { useState } from "react";
import Datas from "../data.json"
import ListFiles from "./Components/ListFiles";

const App = () => {
  const [data,SetData] = useState(Datas)
  return (
    <div>
      <h1 style={{textAlign:"center"}}>Sidebar</h1>
      <ListFiles list={data}/>
    </div>
  )
}

export default App;