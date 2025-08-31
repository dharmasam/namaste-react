import { useDispatch, useSelector } from "react-redux";
import { ITEM_IMAGE_URL } from "../utils/constants";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  { console.log(cartItems) }
  const handleClearCart = () => {
    dispatch(clearCart());
  }
  return  (cartItems.length === 0) ? (<h1 style={{justifyContent:"center"}}>Card is Empty</h1>):
(
    <div className="cart-container">
      <h1>Cart Items</h1>
      <button className="clear-cart-btn" onClick={() => handleClearCart()}> Clear</button>
      <div>
        {cartItems && cartItems.map((item, index) => (
          <div key={item.info.name + index} className="item">
            <div className="item-info">
              <h4>{item.info.name}</h4>
              <p className="item-description">{item.info.description.substring(0, 150)}...</p>
              <p>₹ {item.info.defaultPrice / 100 || item.info.price / 100}</p>
            </div>
            <div>
              <img className="item-image" src={`${ITEM_IMAGE_URL}${item.info.imageId}`} alt={item.info.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
