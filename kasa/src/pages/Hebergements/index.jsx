import { useParams, Navigate } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Slideshow from '../../components/Slideshow'
import Dropdown from '../../components/Dropdown'
import Tags from '../../components/Tags'
import Data from '../../data/data.json'
import StarRating from '../../components/StarRating'
import '../../styles/pages/hebergements.scss'
import '../../styles/themes/global.scss'


function Hebergements () {

  const { id } = useParams()
  const data = Data.find(item => item.id === id);

  if (!data) {
    return <Navigate to="/error" />
  }

  return (
    <div className='hebergementsContainer'>
      <Header/>
      <div className="hebergements">
        <Slideshow pictures = {data.pictures}/>
        <div className='hebergements__description'>
          <div className='leftCol'>
            <div className='title'>
              <span className='title__name'>{data.title}</span>
              <span className='title__location'>{data.location}</span>
            </div>
            <div className='tags'>
              <Tags tags={data.tags}/>
            </div>
          </div>
          <div className='rightCol'>
            <div className='host'>
              <span className='host__name'>{data.host.name}</span>
              <img src={data.host.picture} className='host__picture' alt="portrait de l'hôte"/>
            </div>
            <StarRating rating={data.rating} className='rating'/>
          </div>
        </div>
        <div className='hebergements__dropdown'>
          <Dropdown title='Description' content={[data.description]}/>
          <Dropdown title='Equipements' content={data.equipments}/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
  
export default Hebergements