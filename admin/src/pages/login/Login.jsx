import React, { useState } from "react";
import "../login/login.scss";
import { useDispatch } from "react-redux";
import { login } from "../../rtk/apiCalls";
function Login() {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const user = { userName: userName, password: password };
  const dispatch = useDispatch();
  const handelLOg = (e) => {
    e.preventDefault();
    login(dispatch, user);
  };

  return (
    <div className='loginContainer'>
      <div className='inputContainer'>
        <input
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          type='text'
          placeholder='User Name'
        />
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type='password'
          placeholder='Password'
        />
        <button onClick={handelLOg}> Sign In</button>
      </div>
    </div>
  );
}

export default Login;
