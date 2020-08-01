import React from 'react';

// class App extends Component {
//  render() {
//     return (
//      <React.Fragment>
//        <label htmlFor="bar">bar</label>
//        <input type="type" onChange={() => {console.log("I am clecked")}} />;
//      </React.Fragment>
//    )
//  }
//}

const App = () => {
  return (
  <div>
    <Cat />
    <Cat />
    <Cat />
    <Cat />
    </div>
  )
}

const Cat = () => {
  return <div>Meow!</div>
}

export default App;
