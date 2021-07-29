import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MessageBox from "../components/MessageBox";
import { addToCart, removeCart } from "../redux/actions/cartAction";

const CartScreen = (props) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const dispatch = useDispatch();
  const productID = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;

  useEffect(() => {
    if (productID) {
      dispatch(addToCart(productID, qty));
    }
  }, [dispatch, productID, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeCart(id))
  };
   
  const checkOutHandler = () => {
    props.history.push("/signin?redirect=shipping")
}
  return (
    <div className="row top">
      <div className="col-2">
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <MessageBox>
            Cart is empty <Link style={{ color: "#2020a0"}} to="/">Go to shopping</Link>
          </MessageBox>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.product}>
                <div className="row card">
                  <div>
                    <img className="small" alt={item.name} src={item.image} />
                  </div>
                  <div className="min-30">
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </div>

                  <div>
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                            addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(parseInt(item.countInStock)).keys()].map(
                        (x) => (
                          <option value={x + 1} key={x + 1}>
                            {x + 1}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                  <div>{item.price}TL</div>
                  <div>
                    <button
                      type="button"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="col-1">
        <div className="card card-body">
          <ul>
            <li>
              <h2>
                Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items ) :
                {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
              </h2>
                      </li>
                      <li>
                          <button type="button"
                              onClick={checkOutHandler}
                              className="block primary"
                          disabled={cartItems.length===0}>
                              Proceed to Checkout
                          </button>
                      </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default CartScreen;
