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

import { fm } from '../lib/formatMoney'
import { LogoutButtom } from '../components/LogoutButtom'

interface iAccountProps {
  icon1: string[]
  icon2: string[]
  icon3: string[]
  icon4: string[]
}

export function Account({ icon1, icon2, icon3, icon4 }: iAccountProps) {
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

    const handleToggleAdressAction = () => {
    if (actualLocation == location) {
      const goLocation = `${actualLocation}/more`
      setLocation(goLocation)
      navigate(location)
    }
    else {
      const goLocation = `${actualLocation}`.replace('/more', '')
      setLocation(goLocation)
      navigate(location)
    }
  }

  useEffect(() => {
    if (token === null) {
      navigate(`/`)
    }
    else {
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
              <Link to={`${location}${icon1[2]}`}>
                <TransactionButtom
                  text={icon1[0]}
                  logo={icon1[1]}
                  type="primary"
                />
              </Link>
              <Link to={`${location}${icon2[2]}`}>
                <TransactionButtom
                  text={icon2[0]}
                  logo={icon2[1]}
                  type="primary"
                />
              </Link>
              <Link to={`${location}${icon3[2]}`}>
                <TransactionButtom
                  text={icon3[0]}
                  logo={icon3[1]}
                  type="primary"
                />
              </Link>
                <Link to={icon4[2]}>
                  <TransactionButtom
                    text={icon4[0]}
                    logo={icon4[1]}
                    type="secondary"
                  />
                </Link>
            </div>
          </div>
        </div>
        <LogoutButtom />
      </div>
    </ThemeProvider>
  )
}
