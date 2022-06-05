import styled from 'styled-components'

import Head from 'next/head'
import GlobalStyle from './components/GlobalStyle'
import Link from 'next/link'
import {useEffect, useState} from "react";
import transferData from './data/proofPayments.json'

export default function Transfers() {
  const [accounts, setAccounts] = useState([])
  // const [userId, setUserId] = useState([])
  useEffect(() => {
    setAccounts(transferData.proofPayments)
    // const user = await axios.get("../api/students")
    // setUserId(user)
  }, [])
  
  return (
    <div>
      <Head>
        <title>Transferencias</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <GlobalStyle />
      <Wrapper>
        <Navigation>
          <Title>TECBANK Web</Title>
          <Link href={'/transfers'}>
            <Text>Transferencias</Text>
          </Link>
          <Link href={'/'}>
            <Text>Módulo Informativo</Text>
          </Link>
          <Link href={'/'}>
            <Text>Historial</Text>
          </Link>
          <Link href={'/'}>
            <Text>Pago de Servicios</Text>
          </Link>
        </Navigation>
        <Item>
          <br />
          <br />
          <br />
          <center>
            <Title second>Seleccione la cuenta a la que desea transferir</Title>
          </center>
          <br />
          <br />
          <br />

          <Label>Banco al que desea transferir</Label>
          <Bancos>
            <option value="1">Banco de Costa Rica</option>
            <option value="1">Banco de Costa Rica</option>
            <option value="1">Banco de Costa Rica</option>
            <option value="1">Banco de Costa Rica</option>
          </Bancos>
          <br />
          <Label>Cuenta a depositar</Label>
          <FormInput placeholder="Numero de cuenta" />
        </Item>

        <Item>
          <br />
          <br />
          <br />
          <center>
            <Title second>Transferir</Title>
          </center>
          <br />
          <Label>Cantidad</Label>
          <FormInput placeholder="₡" />

          <Label>Descripción</Label>
          <FormInput placeholder="Descripcion" />

          <br />
          <br />
          <Label>Token</Label>
          <FormInput placeholder="Token" />

          <Button primary>Realizar</Button>
        </Item>
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
  grid-gap: 15px;
  grid-template-rows: 0.1fr 1fr;
  grid-template-columns: repeat(2, 1fr);
`
const Title = styled.span`
  font-weight: ${(props) => (props.second ? 'normal' : 'bold')};
  color: ${(props) => (props.second ? 'gray' : '#690206')};
  font-size: ${(props) => (props.second ? '1.1rem' : '2rem')};
  margin: 0 4rem;
  text-align: center;
`
const Label = styled.span`
  display: block;
  font-size: 0.9rem;
  text-indent: 8rem;
`
const Bancos = styled.select`
  display: block;
  height: 1.8rem;
  width: 50%;
  outline: none;
  margin: 0.5rem auto;
  border-radius: 5px;
  text-indent: 0.2rem;
  background-color: #f4cdcc;
  border: 1px solid #df6967;
  color: #630606;

  option {
    background-color: white;
    color: #630606;
  }
`

const Text = styled.span`
  color: #630606;
  font-size: 0.9rem;
  display: inline;
  margin-left: 2.8rem;
`
const Navigation = styled.div`
  grid-row: 1;
  grid-column: span 2;
  position: relative;
  font-size: 1rem;
  font-weight: bold;
`
const Item = styled.div`
  background-color: #eaeaea;
  border: 1px solid #a5a5a5;
  border-radius: 15px;
`

const FormInput = styled.input`
  outline: none;
  display: block;
  width: 50%;
  height: 1.8rem;
  margin: 0.5rem auto;
  border: 1px solid #df6967;
  background-color: #f4cdcc;
  color: #630606;
  text-indent: 0.5rem;
  border-radius: 5px;

  &::placeholder {
    color: #890f0d;
  }
`
const Button = styled.button`
  display: block;
  width: 50%;
  height: 1.8rem;
  margin: ${(props) => (props.primary ? '1.8rem ' : '0.4rem')} auto 0 auto;
  border: solid 1px ${(props) => (props.primary ? 'white ' : '#df6967')};
  border-radius: 5px;
  color: ${(props) => (props.primary ? 'white ' : '#df6967')};
  font-weight: bold;
  background-color: ${(props) => (props.primary ? '#df6967 ' : 'white')};
`
