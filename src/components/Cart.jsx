import { useDispatch, useSelector } from "react-redux";
import CartItems from "./CartItems";
import { clearItems } from "../Utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearItems());
  };

  return (
    <div>
      <CartItems cartItems={cartItems} />
      <div className="d-flex justify-content-center align-items-center mt-5 p-3 ">
        {cartItems.length === 0 ? (
          <Link to="/" className="btn btn-outline-success ">
            Order Now
          </Link>
        ) : (
          <button onClick={handleClearCart} className="btn btn-outline-danger ">
            Clear Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
