import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Components/MaiiLayout/MainLayout';
import LoginForm from './Components/Forms/LoginForm';
import Registration from './Components/Registration/Registration';
import ForgetPass from './Components/Forms/ForgetPass';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path: '/login',
        element: <LoginForm></LoginForm>,
      },
      {
        path: '/registration',
        element: <Registration></Registration>,
      },
      {
        path: '/forgetPass',
        element: <ForgetPass></ForgetPass>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
