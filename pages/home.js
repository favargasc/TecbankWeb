import Head from 'next/head'
import GlobalStyle from './components/GlobalStyle'
import styled from 'styled-components'
import HomeImg from '../public/assets/home.svg'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Accounts</title>
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
        <Description />
        <CurrencyExchange />
        <Advantage>Conversión de Divisas</Advantage>
        <DataDescription>
          <InfoItem first>
            <InfoText title>Máxima Seguridad</InfoText>
            <InfoText>
              is simply dummy text of the printing and typesetting industry.
            </InfoText>
          </InfoItem>
          <InfoItem>
            <InfoText title>Envíos veloces</InfoText>
            <InfoText>
              is simply dummy text of the printing and typesetting industry.
            </InfoText>
          </InfoItem>
        </DataDescription>
        <CurrencyExchangeForm>
          <div>
            <FormText min>Monto</FormText>
            <FormText>USD 600</FormText>
            <FormText>EURO 700</FormText>
          </div>
          <Button>Revisar</Button>
        </CurrencyExchangeForm>
        <Image>
          <HomeImg />
        </Image>
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
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 25vh 17.3vh 1fr;
`
const Title = styled.span`
  font-weight: bold;
  color: #690206;
  font-size: 2rem;
  margin: 0 4rem;
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
const Description = styled.span`
  grid-row: 2;
  grid-column: 1;
`
const CurrencyExchange = styled.span`
  grid-row: 3;
  grid-column: 1;
`

const Image = styled.div`
  grid-row: span 2;
  grid-column: 2;
`

const Advantage = styled.div`
  position: absolute;
  font-size: 1.8rem;
  top: 24%;
  left: 10%;
  color: #371211;
`

const DataDescription = styled.div`
  grid-row: 3;
  grid-column: 1;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 39.5vh;

  background-color: #f6f4ff;
  border-bottom: 1px solid #dfdefe;
`

const CurrencyExchangeForm = styled.form`
  position: absolute;
  display: flex;
  bottom: 44%;
  left: 8%;
  height: 10vh;
  width: 35vw;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #efd0d5;
`
const Button = styled.button`
  display: inline-block;
  border: none;
  margin: 0.3rem;
  padding: 0.5rem;
  background-color: #cc4f52;
  color: white;
  font-weight: bold;
  border-radius: 5px;
`

const FormText = styled.span`
  text-align: left;
  position: relative;
  color: ${(props) => (props.min ? '#e0969a' : '#690206')};
  font-weight: bold;
  padding-left: 2rem;
  padding-right: 2rem;
  display: inline;
  top: 1.2rem;
`

const InfoItem = styled.div`
  margin-top: 5rem;
  margin-left: ${(props) => (props.first ? '4rem' : '1rem')}; ;
`
const InfoText = styled.span`
  display: block;
  font-weight: ${(props) => (props.title ? 'bold' : 'thin')};
  font-size: ${(props) => (props.title ? '1.1rem' : '0.8rem')};
  color: ${(props) => (props.title ? '#371211' : '#F76363')};
  margin-bottom: 0.6rem;
`