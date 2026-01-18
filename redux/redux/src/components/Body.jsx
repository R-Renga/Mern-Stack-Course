import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Cart from "./Cart";
import Checking from "./Checkingrendering";

const Body = () => {
  return (
    <Provider store={appStore}>
      <div>
        <Navbar />
        <Cart/>
        <Checking/>
        <Outlet />
      </div>
    </Provider>
  );
};

export default Body;
