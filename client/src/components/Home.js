import React, { Component } from 'react';
import { Header, Button } from 'semantic-ui-react';
import axios from 'axios'


class Home extends Component {
  render() {
    return (
      <>
      </>
    );
  }
}

export default Home;



state = { coin: {} 
}

clicky = () => {
  axios.post('/api/coins?coin=btc')
    .then( res => { debugger } )
}

clicky2 = () => {
  axios.get('/api/coins')
    .then( res => { debugger } ) 
}

<Button onClick={this.clicky}>
        Click Me!
      </Button>
      <Button onClick={this.clicky2}>
        Click Me!
      </Button>