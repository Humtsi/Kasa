import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import '../../styles/components/header.scss'
import '../../styles/themes/global.scss'

function Header() {
  return (
    <div className='navContainer'>
      <Link to="/">
        <Logo className='navContainer__logoIcon'/>
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