import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Rest } from './screens/Rest'
import { Menu } from './screens/Menu'
import { Error } from './screens/Error'

import { Deposit } from './screens/Deposit'
import { Transfer } from './screens/Transfer'
import { Withdrawal } from './screens/Withdrawal'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: 'rest', element: <Rest msg={'Boa noite'} /> },
      { path: 'menu', element: <Menu /> },
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
