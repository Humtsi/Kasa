import { Link } from 'react-router-dom'
import Logo from '../Logo'
import colors from '../../utils/style/colors'
import '../../styles/components/footer.scss'
import '../../styles/themes/global.scss'

function Footer() {
  return (
    <div className='footer'>
      <Link to="/">
        <Logo color={colors.white} height="40px"/>
      </Link>
      <span className='footer__mention'>© 2020 Kasa. All rights reserved</span>
    </div>
  )
}

export default Footer
