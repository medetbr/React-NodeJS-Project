import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import { useDispatch, useSelector } from "react-redux";
import SigninScreen from "./screens/SigninScreen";
import { signOut } from "./redux/actions/userAction";
import RegisterScreen from "./screens/RegisterScreen";

function App() {
  
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const signin = useSelector((state) => state.userSignin);
  const { userInfo } = signin;
  const { cartItems } = cart;

  const signoutHandler = () => {
    dispatch(signOut())
  }
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              homee
            </Link>
          </div>
          <div className="top-right">
            {
              <Link to="/cart">
                {" "}
                {cartItems.length === 0 ? (
                  <i className="fas fa-shopping-cart"></i>
                ) : (
                  <i className="fas fa-shopping-cart">
                    <span className="badge">{cartItems.length}</span>{" "}
                  </i>
                )}
              </Link>
            }{
              userInfo ?
                (
                  <div className="dropdown" > 
                    <Link to="#">{userInfo.name}<i className="m-1 fas fa-caret-down"></i>{' '}</Link>
                    <ul className="dropdown-content f-4">
                      <Link to="#signout" onClick={signoutHandler}>Sign Out</Link>
                     
                    </ul>
                    </div>
                )
                : (<Link to="/signin">Sign In</Link>)
            }
            
          </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/" exact component={HomeScreen}></Route>
        </main>
        <footer className="row center">All Right Reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
