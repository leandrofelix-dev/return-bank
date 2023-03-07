import Switch from 'react-switch'
import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { shade } from 'polished'

import logoImage from '../assets/logos/logo.svg'
import { Link } from 'react-router-dom'

interface Props {
  toggleTheme(): void
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext)

  return (
    <div className="w-full px-36 flex justify-between z-10">
      <div>
        <Link to={'/'}>
          <img className="w-80" src={logoImage} alt="logo" />
        </Link>
      </div>
      <div className="self-center flex">
        {/* <Switch
          onChange={toggleTheme}
          checked={title == 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={20}
          width={40}
          handleDiameter={20}
          offColor={colors.secundary}
          onColor={shade(0.5, colors.primary)}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        /> */}
      </div>
    </div>
  )
}

export default Header
