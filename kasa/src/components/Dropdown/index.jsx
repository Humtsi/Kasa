import { useState } from 'react'
import PropTypes from 'prop-types'
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos'
import '../../styles/components/dropdown.scss'
import '../../styles/themes/global.scss'


function Dropdown({ title ='', content = ''}) {
    const [isOpen, setIsOpen] = useState(false)
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
    <div className='dropdown'>
        <div className="title">
            <p className="title__text">
                {title}
            </p>
            <div onClick={toggleDropdown}>
                <ArrowBackIcon className={isOpen ? 'title__arrow title__arrow--open' : 'title__arrow'}/>
            </div>
        </div>
        <div className= {isOpen ? ' dropdown__content dropdown__content--open' : 'dropdown__content'}>
            <p className='dropdown__content__text' >{content}</p>
        </div>
    </div>
    )
  }
  
  Dropdown.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }
  export default Dropdown
  