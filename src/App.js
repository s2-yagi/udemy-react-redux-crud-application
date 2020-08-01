import React, {Component} from 'react';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="type" onChange={() => {console.log("I am clecked")}} />;
      </React.Fragment>
    )
  }
}

export default App;
