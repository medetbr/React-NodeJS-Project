import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckoutSteps from "../components/CheckoutSteps";
import { saveShippingAddress } from "../redux/actions/cartAction";

const ShippingAddressScreen = (props) => {
   
    const signin = useSelector(state => state.userSignin);
    const cart = useSelector(state => state.cart);
    const {shippingAddress} = cart
    const { userInfo } = signin;

    if(!userInfo){props.history.push("/signin")}

    const [name,setName] = useState(shippingAddress.name)
    const [address,setAddress] = useState(shippingAddress.address)
    const [city,setCity] = useState(shippingAddress.city)
    const [postalcode,setPostalcode] = useState(shippingAddress.postalcode)
    const [country,setCountry] = useState(shippingAddress.country)

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(saveShippingAddress({ name, address, city, postalcode, country }));
        props.history.push("/payment")
   }
   
    return (
        <div><CheckoutSteps step1 step2></CheckoutSteps>
            <form className="form" onSubmit={submitHandler}>
                <div><h1>Shipping Address</h1></div>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Enter Name" value={name} onChange={(e)=> setName(e.target.value)} required ></input>
                </div>
                <div>
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" placeholder="Enter Address" value={address} onChange={(e)=> setAddress(e.target.value)} required ></input>
                </div>
                <div>
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" placeholder="Enter City" value={city} onChange={(e)=> setCity(e.target.value)} required ></input>
                </div>
                <div>
                    <label htmlFor="postalcode">Postal Code</label>
                    <input type="text" id="postalcode" placeholder="Enter Postal Code" value={postalcode} onChange={(e)=> setPostalcode(e.target.value)} required ></input>
                </div>
                <div>
                    <label htmlFor="postalcode">Country</label>
                    <input type="text" id="country" placeholder="Enter Country" value={country} onChange={(e)=> setCountry(e.target.value)} required ></input>
                </div>
                <div>
                    <label/>
                <button className="primary " type="submit">Continue</button>
                </div>
        </form>
        </div>
    )
}
export default ShippingAddressScreen