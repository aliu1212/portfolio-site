import Header from './Header';
import Hero from './Hero';
import Projects from './Projects';
import Testimonials from './Testimonials';
import Whoami from './Whoami';
import Footer from './Footer';
import Head from 'next/head';

const Main = (props) => (
  <div>
    <Head>
      <title>alex's portfolio</title>
      <link rel="stylesheet" href="/static/styles.css" />
      <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
      <link rel="manifest" href="/static/site.webmanifest" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="container">
      <Header />
      <Hero />
      <Whoami />
      <Projects />
      <Testimonials />
      <Footer />
    </div>
  </div>
);

export default Main;