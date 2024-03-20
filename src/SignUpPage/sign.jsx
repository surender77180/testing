import React, { useState } from "react"
import InputBox from "../Input";
import './sign.css'
import Button from "react-bootstrap/Button";

function Signup(){
  let [currentPage, setCurr] = useState('Signup')
  function changeClick(){
    setCurr(currentPage=='Login' ? 'Signup' : 'Login')
  }

    return(
        <form>
        <h3>Sign Up</h3>
        <InputBox label='First Name' placeholder='Enter First Name' />
        <InputBox label='Last Name' placeholder='Enter Last Name' />
        <InputBox label='Email' placeholder='Enter Gmail' />
        <InputBox label='Password' placeholder='Enter password' />
        <Button variant="primary" >Sign IN</Button>        
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in" onClick={changeClick}>sign in?</a>
        </p>
      </form>
    )
}

export default Signup;