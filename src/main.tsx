import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Rest } from './screens/Rest'
import { Home } from './screens/Home'
import { Error } from './screens/Error'
import { Login } from './screens/Login'

import { Deposit } from './screens/Deposit'
import { Transfer } from './screens/Transfer'
import { Withdrawal } from './screens/Withdrawal'
import { User } from './screens/User'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: 'rest', element: <Rest msg={'Boa noite'} /> },
      { path: 'user/:id', element: <User /> },
      { path: 'login', element: <Login /> },
      { path: 'home', element: <Home /> },
      { path: 'deposit', element: <Deposit /> },
      { path: 'transfer', element: <Transfer /> },
      { path: 'withdrawal', element: <Withdrawal /> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
