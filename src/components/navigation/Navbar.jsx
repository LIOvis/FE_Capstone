import { NavLink } from "react-router-dom";
import MercuryIcon from "/mercury-favicon.svg";
import CartIcon from "../../assets/cart.svg";

import Routing from "./Routing";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo-title button">
        <img src={MercuryIcon} className="icon" />
        <NavLink to="/home">MERX</NavLink>
      </div>
      <NavLink to="/product-list" className="button">
        Products
      </NavLink>
      <NavLink to="/about" className="button">
        About
      </NavLink>
      <NavLink to="/contact" className="button">
        Contact
      </NavLink>
      <NavLink to="/cart" className="button">
        <img src={CartIcon} className="icon" />
      </NavLink>
    </div>
  );
}
