import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useEffect } from 'react';

import { Rest } from './screens/Rest'
import { Account } from './screens/Account'
import { Error } from './screens/Error'

import { User } from './screens/User'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Rest msg={'salute'} /> },
      { path: 'user/:id', element: <User /> },
      { path: 'account/:id', element: <Account /> },
    ],
  },
])



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
