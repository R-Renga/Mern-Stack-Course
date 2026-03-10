import { useState } from "react";
import Notes from "./components/Notes";

const App = () =>{
  const [notes,setNotes] = useState([
    {
      id:1,
      message:"hi hello welcome"
    },{
      id :2,
      message:"welcome,hello,hi"
    }
  ])
  return (
    <div>
      <Notes notes={notes} setNotes={setNotes}/>
    </div>
  )
}

export default App;