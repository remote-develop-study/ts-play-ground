import * as React from 'react';

interface Props {

}

interface State {
  counter: number;
}

class Counter extends React.Component<Props, State> {
  state: State = {
    counter: 0
  };

  onIncrement = (): void => {
    this.setState(
      ({ counter }) => ({ counter: counter + 1 })
    );
  }

  // plus(): void {
  //   this.setState(
  //     ({ counter }) => ({ counter: counter + 1 })
  //   );
  // }

  onDecrement = (): void => {
    this.setState(
      ({ counter }) => ({ counter: counter - 1 })
    );
  }

  render() {
    const { onIncrement, onDecrement } = this;
    return (
      <div>
        <h1>카운터</h1>
        <button onClick={onIncrement}>+</button>
        <span>{this.state.counter}</span>
        <button onClick={onDecrement}>-</button>
      </div>
    );
  }
}

export default Counter;
