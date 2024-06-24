import { useState } from 'react'
import PropTypes from 'prop-types'
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos'
import '../../styles/components/dropdown.scss'
import '../../styles/themes/global.scss'

function Dropdown({ title ='', content = []}) {
    const [isOpen, setIsOpen] = useState(false)
    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

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
        <div className= {isOpen ? ' content content--open' : 'content'}>
            <ul className='content__ul'>
                {content.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    </div>
    )
}
  
Dropdown.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.array.isRequired,
}
  
export default Dropdown
  