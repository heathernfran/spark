import React, { Component } from 'react';
import './App.css';

import Status from './Status'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chips: []
    }
  }

  componentDidMount() {
    this._fetchPosts('https://gist.githubusercontent.com/evrowe/71fccd381cfab4e50852/raw/e571398fe259595746b78f1d896b6aace8f4726e/chip-services.json')
  }

  _fetchPosts(url) {
   return fetch(url)
           .then((response) => response.json())
           .then((json) => {
             this.setState({
               chips: json.data
             })
           })
           .catch((error) => {
             console.error(`Error in response: ${error}`)
           })
}

  render() {
    return (
      <div className="App">
        {this.state.chips.map((value) => {
          return (
            <div key={value.id}>
              <h1>{value.name}</h1>
              <Status {...value} />
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
