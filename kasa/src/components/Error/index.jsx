import { Link } from 'react-router-dom'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../styles/themes/global.scss'
import '../../styles/components/error.scss'

function Error() {

  return (
    <div className='errorContainer'>
      <Header />
      <div className='error'>
        <span className='error__404' >404</span>
        <div className='error__span'>
          <span>Oups! La page que </span>
          <span>vous demandez n'existe pas.</span>
        </div>
        <Link className='error__link' to="/">
          Retourner sur la page d'accueil
        </Link>
      </div>
      <Footer/>
    </div>
  )
}

export default Error
