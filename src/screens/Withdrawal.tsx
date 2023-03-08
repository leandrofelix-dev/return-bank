import { ThemeProvider } from "styled-components"
import { Blur } from "../components/Blur"
import { NumericKeyboardButton } from "../components/NumericKeyboardButton"
import { useEffect, useState } from "react"
import GlobalStyle from '../styles/global'
import dark from "../styles/themes/dark"
import light from "../styles/themes/light"
import logoImage from '../assets/logos/logo.svg'
import api from "../api/api"
import { useNavigate } from "react-router-dom"

export function Withdrawal() {
  const [value, setValue] = useState('')

  const [name, setName] = useState('John Doe')

  const keyboardValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'cancel', 0, 'confirm']

  const handleButtonKeyboardClick = (item: any) => {
    if (item === 'cancel') {
      setValue(value.substring(0, value.length - 1))
      return
    }
    
    if (item === 'confirm') {
      api
        .post(`${api.defaults.baseURL}/transaction`, {
          cash: Number(value),
          accountId: "f3218ab7-2e1a-4f95-821d-0a8ec0095055",
          type: "saque",
          description: ""
      })
        .then(function (res) {
          console.log(res)
        })
        .catch(function (err) {
          console.log(err)
        })
      alert('Aguarde um momento...')

      setTimeout(() => {
        setValue('')
        alert('Saque finalizado com sucesso!')
      }, 2000)
      return
    }
    setValue(`${value}${item}`)
  }
  const token = localStorage.getItem('token')

  const accountId = window.location.href.split('/').reverse()[1]

    const navigate = useNavigate()
    useEffect(() => {
    if (token === null) { navigate(`/`) }
      api
      .get(`http://192.168.0.41:3000/api/account/${accountId}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        })
      .then((response) => {
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
    <>
      <ThemeProvider theme={light}>
        <Blur />
        <GlobalStyle />
        <div className="flex">
          <div className="h-screen w-1/2 flex items-center justify-center flex-col z-20">
            <img src={ logoImage } className="max-h-24" />
            <div className="flex flex-col w-1/2 mt-14">
              <label htmlFor="" className="font-bold text-zinc-800 ml-4 mb-2 text-xl">Digite o valor desejado</label>
              <input
                type="number"
                name=""
                id=""
                value={value}
                placeholder="R$ 0,00"
                className="shadow-md shadow-purple-300 bg-purple-200 px-6 text-5xl rounded-xl font-bold text-zinc-800 placeholder:text-zinc-800"/>
            </div>
            <div className="mt-9">
                <blockquote className="text-2xl text-zinc-500 font-semibold">
                  Seja bem-vindo(a)
                </blockquote>
                <h1 className="text-5xl font-bold text-zinc-800">{name}</h1>
                <p className="text-zinc-500 pt-4 text-left text-md w-80">
                  <b>Atenção:</b> Digite o valor desejado no teclado numérico ao lado ✅
                </p>
              </div>
          </div>
          <div className="h-screen w-1/2 flex items-center justify-center z-20">
            <div className="grid grid-cols-3">
              {keyboardValues.map((item, index) => (
                <div
                  onClick={() => handleButtonKeyboardClick(item)}>
                  <NumericKeyboardButton
                    key={index}
                    item={item}/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}
