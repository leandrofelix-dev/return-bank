import '../styles/global.css'

import { useEffect, useState } from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom'

import { Blur } from '../components/Blur'
import { TransactionButtom } from '../components/TransactionButtom'
import { ThemeProvider } from 'styled-components'

import Header from '../components/Header'
import GlobalStyle from '../styles/global'
import light from '../styles/themes/light'
import dark from '../styles/themes/dark'
import api from '../api/api'

const local = 'http://localhost:5173/src/assets/icons/'

import { fm } from '../lib/formatMoney'
import { LogoutButtom } from '../components/LogoutButtom'

interface IAccountProps {
  isMore: boolean
}

export function Account( { isMore }: IAccountProps) {
  const [theme, setTheme] = useState(light)
  const [name, setName] = useState('')
  const [cash, setCash]: any = useState('R$ 0,00')

  const actualLocation = useLocation().pathname

  const [location, setLocation] = useState(actualLocation)

  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  const accountId = actualLocation.split('/').reverse()[0]

  const toggleTheme = () => {
    setTheme(theme.title == 'light' ? dark : light)
  }

  useEffect(() => {
    if (token === null) { navigate(`/`) }
      api
      .get(`http://192.168.0.41:3000/api/account/${accountId}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        })
      .then((response) => {
        setCash(fm.from(response.data[0].cash))
        const userId = response.data[0].userId
        api
          .get(`http://192.168.0.41:3000/api/user/${userId}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        })
          .then((response) => {
            setName(response.data.name)
          })
          .catch((err) => {
            console.log(err)
          })
      })
      .catch((err) => {
        console.log(err)
      })
    }
    , [])

  return (
    <ThemeProvider theme={theme}>
      <Blur />
      <GlobalStyle />
      <div className="flex items-center justify-center flex-col h-screen">
        <div className="w-full max-h-fit flex flex-col items-center justify-center z-10">
          <Header toggleTheme={toggleTheme} />
        </div>
        <div className="flex flex-col justify-around mt-10">
          <div className="flex flex-row relative justify-between">
            <div className="pt-10 font-poppins from-neutral-600 mr-20">
              <div>
                <blockquote className="font-bold text-zinc-500 text-lg">
                  Saldo em conta
                </blockquote>
                <h1 className="text-5xl font-bold text-zinc-800">{cash}</h1>
              </div>

              <div className="mt-9">
                <blockquote className="text-2xl text-zinc-500 font-semibold">
                  Seja bem-vindo(a)
                </blockquote>
                <h1 className="text-5xl font-bold text-zinc-800">{name}</h1>
                <p className="text-zinc-500 pt-4 text-left text-md w-80">
                  <b>Atenção:</b> Selecione um botão ao lado para realizar
                  operações em sua conta bancária ✅
                </p>
              </div>
            </div>
            <div className="grid grid-rows-2 grid-cols-2 gap-6 font-poppins">
              {
                !isMore ? (
                  <>
                    <Link to={`${location}/withdrawal`}>
                      <TransactionButtom type="primary" logo={local+'saque.svg'} text={'SAQUE'} />
                    </Link>
                    <Link to={`${location}/deposit`}>
                      <TransactionButtom type="primary" logo={local+'deposito.svg'} text={'DEPOSITO'} />
                    </Link>
                    <Link to={`${location}/transfer`}>
                      <TransactionButtom type="primary" logo={local+'transferencia.svg'} text={'TRANSFERÊNCIA'} />
                    </Link>
                    <Link to={`${location}/more`}>
                      <TransactionButtom type="secondary" logo={local+'mais.svg'} text={'MAIS SERVIÇOS'} />
                    </Link>
                  </>) : (
                    <>
                      <Link to={`${location}/exchange`}>
                        <TransactionButtom type="primary" logo={local+'cambio.svg'} text={'CÂMBIO'} />
                      </Link>
                      <Link to={`${location}/extract`}>
                        <TransactionButtom type="primary" logo={local+'extrato.svg'} text={'EXTRATO'} />
                      </Link>
                      <Link to={`${location}/about`}>
                        <TransactionButtom type="primary" logo={local+'sobre.svg'} text={'ABOUT'} />
                      </Link>
                      <Link to={location}>
                        <TransactionButtom type="secondary" logo={local+'voltar.svg'} text={'VOLTAR'} />
                      </Link>
                    </>
                  )
              }
            </div>
          </div>
        </div>
        <LogoutButtom />
      </div>
    </ThemeProvider>
  )
}
