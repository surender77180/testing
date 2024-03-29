import { useState } from 'react'
import Login from './LoginPage/Login'
import Signup from './SignUpPage/sign'
import { Container, Row, Col } from 'react-bootstrap';
import BasicExample from './nav'
import Item from './Item'
import Home from './Home'
import img from './assets/download.jpeg'

export default function App() {
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
        name: 'Ring',
        des: 'this product is best sales prices.',
        src: img
    },
    {
        name: 'ankush',
        des: 'this product is best sales prices.'
    },
    {
        name: 'ankit',
        des: 'this product is best sales prices.'
    },
    {
        name: 'shivam',
        des: 'this product is best sales prices.'
    }

    ]
    // props de-structure
    return (
        <Container>
            
            <Row>
                <Col>
                        <Item />
                        {data.map((d) => <Home {...d} />)}
                </Col>
            </Row>
        </Container>

    )

}
