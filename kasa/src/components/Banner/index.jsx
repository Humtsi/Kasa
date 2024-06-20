import '../../styles/components/banner.scss'
import '../../styles/themes/global.scss'

function Banner({title ='', backgroundImage='', opacity = '0'}) {

  const bannerStyle = {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '25px',
    height: '223px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    boxShadow: '0px 4px 4px 0px #00000040',
    color: 'white',
    textAlign: 'center',
    overflow: 'hidden',
    backgroundImage: `url(${backgroundImage})`,
  }

  const overlayStyle = {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#000',
    opacity : opacity,
    zIndex: 1,
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