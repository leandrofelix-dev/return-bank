import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished'

import logoImage from '../assets/logo2.svg'


interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <div className="w-full px-8 flex justify-between z-10">
      <div>
        <img src={logoImage} alt='logo' />
      </div>
      <div className="self-center">
      <Switch
        onChange={toggleTheme}
        checked={title == 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={20}
        width={40}
        handleDiameter={20}
        offColor={colors.secundary}
        onColor={shade(0.5, colors.primary)}
      />
      </div>
    </div>
  );
};

export default Header;