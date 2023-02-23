import axios from "axios"
const token = localStorage.getItem('token')
console.log(token)

const api = axios.create({
  baseURL: 'http://localhost:3000/api'
})

export default api
