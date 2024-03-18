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
    let data = [{
        name:'surender',
        rollno:57
    },
    {
        name:'ankush',
        rollno:37
    },
    {
        name:'ankit',
        rollno:32
    },
    {
        name:'shivam',
        rollno:38
    }

]
// props de-structure
    return (
        <p>
            {data.map((d)=><Home {...d}/>)}
        </p>
    )

}
