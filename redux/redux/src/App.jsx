import {BrowserRouter,Route,Routes} from "react-router-dom"
import Body from "./components/Body";
import Profile from "./components/Profile";
import About from "./components/About";

const App = () => {
  return (
    <div>
      <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body/>}>
        <Route path="/about" element={<About/>}/>
        <Route path="/profile"  element={<Profile/>}/>
        <Route/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;