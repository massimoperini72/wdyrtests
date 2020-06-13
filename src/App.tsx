import React from 'react';
import './App.css';

interface IState {
  counter: number;
}

function App() {

  const [state, setState] = React.useState<IState>({
    counter: 0
  })

  const handleClick = (same: boolean): void => {
    let newValue: number;
    if (same)
      newValue = state.counter;
    else
      newValue = state.counter + 1;
    // If the value is the same as the existing state,
    // there's no need to re-render.
    // So the correct logic would be:
    // if (newValue !== state.counter)
    setState({
      counter: newValue
    });
  }

  return (
    <div className="App">
      <h2>I'm the functional component</h2>
      <button onClick={() => handleClick(true)}>Click me (same value)</button>
      <br /><br />
      <button onClick={() => handleClick(false)}>Click me (increment)</button>
      <div className='counter'>Counter: {state.counter}</div>
    </div>
  );
}

App.whyDidYouRender = true;

export default App;
