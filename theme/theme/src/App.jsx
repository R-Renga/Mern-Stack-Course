import { useState } from "react";

const App = () => {
  const [theme,setTheme] = useState(true);

  return (
    <div>
      <button onClick={()=>setTheme(!theme)} className="px-4 py-2 m-10 bg-blue-500 text-white rounded">{theme ? "White" : "Dark"}</button>
        {/* <div className={"m-4 w-96 h-96 border border-black" + (theme && " bg-black")}></div> */}
      <div className={"m-20 w-96 h-96 border border-black" + (theme ? " bg-black" : " bg-white")}></div>
    </div>
  )
}

export default App;