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
  </div>
)

export default Testimonials