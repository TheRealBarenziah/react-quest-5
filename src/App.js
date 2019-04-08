import React, { Component } from 'react';
import './App.css';
import GenerateQuote from './Components/GenerateQuote/GenerateQuote';
import DisplayQuote from './Components/DisplayQuote/DisplayQuote';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteCard:{
        image:'http://placekitten.com/400/400',
        character: 'Meow',
        quote: "I'm a placeholder cat. Click on 'Get new quote' to get going !"
      }
    };
  }
  getQuote() {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response => response.json())
      .then(res => {
        this.setState({ quoteCard: res[0] });
      })
      };
  render() {
    return (
      <div className="App">
        <GenerateQuote selectQuote={() => this.getQuote()} />
        <DisplayQuote quote={this.state.quoteCard} />
      </div>
    );
  }
}

export default App;
