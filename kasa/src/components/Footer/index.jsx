import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../Logo'
import colors from '../../utils/style/colors'

const FooterContainer = styled.nav`
    display: flex;
    flex-direction: column;
    padding: 30px;
    align-items: center;
    gap: 30px;
    margin-top:auto;
    background-color: ${colors.black};
`

const MentionContainer = styled.span`
    color : ${colors.white};
`

function Footer() {
  console.log('Color passed to Footer:', colors.white);
  return (
    <FooterContainer>
      <Link to="/">
        <Logo color={colors.white} />
      </Link>
      <MentionContainer>© 2020 Kasa. All rights reserved</MentionContainer>
    </FooterContainer>
  )
}

export default Footer
