import { Link } from 'react-router-dom';
import Banner from '../../components/Banner'
import Card from '../../components/Card'
import Data from '../../data/data.json'
import rivageImage from '../../assets/rivage.png'
import '../../styles/pages/home.scss';
import '../../styles/themes/global.scss';

function Home() {

  return (
    <div className="home">
      <Banner title="Chez vous, partout et ailleurs" backgroundImage={rivageImage} opacity='0.6'/>
      <div className="home__gallery">
      {Data?.map((hebergement) => (
        <Link className='home__gallery__link' key={hebergement.id} to={`/hebergement/${hebergement.id}`}>
          <Card
            title={hebergement.title}
            picture={hebergement.cover}
          />
        </Link>
        ))}
      </div>
    </div>
  )
}

export default Home
