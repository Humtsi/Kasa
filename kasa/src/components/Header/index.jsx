import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../Logo'
import colors from '../../utils/style/colors'
import '../../styles/components/header.scss'
import '../../styles/themes/global.scss'

function Header() {

  return (
    <div className="navContainer">
      <Link to="/">
        <Logo color = {colors.primary} height={"68px"}/>
      </Link>
      <nav>
        <Link className='navContainer__link' to="/">
          Accueil
        </Link>
        <Link className='navContainer__link' to="/apropos">
          A propos
        </Link>
      </nav>
    </div>
  )
}

export default Header