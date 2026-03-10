import {BrowserRouter, Route, Routes} from "react-router-dom"
import Body from "./components/Body";
import About from "./components/About";

import { Suspense, lazy } from "react";

const Profile = lazy(()=>import("./components/Profile"))

const App = ()=>{
  return (
<>
<BrowserRouter basename="/">
  <Routes>
    <Route path="/" element={<Body/>}>
    <Route path="/about" element={<About/>}/>
    <Route path="/profile" element={<Suspense fallback={<h1>loading...</h1>}><Profile/></Suspense>}/>
    </Route>
  </Routes>
</BrowserRouter>
</>
  )
}

export default App;