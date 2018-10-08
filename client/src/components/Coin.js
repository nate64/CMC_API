import React from 'react'
import { Card, Grid, Header } from 'semantic-ui-react'
import axios from 'axios'
import { 
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts'

class Coin extends React.Component {
  state = { coin: {} }
  
  componentDidMount() {
    const { match: { params: { id } } } =this.props
    axios.get(`/api/coins/${id}`)
      .then( res => this.setState({ coin: res.data }) )
  }

  formatData = () => {
    const { coin } = this.state
    const { quotes = {} } = coin
    const data = quotes.usd
    if (data) {
    } else {
      
    }
    }
  }

  render() {
    const { coin } = this.state
    const { quotes = {} } = coin
    const price = quotes.USD ? quotes.USD.price : ''
    return(
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Card>
              <Card.Content header={coin.name} />
              <Card.Content description={`$${price}`} />
              <Card.Content extra>
                <p>Rank: {coin.rank} </p>
                <p>Symbol {coin.symbol} </p>
                <p>Supply {coin.supply} </p>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>

    )
  }
    



}





export default Coin