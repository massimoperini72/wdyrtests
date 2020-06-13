import React from 'react';
import './App.css';

interface IState {
  counter: number;
}

function App() {

  const [state, setState] = React.useState<IState>({
    counter: 0
  })

  const handleClick = (): void => {
    setState({
      counter: state.counter
    });
  }

  return (
    <div className="App">
      <h2>I'm the functional component</h2>
      <button onClick={handleClick}>Click me</button>
      <div>Counter: {state.counter}</div>
    </div>
  );
}

App.whyDidYouRender = true;

export default App;
