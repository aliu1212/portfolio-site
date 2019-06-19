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

// import React from 'react'
// import styled from 'styled-components'

// const Title = styled.h1`
//   color: red;
//   font-size: 50px;
// `

// export default () => <Title>My page</Title>