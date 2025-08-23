import { useState } from "react";
import { Link } from "react-router-dom";
export const NavigationBar = () => {
  const [buttonName, setButtonName] = useState("Login");
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contactUs">Contact Us</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <button className="login-logout-btn" onClick={() => {
          if (buttonName === "Login") {
            setButtonName("Logout");
          } else {
            setButtonName("Login");
          }
        }} >{buttonName}</button>
      </ul>
    </nav>
  );
};
