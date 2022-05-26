import styled from 'styled-components'

import GlobalStyle from '../GlobalStyle'

import Link from 'next/link'

export default function Navigation() {
  return (
    <div>
      <GlobalStyle />

      <NavBar>
        <Title>TECBANK Web</Title>
        <Link href={'/'}>
          <Text>Módulo Informativo</Text>
        </Link>
        <Link href={'/'}>
          <Text>Historial</Text>
        </Link>
        <Link href={'/'}>
          <Text>Pago de Servicios</Text>
        </Link>
      </NavBar>
    </div>
  )
}

const Title = styled.span`
  font-weight: bold;
  color: #690206;
  font-size: 2rem;
  margin: 0 4rem;
`
const Text = styled.span`
  color: #630606;
  font-size: 0.9rem;
  margin-left: 2.8rem;
  align-items: flex-end;
`

const NavBar = styled.div`
  grid-row: 1;
  grid-column: span 2;
  position: relative;
  font-size: 1rem;
  font-weight: bold;
  background-color: gray;
  display: flexbox;
`
