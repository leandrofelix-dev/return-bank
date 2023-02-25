import axios from 'axios'
const token = localStorage.getItem('token')
console.log(token)

const api = axios.create({
  baseURL: 'http://192.168.0.41:3000/api',
})

export default api
