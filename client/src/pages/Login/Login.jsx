import React, { useState } from "react";
import "../Login/login.scss";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../rtk/apiCalls";
import { Link } from "react-router-dom";
function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { error, isFitching } = useSelector((state) => state.user);
  const user = { userName: userName, password: password };
  console.log(user);
  const handelLog = (e) => {
    e.preventDefault();
    login(dispatch, user);
  };
  return (
    <div className='loginContainer'>
      <div className='Wrspper'>
        <h1 className='title'>Login</h1>
        <form action=''>
          <input
            onChange={(e) => setUserName(e.target.value)}
            type='text'
            placeholder='Username'
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            placeholder='Password'
          />
          <button disabled={isFitching} onClick={handelLog}>
            Sign In
          </button>
          {error && <span>Something went wrong...</span>}
          <span>DO NOT YOU REMEMBER THE PASSWORD?</span>
          <Link to='/register'>CREATE A NEW ACCOUNT</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
