import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --border-radius: 3%;
  }
  
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #EDF2F4;
    font-family: 'Roboto', sans-serif;
  }
`
export default GlobalStyle
