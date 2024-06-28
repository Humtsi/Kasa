import '../../styles/components/banner.scss'
import '../../styles/themes/global.scss'

function Banner({title ='', backgroundImage='', opacity = '0'}) {

  const bannerStyle = {
    backgroundImage: `url(${backgroundImage})`
  }

  const overlayStyle = {
    opacity: opacity
  }

  return (
    <div className='banner' style={bannerStyle}>
      <div className='banner__overlay' style={overlayStyle}></div>
        <h2 className='banner__title'>
        {title}
        </h2>
    </div>
  )
}

export default Banner