import React, { Component } from 'react';
import "./App.css";


class App extends Component {
  state = {
    tags: ["Flower", "Bird", "Cat"]
  };


  render() {
    return (
      <div className="main">
        <h1>Outputing Some Data</h1>
        <ul>{this.state.tags.map(tag=> <li key={tag}>{tag}</li>)}</ul>
      </div>
    );
  }
}

export default App;
