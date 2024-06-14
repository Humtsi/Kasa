import { createGlobalStyle } from 'styled-components'

const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: 'Montserrat', Helvetica, sans-serif;
    }

    body {
        background-color: '#2F2E41';
        margin: 0;
    }
`

function GlobalStyle() {

  return <StyledGlobalStyle />
}

export default GlobalStyle
