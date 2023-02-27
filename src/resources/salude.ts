import { useState } from "react"
import api from "../api/api"

const [salute, setSalute] = useState("")

  api
  .get(`${api.defaults.baseURL}/salute`)
  .then((response) => {
      setSalute(response.data.msg)
  })
  .catch((err) => {
    console.log(err)
  })
