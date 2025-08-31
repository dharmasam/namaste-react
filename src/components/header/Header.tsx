import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import { UserContext } from "../../utils/UserContext";
import { useSelector } from "react-redux";
import { CART_LOGO_URL } from "../../utils/constants";
const Header = () => {
  const [buttonName, setButtonName] = useState("Login");
  const isOnline = useOnlineStatus();
  const { user, setUser } = useContext(UserContext);
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          Online: <span id="online-status">{isOnline ? "✅" : "🔴"}</span>
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
          <Link to="/groceries">Grocery</Link>
        </li>
        <li>
          {user.name}
        </li>
        <li>
          {user.email}
        </li>

        <li>
          <span className="cart-count">{cartItems.length}</span>
          <Link to="/cart"><img className="cart-logo" src={CART_LOGO_URL} alt="Cart" /></Link>
        </li>

        <button className="login-logout-btn" onClick={() => {
          const email = buttonName === "Login" ? "kumar.sumit2512@gmail.com" : "";
          const name = buttonName === "Login" ? "Sumit Kumar" : "Guest";
          if (buttonName === "Login") {
            setButtonName("Logout");
          } else {
            setButtonName("Login");
          }
          setUser({ name, email });
        }} >{buttonName}</button>

      </ul>
    </nav>
  );
};

export default Header;