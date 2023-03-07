import { ThemeProvider } from "styled-components"
import { Blur } from "../components/Blur"
import GlobalStyle from '../styles/global'
import dark from "../styles/themes/dark"
import light from "../styles/themes/light"
import logoImage from '../assets/logos/logo.svg'
import { NumericKeyboardButton } from "../components/NumericKeyboardButton"

export function Withdrawal() {
  return (
    <>
      <ThemeProvider theme={light}>
        <Blur />
        <GlobalStyle />
        <div className="flex">
          <div className="h-screen w-1/2 flex items-center justify-center flex-col z-20">
            <img src={ logoImage } className="max-h-24" />
            <div className="flex flex-col w-1/2 mt-14">
              <label htmlFor="" className="font-bold text-zinc-800 ml-4 mb-2 text-xl">Digite o valor desejado</label>
              <input
                type="number"
                name=""
                id=""
                placeholder="R$ 0,00"
                className="shadow-md shadow-purple-300 bg-purple-200 px-6 text-5xl rounded-xl font-bold text-zinc-800 placeholder:text-zinc-800"/>
            </div>
            <div className="mt-9">
                <blockquote className="text-2xl text-zinc-500 font-semibold">
                  Seja bem-vindo(a)
                </blockquote>
                <h1 className="text-5xl font-bold text-zinc-800">Name</h1>
                <p className="text-zinc-500 pt-4 text-left text-md w-80">
                  <b>Atenção:</b> Digite o valor desejado no teclado numérico ao lado ✅
                </p>
              </div>
          </div>
          <div className="h-screen w-1/2 flex items-center justify-center z-20">
            <div className="grid grid-cols-3">
              <NumericKeyboardButton item={1} />
              <NumericKeyboardButton item={2} />
              <NumericKeyboardButton item={3} />
              <NumericKeyboardButton item={4} />
              <NumericKeyboardButton item={5} />
              <NumericKeyboardButton item={6} />
              <NumericKeyboardButton item={7} />
              <NumericKeyboardButton item={8} />
              <NumericKeyboardButton item={9} />
              <NumericKeyboardButton item={'cancel'} />
              <NumericKeyboardButton item={0} />
              <NumericKeyboardButton item={'confirm'} />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}
