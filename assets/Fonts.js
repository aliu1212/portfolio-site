const FontFaceObserver = require('fontfaceobserver')

const Fonts = () => {
  const link = document.createElement('link')
  link.href = 'https://fonts.googleapis.com/css?family=Montserrat:400,500,700,900'
  link.rel = 'stylesheet'

  document.head.appendChild(link)

  const montserrat = new FontFaceObserver('Montserrat')

  montserrat.load().then(() => {
    document.documentElement.classList.add('montserrat')
  })

  const link2 = document.createElement('link')
  link2.href = 'https://fonts.googleapis.com/css?family=Lato:400,700'
  link2.rel = 'stylesheet'

  document.head.appendChild(link2)

  const lato = new FontFaceObserver('Lato')

  lato.load().then(() => {
    document.documentElement.classList.add('lato')
  })
}

export default Fonts;