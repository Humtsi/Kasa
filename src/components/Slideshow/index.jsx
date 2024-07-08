import { useState } from 'react'
import PropTypes from 'prop-types'
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos'
import '../../styles/components/slideshow.scss'

function Slideshow ({pictures}) {

    const [pictureNumber, setPictureNumber] = useState(0);
    const prevPictureNumber = pictureNumber === 0 ? pictures.length -1 : pictureNumber - 1
    const nextPictureNumber = pictureNumber === pictures.length - 1 ? 0 : pictureNumber + 1
   
    const prev = () => {
        setPictureNumber(prevPictureNumber)
    }
  
    const next = () => {
        setPictureNumber(nextPictureNumber)
    }

    return (
        <div>
            {!pictures[1] ? (
            <div className='slideshow'>
                <img className='slideshow__picture' src= {pictures[pictureNumber]} alt='hebergement'/>
            </div>
            ) : (
            <div className='slideshow'>
                <ArrowBackIcon className='slideshow__arrow slideshow__arrow--left' onClick={prev}/>
                <span className='slideshow__numbers'>{pictureNumber + 1} / {pictures.length}</span>
                <img className='slideshow__picture' src= {pictures[pictureNumber]} alt='hebergement'/>
                <ArrowBackIcon className='slideshow__arrow slideshow__arrow--right' onClick={next}/>
            </div>
            )}
        </div>   
    )
}

export default Slideshow

Slideshow.propTypes = {
    pictures: PropTypes.array.isRequired
}