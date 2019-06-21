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
  </div>
)

export default OneQuote