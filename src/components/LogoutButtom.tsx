import { ArrowLineRight } from "phosphor-react"

export function LogoutButtom() {
  const handleLogout = () => {
      localStorage.removeItem('token')
      window.location.href = '/'
  }
  return (
    <button
      className="transition-all border-b-2 border-transparent hover:border-red-400 text-red-500 p-2 z-10 font-bold cursor-pointer fixed top-10 right-10 flex flex-row items-center"
      onClick={handleLogout}>
      <ArrowLineRight
        size={20}
        className="mr-2"/>
      SAIR
    </button>
  )
}
