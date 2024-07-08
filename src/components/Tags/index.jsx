import PropTypes from 'prop-types'
import '../../styles/components/tags.scss'
import '../../styles/themes/global.scss'

function Tags ({tags}) {
  return (
    <div className="tagsContainer">
      {tags.map((tag, index) => (
        <div key={index} className='tagsContainer__tag'>
          {tag}
        </div>
      ))}
    </div>
  )
}

Tags.propTypes = {
  tags: PropTypes.array.isRequired,
}

export default Tags