const Hero = () => (
  <div>
    <div className="hero-text">
      full stack
      software engineer
    </div>
    <div className="hero-subtext">
      I design and code full stack applications, and am always looking to push my boundaries!
    </div>
    <div className="hero-picture">
      <picture>
        <img src="https://media.licdn.com/dms/image/C5603AQG4-NmPjph_Fg/profile-displayphoto-shrink_200_200/0?e=1566432000&v=beta&t=8-xUPw4HzDn8nRt_-L1CyZ41uXG-TKPw0lvcN4-1hLo" />
      </picture>
    </div>
    <style jsx>{`
        div[class*='hero-'] {
          display: flex;
          justify-content: center;
          font-family: 'Lato', sans-serif;
        }
        .hero-text {
          font-size: 80px;
          letter-spacing: -1px;
          font-weight: 700;
          text-align: center;
          margin: 10px 0px 10px 0px;
        }
        .hero-subtext {
          font-size: 24px;
          font-weight: 400;
          text-align: center;
          margin: 5px 0px 5px 0px;
        }
      `}
    </style>
  </div>
)

export default Hero;