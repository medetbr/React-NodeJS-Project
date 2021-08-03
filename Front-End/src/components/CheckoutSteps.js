import React from "react";

const CheckoutSteps = (props) => {
  
    return (
        <div className="row checkout-steps">
            <div className = {props.step1 ? 'active' : ''}><span className="f-1">Sign-In</span> </div>
            <div className = {props.step2 ? 'active' : ''}><span className="f-1">Shipping</span></div>
            <div className = {props.step3 ? 'active' : ''}><span className="f-1">Payment</span></div>
            <div className = {props.step4 ? 'active' : ''}><span className="f-1">Place Order</span> </div>
        </div>
    )
}
export default CheckoutSteps