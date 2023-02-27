import { useEffect, useState } from "react";
import api from "../api/api";

export function Salute() {
  const [salute, setSalute] = useState("")

useEffect(() => {
  api
    .get(`${api.defaults.baseURL}/salute`)
    .then((response: { data: { msg: React.SetStateAction<string>; }; }) => {
        setSalute(response.data.msg)
    })
    .catch((err: any) => {
      console.log(err)
    })
}, [])
  return (
    <h1 className="text-zinc-800 text-7xl font-bold mb-10">
      Olá! <br /> {salute}
    </h1>
  )
}
