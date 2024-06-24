import '../../styles/components/banner.scss'
import '../../styles/themes/global.scss'

function Banner({title ='', backgroundImage='', opacity = '0'}) {

  const bannerStyle = {
    backgroundImage: `url(${backgroundImage})`
  }

  const overlayStyle = {
    opacity: opacity
  }

  const formattedTitle = title.split(' ').map((word, index) => {
    if (word === 'vous,') {
      return <span key={index} className="break-after">{word} </span>;
    }
    return <span key={index}>{word} </span>;
  });

  return (
    <div className='banner' style={bannerStyle}>
      <div className='banner__overlay' style={overlayStyle}></div>
        <h2 className='banner__title'>
        {formattedTitle}
        </h2>
    </div>
  )
}

export default Banner