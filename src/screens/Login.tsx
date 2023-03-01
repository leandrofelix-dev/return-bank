import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Eye, EyeSlash } from 'phosphor-react'

import api from '../api/api'

export function Login() {
  const navigate = useNavigate()

  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const [hasValue, setHasValue] = useState(true)


  const inputClass = hasValue ? '' : 'border-2 border-red-500 shadow-red-200'

  const token = localStorage.getItem('token')

  if (token) {
    navigate(`/user/${id}`)
  }

  if (id === null) {
    navigate(`/`)
  }

  const handleIdChange = (event: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setId(event.target.value)
  }

  const handlePasswordChange = (event: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setPassword(event.target.value)
  }

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()

    if (id === '' ||
        password === '') {
      alert('Preencha todos os campos')
      setHasValue(false)
      return
    }

    const data = { id, password }

    api
      .post(`${api.defaults.baseURL}/auth/login`, data)
      .then(function (res) {
        const token = res.data.token
        localStorage.setItem('token', token)
        navigate(`/user/${id}`)
      })
      .catch(function (err) {
        console.log(err)
      })
  }

  const handlePasswordVisibilityToggle = () => {
    const passwordInput = document.querySelector(
      '#password',
    ) as HTMLInputElement
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text'

    } else {
      passwordInput.type = 'password'
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-10 flex flex-col">
      <h1 className="text-5xl font-bold text-zinc-800 mb-10">Área de Login</h1>
      <label className="font-bold text-zinc-800">Identificador</label>
      <input
        type="text"
        value={id}
        placeholder="Insira seu ID"
        className={`shadow-purple-200 p-4 pr-12 rounded-xl shadow-md w-full focus:outline-purple-400 ${inputClass}`}
        onChange={handleIdChange}
      />
      <label className="font-bold text-zinc-800 mt-3">Senha</label>
      <div className="flex">
        <input
          type="password"
          value={password}
          id="password"
          placeholder="Insira sua senha"
          className={`shadow-purple-200 p-4 pr-12 rounded-xl shadow-md w-full focus:outline-purple-400 ${inputClass}`}
          onChange={handlePasswordChange}
        />
        <div
          className="flex items-center cursor-pointer"
          onClick={handlePasswordVisibilityToggle}>
          <EyeSlash
              size={22}
              className="-ml-10"
              onClick={handlePasswordVisibilityToggle}/>
        </div>
      </div>
      <button
        type="submit"
        className="mt-10 text-xl font-bold bg-purple-500 p-4 text-white rounded-xl shadow-md hover:bg-purple-600 transition-all"
      >
        Acessar conta
      </button>
    </form>
  )
}
