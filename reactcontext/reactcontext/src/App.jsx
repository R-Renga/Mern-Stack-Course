import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import About from "./components/About";
import Profile from "./components/Profile";
import UserContext from "./utils/Usercontext";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    //make api call
    setUsername("renga");
  }, []);
  return (
    <div>
      <UserContext.Provider value={{ loggedUser: username, setUsername }}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/about" element={<About />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
};

export default App;
