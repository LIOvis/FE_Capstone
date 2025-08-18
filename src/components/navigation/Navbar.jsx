import { NavLink } from "react-router-dom";
import { useState } from "react";

import MercuryIcon from "/mercury-favicon.svg";
import CartIcon from "../../assets/icons/cart.svg";
import HamburgerIcon from "../../assets/icons/hamburger.svg";
import XIcon from "../../assets/icons/x.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="logo-title button">
        <img src={MercuryIcon} className="icon" />
        <NavLink to="/home">MERX</NavLink>
      </div>
      <div className="right-nav-links-wrapper">
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
      <div className="hamburger-menu">
        <div
          className="toggle-menu button"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? (
            <img src={XIcon} className="icon" />
          ) : (
            <img src={HamburgerIcon} className="icon" />
          )}
        </div>

        <div className={`open-menu ${!isOpen ? "hidden" : "open"}`}>
          <NavLink
            to="/product-list"
            className="button"
            onClick={() => setIsOpen(false)}
          >
            Products
          </NavLink>
          <NavLink
            to="/about"
            className="button"
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="button"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
          <NavLink
            to="/cart"
            className="button"
            onClick={() => setIsOpen(false)}
          >
            <img src={CartIcon} className="icon" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
