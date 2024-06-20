import { Link } from 'react-router-dom'
import '../../styles/themes/global.scss'
import '../../styles/components/error.scss'


function Error() {

  return (
    <div className='errorWrapper'>
      <span className='errorWrapper__404' >404</span>
      <span className='errorWrapper__span'> Oups! La page que vous demandez n'existe pas.</span>
      <Link className='errorWrapper__link' to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}

export default Error
