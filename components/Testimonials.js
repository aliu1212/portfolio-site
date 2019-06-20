import Quotes from '../assets/Quotes';
import OneQuote from './OneQuote';

const Testimonials = () => (
  <div>
    <div className="testimonials-title">
      testimonials
    </div>
    <div className="testimonials-description">
      see what others have said about working with me!
    </div>
      { 
        Quotes.map((quote, index) => {
          return <OneQuote quote={ quote } key={ index } />
        }) 
      }
    <style jsx>{`
        div[class*='testimonials-'] {
          display: flex;
          justify-content: center;
        }
        .testimonials-title {
          font-size: 28px;
          letter-spacing: 0px;
          font-weight: 400;
          text-align: center;
          margin: 20px 0px 20px 0px;
        }
        .testimonials-description {
          font-size: 14px;
          letter-spacing: 0px;
          font-weight: 400;
          text-align: center;
          margin: 20px 0px 20px 0px;
        }
      `}
    </style>
  </div>
)

export default Testimonials