import React from 'react';
import CoinForm from './CoinForm'
import CoinList from './CoinList'

class Home extends React.Component {
  state = { key: 0 }

  resetForm = () => {
    this.setState( state => ({ key: state.key + 1 }) )
  }

  render() {
    return (
      <>
        <CoinForm key={this.state.key} resetForm={this.resetForm} />
        <CoinList />
      </>
    )
  }
}

export default Home;













//Dave used this as temp code to test and make sure it works:

// state = { coin: {} 
// }

// clicky = () => {
//   axios.post('/api/coins?coin=btc')
//     .then( res => { debugger } )
// }

// clicky2 = () => {
//   axios.get('/api/coins')
//     .then( res => { debugger } ) 
// }

// <Button onClick={this.clicky}>
//         Click Me!
//       </Button>
//       <Button onClick={this.clicky2}>
//         Click Me!
//       </Button>