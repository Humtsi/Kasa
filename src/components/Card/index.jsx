import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/imagedefault_carre.png'
import '../../styles/components/card.scss'
import '../../styles/themes/global.scss'

function Card({ title ='', picture = DefaultPicture}) {

  return (
    <div className='card'>
        <img className="card__img" src={picture} alt="hébergement" /> 
        <div className='card__title'>
          {title}
        </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}
export default Card
