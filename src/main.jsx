import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginIn from './LoginPage/login'
import Signup from './SignUpPage/sign'

let router = createBrowserRouter([
  {
    path:'/',
    element:<App />
  },
  {
    path:'/login',
    element:<LoginIn />
  },
  {
    path:'/signup',
    element:<Signup />
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
