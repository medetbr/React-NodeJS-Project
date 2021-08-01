
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import { signinAction } from "../redux/actions/userAction";

const SigninScreen = (props) => {
 
    const dispatch = useDispatch();

    const signin = useSelector((state) => state.userSignin);
    const { userInfo } = signin;
    const redirect = props.location.search ? props.location.search.split('=')[1] : '/';
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signinAction(email,password) )
    }
    
    useEffect(() => {
        if (userInfo) {
            props.history.push(redirect)
        }
    },[props.history, redirect,userInfo])
    return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1 className="f-3">Sign In</h1>
        </div>
        <div className="f-4">
          <label htmlFor="email">E-Mail Address</label>
          <input
            type="email"
            placeholder="Enter e-mail"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="f-4">
          <label htmlFor="password">Password Address</label>
          <input
            type="password"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
              </div>
              <div >
                  <label />
                      <button className="primary f-2" type="submit">Sign In
                      </button>
                 
              </div>
              
              <div>
                  <label />
                  <div>New customer?{' '}
                  <Link to="/register" >Create your account</Link>
                  </div>
              </div>
      </form>
    </div>
  );
};
export default SigninScreen