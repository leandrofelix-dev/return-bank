import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Rest } from './screens/Rest'
import { User } from './screens/User'
import { Account } from './screens/Account'
import { Error } from './screens/Error'
import { Withdrawal } from './screens/Withdrawal'
import { Deposit } from './screens/Deposit'
import { Transfer } from './screens/Transfer'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: '/', element:
        <Rest msg={''} />
      },
      { path: 'user/:id', element:
        <User />
      },
      { path: 'account/:id', element:
        <Account
        icon1={["SAQUE", "http://localhost:5173/src/assets/icons/saque.svg", '/withdrawal']}
        icon2={["DEPÓSITO", "http://localhost:5173/src/assets/icons/deposito.svg", '/deposit']}
        icon3={["TRANSFERÊNCIA", "http://localhost:5173/src/assets/icons/transferencia.svg", '/transfer']}
        icon4={["VER MAIS", "http://localhost:5173/src/assets/icons/mais.svg", '']}
        />
      },
      { path: 'account/:id/more', element:
        <Account
          icon1={["EXTRATO", "http://localhost:5173/src/assets/icons/extrato.svg", '/extract']}
          icon2={["CÂMBIO", "http://localhost:5173/src/assets/icons/cambio.svg", '/exchange']}
          icon3={["SOBRE", "http://localhost:5173/src/assets/icons/sobre.svg", '/about']}
          icon4={["VOLTAR", "http://localhost:5173/src/assets/icons/voltar.svg", '']}
        />
      },
      { path: 'account/:id/withdrawal', element:
        <Withdrawal />
      },
      { path: 'account/:id/deposit', element:
        <Deposit />
      },
      { path: 'account/:id/transfer', element:
        <Transfer />
      }
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
  .render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>)
