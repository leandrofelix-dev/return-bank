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
      { path: '/', element:
        <Rest msg={''} /> },
      { path: 'user/:id', element:
        <User /> },
      { path: 'account/:id', element:
        <Account
          icon1={["SAQUE", "../src/assets/saque.svg"]}
          icon2={["DEPÓSITO", "../src/assets/deposito.svg"]}
          icon3={["TRANSFERÊNCIA", "../src/assets/transferencia.svg"]}
          icon4={["VER MAIS", "../src/assets/mais.svg"]}
        />
      },
      { path: 'account/:id/more', element:
        <Account
          icon1={["EXTRATO", "../src/assets/extrato.svg"]}
          icon2={["CÂMBIO", "../src/assets/cambio.svg"]}
          icon3={["SOBRE", "../src/assets/sobre.svg"]}
          icon4={["VOLTAR", "../src/assets/voltar.svg"]}
        />
      },
    ],
  },
])



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
