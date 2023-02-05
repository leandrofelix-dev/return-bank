import '../styles/global.css'
import logoImage from '../assets/logo.svg'
import card from '../assets/card.svg'
import { Blur } from '../components/Blur'

interface IHomeProps {
  msg: string
}

export function Home({msg}: IHomeProps) {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Blur/>
        <div className="w-full mx-auto flex items-center justify-center flex-col gap-10 z-10">

        <img className="pt-2" src={logoImage} alt="Logo" />

        <div>
          <h1 className="font-poppins font-bold text-8xl text-slate-100  w-auto">
            {msg}
          </h1>
        </div>

        <button
          type="button"
          className=""
        >
          <img src={card} alt="card" />
        </button>

        <div className="font-bold  text-3xl text-slate-100">
          Insira o cartão
        </div>
        </div>
      </div>
    //A Div ocupa toda espaço da tela
  )
}
