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
        <Account isMore={false} />
      },
      { path: 'account/:id/more', element:
        <Account isMore={true}/>
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
