import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
const Nav = () => {
  return (
    <div className="navbar navbar-dark bg-dark navbar-expan-lg ">
      <div className="container">
        <a className="navbar-brand">Fatemeh Madihi</a>
        <ul className="nav nav-tabs">
          {/* <li class="nav-item m-2">
            <Link
              class="nav-link disabled bg-danger text-light"
              aria-disabled="true"
              to="#"
            >
              Disabled
            </Link>
          </li> */}
          <li className="nav-item bg-seccess m-2">
            <Link
              className="nav-link bg-danger text-light"
              aria-current="page"
              to="/"
            >
              Shop
            </Link>
          </li>
          <li className="nav-item m-2">
            <Link className="nav-link bg-danger text-light" to="/Card">
              <FontAwesomeIcon icon={faCartShopping} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Nav;
