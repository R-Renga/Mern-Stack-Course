import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Body from "./components/body";
import {lazy,Suspense} from "react"
// import Cart from "./components/cart"
const Cart = lazy(()=>import("./components/cart"))


const App = () =>{
  return (
   <>
   <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<Body/>}>
        <Route path="/about" element={<About/>}/>
        <Route path="/cart" element={<Suspense fallback={<h1>loading....</h1>}><Cart/></Suspense>}/>
      </Route>
    </Routes>
   </BrowserRouter>
   </>
  )
}


export default App;

