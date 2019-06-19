// import Main from '../components/Main'
// import Fonts from '../assets/Fonts'

// class Index extends React.Component {
//   componentDidMount () {
//     Fonts()
//   }

//   render () {
//     return <Main />
//   }
// }

// export default Index;
import '../styles/index.css'

export default () => (
  <div className="p-4 shadow rounded bg-white">
    <h1 className="text-purple leading-normal">Next.js</h1>
    <p className="text-grey-dark">with Tailwind CSS</p>
  </div>
)