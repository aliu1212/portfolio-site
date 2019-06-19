import Header from './Header'
import Hero from './Hero'
import Head from 'next/head';

const Main = (props) => (
  <div>
    <Head>
      <title>Alex's Portfolio</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="container">
      <br />
      <br />
      <Header />
      <Hero />
    </div>
    <style jsx>{`
        .container {
          display: grid;
        }
        * {
          font-family: 'Montserrat', sans-serif;
        }
      `}
    </style>  
  </div>
);

export default Main;