import Header from './Header'
import Head from 'next/head';
import MainWrapper from '../layouts/MainWrapper'

const Main = (props) => (
  <div>
    <Head>
      <title>Alex's Portfolio</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <MainWrapper>
      <br />
      <br />
      <Header />
    </MainWrapper>  
  </div>
);

export default Main;