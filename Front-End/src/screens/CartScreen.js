import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { cartAction } from "../redux/actions/cartAction";

const CartScreen = (props) => {
    const dispatch = useDispatch();
    const productID = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split('=')[1]) : 1

    useEffect(() => {
        if (productID) {
            dispatch(cartAction(productID,qty))
        }
    },[dispatch,productID,qty])

    return (
        <div>
            <h1>Cart Screen</h1>
            <p>ADD TO CART: ProductID : {productID} Qty: {qty} </p>
        </div>
    )
}
export default CartScreen