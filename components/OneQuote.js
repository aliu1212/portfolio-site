const OneQuote = (props) => (
  <div className="one-q-card">
    <div className="quote-text">
      "{ props.quote.quote }"
    </div>
    <div className="quote-author">
      { props.quote.author }
    </div>
    <div className="quote-relation">
      { props.quote.relation }
    </div>
    <style jsx>{`
        div[class*='quote-'] {
          display: flex;
          justify-content: center;
        }
        .quote-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 18px;
          letter-spacing: 0px;
          font-weight: 400;
          text-align: center;
          margin: 20px 0px 15px 0px;
        }
        .quote-author {
          font-size: 14px;
          letter-spacing: 0px;
          font-weight: 700;
          text-align: center;
          margin: 5px 0px 5px 0px;
        }
        .quote-relation {
          font-size: 14px;
          letter-spacing: 0px;
          font-weight: 400;
          text-align: center;
          margin: 5px 0px 5px 0px;
          font-style: italic;
        }
        .one-q-card {
          box-shadow: 2px 4px 8px 2px rgba(0,0,0,0.2);
          transition: 0.3s;
          padding: 5px 15px 25px 15px;
          margin: 15px 15px;
          border-radius: 8px;
        }
        .one-q-card:hover {
          box-shadow: 2px 8px 16px 2px rgba(0,0,0,0.2);
        }
      `}
    </style>
  </div>
)

export default OneQuote