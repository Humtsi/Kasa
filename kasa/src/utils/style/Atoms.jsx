import { Link } from 'react-router-dom'
import colors from './colors'
import styled from 'styled-components'

// const rotate = keyframes`
//   from {
//     transform: rotate(0deg);
//   }

//   to {
//     transform: rotate(360deg);
//   }
// `

// export const Loader = styled.div`
//   padding: 10px;
//   border: 6px solid ${colors.primary};
//   border-bottom-color: transparent;
//   border-radius: 22px;
//   animation: ${rotate} 1s infinite linear;
//   height: 0;
//   width: 0;
// `

export const StyledLink = styled(Link)`
  color: ${colors.black};
  text-decoration: none;
  font-size: 24px;
  weight : 500;
  text-align: right;
  margin: 0px 10px;
  &:hover{
    text-decoration : underline;
  }
`
