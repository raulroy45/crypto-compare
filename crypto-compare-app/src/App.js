import React from 'react';
import './App.css';
import {Dropdown, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cryptocurrency: "Choose your cryptocurrency",
      data: null
    }
  }

  setCrypto = (crypto) => {
    this.setState({cryptocurrency: crypto});
  }

  setBitcoin = async() =>  {
    this.setCrypto("Bitcoin");
    try {
      let response = await fetch('http://localhost:5000/bitcoin');
      if (!response.ok) {
        alert("Error in fetching data!")
      }
      let parsed = await response.json();
      this.setState({data: parsed})
    } catch (e) {
      alert ("Error in fetching data!")
    }
  }

  setEthereum = async() => {
    this.setCrypto("Ethereum");
    try {
      let response = await fetch('http://localhost:5000/ethereum');
      if (!response.ok) {
        alert("Error in fetching data!")
      }
      let parsed = await response.json();
      this.setState({data: parsed})
    } catch (e) {
      alert ("Error in fetching data!")
    }
  }


  render () {
    let displayText;
    if (this.state.data !== null) {
      displayText = <div className="App">
        <Row>
      <Col> Kraken Exchange<br></br> 
        Buy price: {this.state.data['kraken_buy']} <br></br>
        Sell price: {this.state.data['kraken_sell']} <br></br>
      </Col>
      <Col> Coinbase Exchange<br></br>
        Buy price: {this.state.data['coinbase_buy']} <br></br>
        Sell price: {this.state.data['coinbase_sell']} <br></br>
      </Col>
    </Row>
    <br></br>
    You should buy on {this.state.data['best_buy']} and sell on {this.state.data['best_sell']}.
    </div>
    } 
    return (
      <div className="App">
        <header className="App-header">
          CryptoCompare
        </header>
        <div className="Body">
          This website shows you the current buy/sell prices from Coinbase and Kraken. <br></br>
          DISCLAIMER: These prices do not account for the service provider's additional fees.<br></br>
          To begin, choose the cryptocurrency you want to compare:<br></br>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {this.state.cryptocurrency}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={this.setBitcoin}>Bitcoin</Dropdown.Item><br></br>
              <Dropdown.Item onClick={this.setEthereum}>Ethereum</Dropdown.Item><br></br>
            </Dropdown.Menu>
          </Dropdown>
          {displayText}
        </div>
      </div>
    );
  }
}

export default App;
