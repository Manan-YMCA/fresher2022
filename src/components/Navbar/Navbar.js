import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/registration">Registration</Link>
          </li>
          <li>
            <Link to="/details">Details</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Navbar;