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

  private handleClickCorrect = (): void => {
    // Let's say we receive a new value for this variable and the value
    // is the same as the existing state.
    // I'm forcing the same value for testing.
    const newValue = this.state.counter;

    if (newValue !== this.state.counter) {
      this.setState((prevState: IState) => ({
        ...prevState,
        counter: newValue
      }));
    }
  }

  render() {
    return (
      <div className="App">
        <h2>I'm the class component</h2>
        <button onClick={() => this.handleClick(true)}>
          Click me (same value)
        </button>
        <br /><br />
        <button className='buttonCorrect' onClick={this.handleClickCorrect}>
          Click me (same value, correct way)
        </button>
        <br /><br />
        <button onClick={() => this.handleClick(false)}>
          Click me (increment)
        </button>
        <div className='counter'>Counter: {this.state.counter}</div>
      </div>
    );
  }
}

export default AppOO;
