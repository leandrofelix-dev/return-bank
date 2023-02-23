import React, { useState } from 'react';
import api from '../api/api';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const [id, setId] = useState("d4b8eb1b-81be-4c15-9c48-658ce684147a");
  const [password, setPassword] = useState("12345678");
  const token = localStorage.getItem('token')

  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) { navigate(`/user/${id}`); }}, [navigate]);


  const handleIdChange =
  (event: { target: { value: React.SetStateAction<string> } }) => {
    setId(event.target.value);
  }

  const handlePasswordChange =
  (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault()

    const data = { id: id, password: password }

    api.post(`${api.defaults.baseURL}/auth/login`, data)
    .then(function (res) {
      const token = res.data.token
      localStorage.setItem('token', token)
        navigate(`/user/${id}`)
      })
      .catch(function (err) { console.log(err) })
  }

    return (
    <form onSubmit={handleSubmit} className='bg-red-500 p-10 flex flex-col'>
      <label>
        User ID:
        <input type="text" value={id} onChange={handleIdChange} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}
