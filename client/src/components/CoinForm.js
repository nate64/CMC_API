import React from  'react'
import { Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addCoin }from '../reducers/coins'



//coinform is a class becuase it will have state
class CoinForm extends React.Component {
  state = { coin: '' }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefailt()
    const { dispatch } = this.props
    const { coin } = this.state
    dispatch(addCoin(coin))
    this.setState({ coin: '' })
  }

  render() {
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
        label="Watch Coin"
        value={this.state.coin}
        onChange={this.handleChange}
        name="coin"
        required
        />
        <Form.Button>Add Coin</Form.Button>
      </Form>
    )
  }
}

export default connect() (CoinForm)

