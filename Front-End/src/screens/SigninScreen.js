
import React, { useState } from "react";
import {Link} from "react-router-dom"
const SigninScreen = () => {
 
    const [email, setEmail] = useState('');
    const [pasword, setPassword] = useState('');
    const submitHandler = (e) => {
        e.preventDefault();
 }
    return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Sign In</h1>
        </div>
        <div>
          <label htmlFor="email">E-Mail Address</label>
          <input
            type="email"
            placeholder="Enter e-mail"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password Address</label>
          <input
            type="password"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
              </div>
              <div>
                  <label />
                      <button className="primary" type="submit">Sign In
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