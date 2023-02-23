import { useState } from 'react';

import api from "../api/api"

export function User() {
  const id = window.location.href.split('/')[4]

  const [name, setName] = useState('John Doe')
  console.log(`${api.defaults.baseURL}/user/${id}`)

  api.get(`${api.defaults.baseURL}/user/${id}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  })
      .then((response) => {
        setName(response.data)
        console.log(response)
      })
      .catch((err) => { console.log(err) })

  return (
    <h3>{`${name}`}</h3>
  )
}
