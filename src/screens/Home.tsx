import '../styles/global.css'

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Blur } from '../components/Blur'
import { Buttom } from '../components/Buttom'
import { ThemeProvider } from 'styled-components'

import Header from '../components/Header'
import GlobalStyle from '../styles/global'
import light from '../styles/themes/light'
import dark from '../styles/themes/dark'
import api from '../api/api'

import { accountUrl } from '../repositories/menuQuery'
import { fm } from '../lib/formatMoney'
import { Link } from 'react-router-dom'

export function Home() {
  const [theme, setTheme] = useState(dark)
  const [name, setName] = useState('John Doe')
  const [cash, setCash]: any = useState('R$ 0,00')

  const navigate = useNavigate()

  const toggleTheme = () => {
    setTheme(theme.title == 'light' ? dark : light)
  }

    const token = localStorage.getItem('token')

    if (!token) { navigate('/login')}

    api.get(accountUrl)
      .then((response) => {
        setCash(
          fm.from(response.data[0].cash)
        )

        const userId = response.data[0].userId

        api.get(`${api.defaults.baseURL}/user/${userId}`)
          .then((response) => {
            setName(response.data[0].name)
          })
          .catch((err) => { console.log(err) })
      }).catch((err) => { console.log(err) })

  return (
    <ThemeProvider theme={theme} >
      <Blur />
      <GlobalStyle />
        <div className='flex items-center justify-center flex-col h-screen'>
          {/** Header */}
            <div className="w-full max-h-fit flex flex-col items-center justify-center z-10">
              <Header toggleTheme={toggleTheme} />
            </div>
          {/** Content */}
            <div className="flex flex-col justify-around mt-10">
              <div className='flex flex-row relative justify-between'>
                <div className='pt-10 font-poppins from-neutral-600 mr-20'>
                  <div>
                    <blockquote className="font-bold text-zinc-500 text-lg">
                      Saldo em conta
                    </blockquote>
                    <h1 className='text-5xl font-bold text-zinc-300'>
                      {cash}
                    </h1>
                  </div>

                  <div className='mt-9'>
                    <blockquote className='text-2xl text-zinc-500 font-semibold'>
                      Seja bem-vindo(a)
                    </blockquote>
                      <h1 className='text-5xl font-bold text-zinc-300'>
                      {name}
                      </h1>
                    <p className="text-zinc-400 pt-4 text-left text-md w-80">
                      <b>Atenção:</b> Selecione um botão ao lado para realizar operações em sua conta bancária ✅
                    </p>
                  </div>
                </div>
                  <div className="grid grid-rows-2 grid-cols-2 gap-6 font-poppins">
                    <Link to={"/withdrawal"}>
                      <Buttom text="SAQUE" logo="../src/assets/saque.svg" type='primary'/></Link>
                    <Link to={"/deposit"}>
                      <Buttom text="DEPÓSITO" logo="../src/assets/deposito.svg" type='primary'/></Link>
                    <Link to={"/transfer"}>
                      <Buttom text="TRANSFERÊNCIA" logo="../src/assets/transferencia.svg" type='primary'/></Link>
                    <Link to={"/"}><Buttom text="VER MAIS" logo="../src/assets/mais.svg" type='secondary'/></Link>
                  </div>
            </div>
        </div>
        </div>
    </ThemeProvider >
  )
}
