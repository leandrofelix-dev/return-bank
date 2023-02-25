import { useState, useEffect } from 'react'

import api from '../api/api'
import { Link, useNavigate } from 'react-router-dom'
import { Blur } from '../components/Blur'
import logoImage from '../assets/logo.svg'
import profileImage from '../assets/profile.png'
import { fm } from '../lib/formatMoney'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'
import light from '../styles/themes/light'
import dark from '../styles/themes/dark'

export function User() {
  const id = window.location.href.split('/')[4]
  const navigate = useNavigate()
  const [name, setName] = useState('John Doe')
  const [accounts, setAccounts] = useState([{ id: '0', type: '0', cash: '0' }])

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate(`/`)
  }

  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      navigate(`/`)
    } else {
      api
        .get(`${api.defaults.baseURL}/user/${id}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        })
        .then((response) => {
          setName(response.data.name)
          setAccounts(response.data.accounts)
        })
        .catch((err) => {
          console.log(err)
        })
      console.log(accounts)
    }
  }, [])

  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <div className="flex justify-center items-center">
        <div className="z-10 h-screen w-screen absolute">
          <Blur />
        </div>
        <div className="h-screen flex flex-col items-center justify-center ">
          <img src={logoImage} alt="" className="h-20 mb-10" />
          <img src={profileImage} alt="" className="w-60" />
          <div className="mt-9">
            <blockquote className="text-2xl text-zinc-500 font-semibold text-center">
              Seja bem-vindo(a)
            </blockquote>
            <h1 className="text-5xl font-bold text-zinc-800">{name}</h1>
            <p className="text-zinc-600 pt-4 text-md w-80 text-center">
              <b>Atenção:</b> Selecione uma opção ao lado para acessar sua conta
              bancária ✅
            </p>
          </div>
        </div>
        <div className=" h-screen flex flex-col w-6/12 justify-around items-center p-28">
          {accounts.map((account) => {
            return (
              <Link
                to={`/account/${account.id}`}
                className="border rounded-3xl flex z-20 bg-purple-400 bg-opacity-40 px-8 py-4 focus:outline-8 focus:outline-purple-700 w-full"
              >
                <div>
                  <h4 className="text-lg font-bold text-zinc-600 ">
                    {account.type}
                  </h4>
                  <h2 className="text-5xl font-bold text-zinc-800">
                    {fm.from(account.cash)}
                  </h2>
                </div>
              </Link>
            )
          })}
        </div>
        <button
          className="bg-red-500 p-2 z-20000 text-white rounded-md cursor-pointer"
          onClick={handleLogout}
        >
          sair
        </button>
      </div>
    </ThemeProvider>
  )
}
