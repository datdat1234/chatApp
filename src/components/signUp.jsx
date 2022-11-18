import React from "react";
import "../styles/signUp.css";

export function Signup(props) {

  return props.trigger ? (
      <React.Fragment>
        <div className="signup_ctn">
          <div className="signup_wrapper">
            <h1>
              Sign Up
              <i className="fa-solid fa-xmark" onClick={() => {props.setTrigger(false);}}></i>  
            </h1>
            <form method="post">
              <div className="signup_txt_field">
                <input type="text" required/>
                <label>Email</label>
              </div>
              <div className="signup_txt_field">
                <input type="text" required/>
                <label>User name</label>
              </div>
              <div className="signup_txt_field">
                <input type="password" required/>
                <label>Password</label>
              </div>
              <div className="signup_txt_field">
                <input type="password" required/>
                <label>Re-type Password</label>
              </div>
              <div className="login_back">
                Already have an account? <span onClick={() => {props.setTrigger(false);}}>Login</span>
              </div>
              <button onClick={() => {props.setTrigger(false);}}>Sign up</button>
            </form>
          </div>
        </div>
      </React.Fragment>
  ) : (
    ""
  );
}