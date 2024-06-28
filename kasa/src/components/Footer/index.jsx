import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import '../../styles/components/footer.scss'
import '../../styles/themes/global.scss'

function Footer() {
  return (
    <div className='footer'>
      <Link to="/">
        <Logo className='footer__logoIcon'/>
      </Link>
      <span className='footer__mention'>© 2020 Kasa. All rights&nbsp;reserved</span>
    </div>
  )
}

export default Footer