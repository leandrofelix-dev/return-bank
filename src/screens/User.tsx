import api from "../api/api"

export function User() {
  const id = "d4b8eb1b-81be-4c15-9c48-658ce684147a"

  api.get(`/user/${id}`)
    .then((response: any) => {
      console.log(response.data)
    })
    .catch((err) => { console.log(err) })

  return (
    <h1></h1>
  )
}
