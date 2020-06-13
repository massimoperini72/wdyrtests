import React from 'react';
import './App.css';

interface Props {

}

interface IState {
  test1: boolean;
  test2: string;
  counter: number;
}

class AppOO extends React.Component<Props, IState> {

  static whyDidYouRender = true

  constructor(props: Props) {
    super(props);
    this.state = {
      test1: false,
      test2: 'test2',
      counter: 0
    }
  }

  private handleClick = (same: boolean): void => {
    let newValue: number;
    if (same)
      newValue = this.state.counter;
    else
      newValue = this.state.counter + 1;
    // Including the preState object with spread syntax is not an issue.
    // It only changes the specified variable.
    this.setState((prevState: IState) => ({
      ...prevState,
      counter: newValue
    }));
  }

  render() {
    return (
      <div className="App">
        <h2>I'm the class component</h2>
        <button onClick={() => this.handleClick(true)}>Click me (same value)</button>
        <br /><br />
        <button onClick={() => this.handleClick(false)}>Click me (increment)</button>
        <div>Counter: {this.state.counter}</div>
      </div>
    );
  }
}

export default AppOO;
