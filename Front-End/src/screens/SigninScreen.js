
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import { signinAction } from "../redux/actions/userAction";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

const SigninScreen = (props) => {
 
    const dispatch = useDispatch();

    const signin = useSelector((state) => state.userSignin);
    const { userInfo, loading, error } = signin;
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
                {loading && <LoadingBox />}
              
                {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div className="f-4">
          <label htmlFor="email">E-Mail Address</label>
                    <input
                        className="f-4"
            type="email"
            placeholder="Enter e-mail"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="f-4">
          <label htmlFor="password">Password Address</label>
                    <input
                         className="f-4"
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