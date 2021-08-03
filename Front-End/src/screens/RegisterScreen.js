
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import { registerAction } from "../redux/actions/userAction";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

const RegisterScreen = (props) => {
 
    const dispatch = useDispatch();
    const redirect = props.location.search ? props.location.search.split('=')[1] : '/';
    const register = useSelector((state) => state.userRegister);
 
    const { userInfo, loading, error } = register;
    const [email, setEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const submitHandler = (e) => {
      
      e.preventDefault();
        if (password===confirmPassword) {
          dispatch(registerAction(name, email, password))
      }
        else {
          alert("Password and confirm password are not match ")
      }
      
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
          <h1 className="f-3">Register</h1>
                </div>
                {loading && <LoadingBox />}
              
          {error && <MessageBox variant="danger">{error}</MessageBox>}
          <div className="f-4">
          <label htmlFor="name">Name</label>
                    <input
                        className="f-4"
            type="text"
            placeholder="Enter name"
            required
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
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
          <label htmlFor="password">Password</label>
                    <input
                         className="f-4"
            type="password"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          </div>
          <div className="f-4">
          <label htmlFor="password">Confirm Password</label>
                    <input
                         className="f-4"
            type="password"
            placeholder="Enter confirm password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>
              </div>
              <div >
                  <label />
                      <button className="primary f-2" type="submit">Register
                      </button>
                 
              </div>
              
              <div>
                  <label />
                  <div>
                  <Link to={`/signin?redirect=${redirect}`} >Already have an account?</Link>
                  </div>
              </div>
      </form>
    </div>
  );
};
export default RegisterScreen