import { useState } from 'react'
import Login from './LoginPage/login'
import Signup from './SignUpPage/sign'

export default function App(){
    let [currentPage, setCurr] = useState('Login')
    function changePage(){
        setCurr(currentPage=='Login' ? 'Signup' : 'Login') 
    }

    return (
        <div>
            <button onClick={changePage} >{currentPage}</button>
            {currentPage == 'Login' ? <Login /> : <Signup />}
        </div>
    )
}
