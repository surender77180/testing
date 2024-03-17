import React from "react"
import InputBox from "../Input";
import './login.css'
import ButtonCom from "../ButtonCom";

function LoginIn() {
  return (
    
      <form>
        <h2>Login Page</h2>
        <InputBox label="Email" placeholder="Enter Email" />
        <InputBox label='Password' placeholder='Enter password' />
        <ButtonCom text='Log In'></ButtonCom>
      </form>
       
  )
}

export default LoginIn;