import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar navbar-expand navbar-light bg-light">
      <ul className="navbar-nav m-3">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/cart">
            Cart
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
