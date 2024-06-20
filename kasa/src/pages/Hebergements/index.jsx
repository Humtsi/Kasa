import { useParams } from 'react-router-dom'
import Slideshow from '../../components/Slideshow'
import Dropdown from '../../components/Dropdown'
import Data from '../../data/data.json'
import StarRating from '../../components/StarRating'
import '../../styles/pages/hebergements.scss'
import '../../styles/themes/global.scss'


function Hebergements () {

    const { id } = useParams()
    const data = Data.find(item => item.id === id);

    return (
      <div className="hebergements">
        <Slideshow id= {id}/>
        <div className='hebergements__description'>
          <div className='leftcol'>
            <span className='leftcol__title'>{data.title}</span>
            <span className='leftcol__location'>{data.location}</span>
            <div className='leftcol__tags'>
              tag
            </div>
          </div>
          <div className='rightcol'>
            <div className='rightcol__host'>
              <span className='rightcol__host__name'>{data.host.name}</span>
              <img src={data.host.picture} className='rightcol__host__picture' alt="portrait de l'hôte"/>
            </div>
            <div className='rightcol__rating'>
              <StarRating rating={data.rating}/>
            </div>
          </div>
        </div>
        <div className='hebergements__dropdown'>
          <Dropdown title='Description' content={data.description}/>
          <Dropdown title='Equipements' content={data.equipments}/>
        </div>
      </div>
    )
  }
  
  export default Hebergements