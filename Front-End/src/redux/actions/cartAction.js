import axios from "axios"
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_SHIPPING_ADDRESS } from "../constants/cartConstants"

export const addToCart = (productID, qty) => async (dispatch,getState)=> {
    
    const { data } = await axios.get(`http://localhost:5000/api/products/${productID}`)
    
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            name: data.name,
            price: data.price,
            image: data.image,
            countInStock: data.countInStock,
            product: data._id,
            qty
        }
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}

export const removeCart = (productID) => async (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: productID
    })
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}
export const saveShippingAddress = (data) => async (dispatch)=> {
    dispatch({ type: CART_SAVE_SHIPPING_ADDRESS, payload: data })
    localStorage.setItem("shippingAddress", JSON.stringify(data));
}