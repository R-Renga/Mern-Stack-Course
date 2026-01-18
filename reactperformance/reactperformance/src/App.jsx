import { BrowserRouter,Routes,Route } from "react-router-dom";
import Body from "./components/Body";
import UseMemo from "./components/usememo";
import Usecallback from "./components/Usecallback";
import UseRef from "./components/Useref";
import ReactMemo from "./components/Reactmemo";
import All from "./components/All";
import UseRefDom from "./components/useRefDom";

const App = () => {
  return (
    <div>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body/>}>
          <Route path="/usememo" element={<UseMemo/>}/>
          <Route path="/usecallback" element={<Usecallback/>}/>
          <Route path="/useref" element={<UseRef/>}/>
          <Route path="/reactmemo" element={<ReactMemo/>}/>
          <Route path="/All" element={<All/>}/>
          <Route path="/userefdom" element={<UseRefDom/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
