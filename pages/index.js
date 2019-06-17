import Main from '../components/Main'
import Fonts from '../assets/Fonts'

class Index extends React.Component {
  componentDidMount () {
    Fonts()
  }

  render () {
    return <Main />
  }
}

export default Index;