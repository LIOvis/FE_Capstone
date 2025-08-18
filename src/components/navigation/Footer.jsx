import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="navlink-wrapper">
        <NavLink to="/home">Merx</NavLink>
        <div className="spacer-bar">&ensp;</div>
        <NavLink to="/about">About</NavLink>
      </div>
      <p>
        Copyright &copy; 2025 <a href="https://github.com/LIOvis">LIOvis</a>
      </p>
    </div>
  );
}
