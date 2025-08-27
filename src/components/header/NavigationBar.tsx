import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
export const NavigationBar = () => {
  const [buttonName, setButtonName] = useState("Login");
  const isOnline = useOnlineStatus();
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          Online: <span id="online-status">{isOnline ? "✅":"🔴"}</span>
        </li>
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
        <li>
          <Link to="/groceries">Grocery</Link>
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
