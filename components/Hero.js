const Hero = () => (
  <div>
    <div className="hero-text">
      full stack software engineer
    </div>
    <div className="hero-subtext">
      i design and code full stack applications, and am always looking to push my boundaries!
    </div>
    <div className="hero-picture">
      <picture>
        <img src="https://alexliudev.s3-us-west-1.amazonaws.com/avatarimg/icon1.png" style={{ width:300 }} />
      </picture>
    </div>
    <style jsx>{`
        div[class*='hero-'] {
          display: flex;
          justify-content: center;
        }
        .hero-text {
          font-size: 80px;
          letter-spacing: 0px;
          font-weight: 700;
          text-align: center;
          margin: 15px 0px 25px 0px;
          line-height: .88em;
        }
        .hero-subtext {
          font-size: 28px;
          letter-spacing: 0.5px;
          font-weight: 400;
          text-align: center;
          margin: 40px 0px 40px 0px;
        }
        .hero-picture {
          margin: 20px 0px 20px 0px;
        }
      `}
    </style>
  </div>
)

export default Hero;