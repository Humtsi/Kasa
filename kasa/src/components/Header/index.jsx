import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StyledLink } from '../../utils/style/Atoms'
import Logo from '../Logo'
import colors from '../../utils/style/colors'

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap:30px;
  color: ${colors.black}
`

function Header() {

  return (
    <NavContainer>
      <Link to="/">
        <Logo color = {colors.primary}/>
      </Link>
      <div>
        <StyledLink  to="/">
          Accueil
        </StyledLink>
        <StyledLink to="/apropos">
          A propos
        </StyledLink>
      </div>
    </NavContainer>
  )
}

export default Header
