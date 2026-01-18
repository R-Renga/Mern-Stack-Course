import { Link } from "react-router-dom";

const Navbar = () => {
  return (
  <>
  <nav>
    <Link to="/about">about</Link>
    <Link to="/cart"> Cart</Link>
  </nav>
  </>
  );
};

export default Navbar;
