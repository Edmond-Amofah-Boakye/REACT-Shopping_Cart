import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../store/Context";
import "../styles/Cart.css";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = useContext(AppContext);

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  const cartItems = cart.map((i) => {
    return (
      <div key={i.id}>
        <div className="cart-wrapper">
          <div className="img">
            <img src={i.image} alt={i.name} />
          </div>
          <div className="price">
            <h3>¢{i.price}</h3>
          </div>
          <div className="cartinput">
            <input
              type="number"
              min={1}
              onChange={(e) =>
                dispatch({
                  type: "CHANGE_QTY",
                  payload: { id: i.id, qty: e.target.value },
                })
              }
            />
          </div>
          <div className="cartbtn">
            <button
              onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: i })}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="cart-display">
        {cart.length <= 0 && (
          <p>There are no items in the cart ...............</p>
        )}
        <div className="cart-main">{cartItems}</div>
        <div className="cartSideBar">
          <h3>SubTotal: ({cart.length}) items</h3>
          <h4>Total: ¢{total}</h4>
          <button className="proceed">Proceed To Checkout</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
