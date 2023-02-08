import '../styles/global.css'
import { Blur } from '../components/Blur'
import logoImage from '../assets/logo2.svg'

//Importação do Tema
import React, { useState } from 'react'
import Header from '../components/Header'
import GlobalStyle from '../styles/global'
import { ThemeProvider } from 'styled-components'
import light from '../styles/themes/light'
import dark from '../styles/themes/dark'

 
  export function Menu() {
    const [theme, setTheme] = useState(light)

    const toggleTheme = () => {
      setTheme(theme.title == 'light' ? dark : light)
    }
    return (
      <ThemeProvider theme={theme} >
        <div className="w-screen h-screen flex ">
          <Blur />

          <div className="mt-24 ml-36  z-10">
            <img className="" src={logoImage} alt='logo' />
            <p className=" text-white text-left">
              Hello World!
            </p>
          </div>
          <GlobalStyle />
          <Header toggleTheme={toggleTheme} />
        </div>
     </ThemeProvider >
  )
}