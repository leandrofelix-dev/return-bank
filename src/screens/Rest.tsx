import '../styles/global.css'
import logoImage from '../assets/logo.svg'
import { Blur } from '../components/Blur'
import { Login } from './Login'
import { Salute } from '../components/Salute';

interface IHomeProps {
  msg: string
}

export function Rest({ msg }: IHomeProps) {
  return (
    <div className="flex items-center w-screen h-screen justify-center">
      <Blur />
      <div className="h-screen flex justify-center items-center w-5/6 z-10">
        <div className="h-screen flex items-left flex-col justify-center">
          <img
            src={logoImage}
            alt="logo da return bank"
            className="max-w-xs absolute top-10"
          />
          <Salute />
          <h3 className="text-zinc-800 font-bold text-2xl mb-2">
            Horário de funcionamento
          </h3>
          <h5 className="text-zinc-400">
            <b className="text-zinc-800">Segunda à sábado</b> (6:00 às 00:00)
            <br />
            <b className="text-zinc-800">Domingos e feriados</b> (6:00 às 22:00)
          </h5>
        </div>
        <hr className="border border-purple-200 h-80 mx-10" />
        <div className="h-screen flex items-center justify-center z-10">
          <Login />
        </div>
      </div>
    </div>
  )
}
