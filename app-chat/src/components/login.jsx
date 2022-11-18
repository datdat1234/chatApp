import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import { Signup } from "./signUp";

export function Login() {

  const [signUpModal, setSignUpModal] = useState(false);

  const navigate = useNavigate();

  return (
      <React.Fragment>
        <div className="login_ctn">
          <Signup trigger={signUpModal} setTrigger={setSignUpModal} />
          <div className="login_wrapper">
            <h1>
              <i className="fa-brands fa-rocketchat"></i>
              MYCHAT
            </h1>
            <form method="post">
              <div className="signup">
                Don't have an account? <span onClick={() => {setSignUpModal(true);}}>Sign up</span>
              </div>
              <div className="txt_field">
                <input type="text" required/>
                <label>User name</label>
                <i className="fa-regular fa-user"></i>
              </div>
              <div className="txt_field">
                <input type="password" required/>
                <label>Password</label>
                <i className="fa-solid fa-lock"></i>
              </div>
              <button onClick={() => {navigate("../chat")}}>Login</button>
            </form>
          </div>
        </div>
      </React.Fragment>
  )
}