import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import Card from '../../components/Card'
import Data from '../../data/data.json'
import rivageImage from '../../assets/rivage.png'
import '../../styles/pages/home.scss'
import '../../styles/themes/global.scss'

function Home() {
  return (
    <div className='homeContainer'>
      <Header />
      <div className="home">
        <Banner title="Chez vous, partout&nbsp;et&nbsp;ailleurs" backgroundImage={rivageImage} opacity='0.6'/>
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
      <Footer />
    </div>
  )
}

export default Home
