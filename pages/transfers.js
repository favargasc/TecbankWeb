import styled from 'styled-components'

import Head from 'next/head'
import GlobalStyle from './components/GlobalStyle'
import Navigation from './components/organisms/Navigation'

export default function Transfers() {
  return (
    <div>
      <Head>
        <title>Accounts</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <GlobalStyle />
      <Wrapper>
        <Navigation />
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  width: 80%;
  height: 93%;
  top: 4%;
  left: 10%;
  padding: 2rem;
  display: grid;
  position: absolute;
  background-color: white;
  border-radius: 15px;
`