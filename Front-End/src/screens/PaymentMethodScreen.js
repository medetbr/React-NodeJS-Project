import React, { useState } from "react";
import { useSelector } from "react-redux";
import CheckoutSteps from "../components/CheckoutSteps";

const PaymentMethodScreen = (props) => {
  
    const signin = useSelector(state => state.userSignin);
    const cart = useSelector(state => state.cart);
    const {shippingAddress} = cart
    const { userInfo } = signin;

    if(!userInfo){props.history.push("/signin")}
    if(!shippingAddress.name){props.history.push("/shipping")}
console.log(shippingAddress.name)
    const [paymentMethod,setPaymentMethod] = useState("PayPal")
  
  const submitHandler = () => { };
  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Payment</h1>
        </div>
        <div>
          <div>
            <input
              type="radio"
              id="paypal"
              value="PayPal"
              name="paymentMethod"
              required
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
                      ></input>
                      <label htmlFor="paypal">PayPal</label>
          </div>
              </div>
              <div>
          <div>
            <input
              type="radio"
              id="stripe"
              value="Stripe"
              name="paymentMethod"
              required
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
                      ></input>
                      <label htmlFor="stripe">Stripe</label>
          </div>
              </div>
              <div>
                  <button type="submit" className="primary">Continue</button>
              </div>
      </form>
    </div>
  );
};
export default PaymentMethodScreen;
