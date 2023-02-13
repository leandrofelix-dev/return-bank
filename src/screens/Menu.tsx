import '../styles/global.css'
import React, { useState } from 'react'
import { Blur } from '../components/Blur'
import { Buttom } from '../components/Buttom'
import { ThemeProvider } from 'styled-components'
import Header from '../components/Header'
import GlobalStyle from '../styles/global'
import light from '../styles/themes/light'
import dark from '../styles/themes/dark'
import { ButtomAlt } from '../components/ButtomAlt'

export function Menu() {
  const [theme, setTheme] = useState(light)
  let localTheme = localStorage.getItem('theme')

  const toggleTheme = () => {
    setTheme(theme.title == 'light' ? dark : light)
    localStorage.setItem('theme', theme.title == 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeProvider theme={theme} >
      <Blur />
      <GlobalStyle />
        <div className='flex items-center justify-center flex-col h-screen'>
          {/** Header */}
            <div className="w-full max-h-fit flex flex-col items-center justify-center z-10">
              <Header toggleTheme={toggleTheme} />
            </div>
          {/** Content */}
            <div className="flex flex-col justify-around mt-10">
              <div className='flex flex-row relative justify-between'>
                <div className='pt-10 font-poppins from-neutral-600 mr-20'>
                  <div>
                    <blockquote className="font-bold text-zinc-500 text-lg">
                      Saldo em conta
                    </blockquote>
                    <h1 className='text-5xl font-bold text-zinc-300'>
                      R$ 103.052,90
                    </h1>
                  </div>

                  <div className='mt-9'>
                    <blockquote className='text-2xl text-zinc-500 font-semibold'>
                      Seja bem-vindo(a)
                    </blockquote>
                      <h1 className='text-5xl font-bold text-zinc-300'>
                      Leandro Félix
                      </h1>
                    <p className="text-zinc-400 pt-4 text-left text-md w-80">
                      <b>Atenção:</b> Selecione um botão ao lado para realizar operações em sua conta bancária ✅
                    </p>
                  </div>

                </div>
                <div className="grid grid-rows-2 grid-cols-2 gap-6 font-poppins">
                  <div><Buttom text="SAQUE" logo="../../src/assets/saque.svg" /></div>
                  <div><Buttom text="DEPÓSITO" logo="../../src/assets/deposito.svg" /></div>
                  <div><Buttom text="TRANSFERÊNCIA" logo="../../src/assets/transferencia.svg" /></div>
                  <div><ButtomAlt text="VER MAIS" logo="../../src/assets/mais.svg" /></div>
                </div>
              </div>
            </div>
        </div>
    </ThemeProvider >
  )
}
