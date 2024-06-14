import styled from 'styled-components'
import colors from '../../utils/style/colors'
import Photo from '../../assets/rivage.png'

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const HomerContainer = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  width:100%;
  max-width: 1240px;
`

const StyleHeading = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  background-image : linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${Photo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0px 4px 4px 0px #00000040;

`

const StyledTitle = styled.h2`
  font-size: 48px;
  font-weight: 700;
  color: ${colors.white};
  line-height: 68.45px;

`

function Home() {
  return (
    <HomeWrapper>
      <HomerContainer >
        <StyleHeading>
          <StyledTitle>
            Chez vous, partout et ailleurs
          </StyledTitle>
        </StyleHeading>
        {/* <Gallery /> */}
      </HomerContainer>
    </HomeWrapper>
  )
}

export default Home
