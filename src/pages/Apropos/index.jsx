import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import Dropdown from '../../components/Dropdown'
import montagneImage from '../../assets/montagne.png'
import dataApropos from '../../data/apropos.json'
import '../../styles/pages/apropos.scss'
import '../../styles/themes/global.scss'

function Apropos() {
  return (
    <div className='aproposContainer'>
      <Header/>
      <div className="apropos">
        <Banner title="" backgroundImage={montagneImage} opacity='0'/>
        <div className="apropos__dropdowns">
          {dataApropos.map((hebergement,index) => (
            <Dropdown
            key={index}
            title={hebergement.title}
            content={[hebergement.content]}
            />
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Apropos
