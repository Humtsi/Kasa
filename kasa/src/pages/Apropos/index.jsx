import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import Dropdown from '../../components/Dropdown'
import montagneImage from '../../assets/montagne.png'
import '../../styles/pages/apropos.scss'
import '../../styles/themes/global.scss'

function Apropos() {
  return (
    <div className='aproposContainer'>
      <Header />
      <div className="apropos">
        <Banner title="" backgroundImage={montagneImage} opacity='0'/>
        <div className="apropos__dropdowns">
              <Dropdown
                title='Fiabilité'
                content={['Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.']}
                className = 'apropos__dropdowns__dropdown'
              />
              <Dropdown
                title='Respect'
                content={['La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.']}
                className = 'apropos__dropdowns__dropdown'
              />
              <Dropdown
                title='Service'
                content={['La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.']}
                className = 'apropos__dropdowns__dropdown'
              />
              <Dropdown
                title='Sécurité'
                content={["La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."]}
                className = 'apropos__dropdowns__dropdown'
              />
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Apropos
