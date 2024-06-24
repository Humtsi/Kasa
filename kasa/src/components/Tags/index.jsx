import PropTypes from 'prop-types'
import Data from '../../data/data.json'
import '../../styles/components/tags.scss'
import '../../styles/themes/global.scss'

function Tags ({id}) {

    const data = Data.find(item => item.id === id);
    const tags = data.tags;

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
    id: PropTypes.string.isRequired,
};

export default Tags