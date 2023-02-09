import '../styles/global.css'
import { Blur } from '../components/Blur'


//Importação do Tema
import React, { useState } from 'react'
import Header from '../components/Header'
import GlobalStyle from '../styles/global'
import { ThemeProvider } from 'styled-components'
import light from '../styles/themes/light'
import dark from '../styles/themes/dark'

//Importação das Logos 
import saque from '../assets/saque.svg'


export function Menu() {
  const [theme, setTheme] = useState(light)

  const toggleTheme = () => {
    setTheme(theme.title == 'light' ? dark : light)
  }
  return (
    <ThemeProvider theme={theme} >
      <Blur />
      <GlobalStyle />
      <div className="max-h-full max-w-full flex flex-col relative justify-between z-10">

        <div className=" mt-10">
          <Header toggleTheme={toggleTheme} />
        </div>

        <div className='flex flex-row relative justify-between'>

          <div className='h-96 w-96 pt-10 ml-28 font-poppins from-neutral-600'>
            <div>
              <blockquote>
                Saldo em conta
              </blockquote>
              <h1 className='text-5xl'>
                R$ 300,00
              </h1>
            </div>

            <div className='pt-9'>
              <blockquote className='text-3xl'>
                Seja bem-vindo(a)
                <h1 className='text-5xl'>
                Carlos Oliveira
                </h1>
              </blockquote>
              <p className="pt-4 text-left ">
                Um cliente em potencial, uma vez
                <br />perdido, é difícil de reter. Mas tendo
                <br />alguns fatores críticos em mente,
                <br />podemos, com certeza, usar métodos
                <br />de fidelidade seus clientes
              </p>
            </div>

          </div>

          <div className="h-96 w-96 mr-16 flex-wrap justify-between gap-4 grid grid-cols-2 grid-rows-2 font-poppins">
            <button className="flex rounded-lg order-1 bg-green-400 h-40 w-40 shadow-md col-start-1">
              <div className="px-10 self-center">
              <img className="h-20 w-20" src={saque} alt='Saque'/>
              <blockquote className="">
                Saque
              </blockquote>
              </div>
              
            </button>

            <button className="rounded-lg order-2 bg-green-400  h-40 w-40 shadow-md col-start-2 ">
              Deposito
            </button>

            <button className="rounded-lg order-3 bg-green-400  h-40 w-40 shadow-md col-start-1 ">
              Transferência
            </button>

            <button className="rounded-lg order-4 bg-blue-500  h-40 w-40 shadow-md col-start-2">
              Mais Serviços
            </button>
          </div>

        </div>
      </div>

    </ThemeProvider >
  )
}
