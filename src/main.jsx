import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginIn from './LoginPage/Login'
import Signup from './SignUpPage/sign'
import Error from './Error'
import Hooks from './Hooks'

let router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    errorElement:<Error />
  },
  {
    path:'/login',
    element:<LoginIn />
  },
  {
    path:'/signup',
    element:<Signup />
  },
  {
    path:'/hooks',
    element:<Hooks />
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
