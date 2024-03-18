import { useState } from 'react'
import Login from './LoginPage/login'
import Signup from './SignUpPage/sign'
import BasicExample from './nav'
import Home from './Home'

export default function App(){
    // let [currentPage, setCurr] = useState('Login')
    // function changePage(){
    //     setCurr(currentPage=='Login' ? 'Signup' : 'Login') 
    // }

    // return (
    //     <div>
    //         <button onClick={changePage} >{currentPage}</button>
    //         {currentPage == 'Login' ? <Login /> : <Signup />}
    //     </div>
    // )
    let person = {name:'aasd' ,rollno:'232'};
    return (
        <Home {...person}/>
    )

}
