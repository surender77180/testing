import React, { useState } from "react"
import InputBox from "../Input";
import './sign.css'
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";


function Signup(){
  let [currentPage, setCurr] = useState(0)
  function changeClick(){
    setCurr(currentPage=='Signup' ? 'LoginIN' : 'Signup')
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
          Already registered <Button onClick={changeClick} >Log-In</Button>
          
        </p>
      </form>
    )
}

export default Signup;