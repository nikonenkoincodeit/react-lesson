import {Component} from 'react'

export default class Counter extends Component {
  state = {
    index: 0,
  };
  counter = 25;

  addCounter = () => {
    // console.log(this.props);
    // let counter = this.state.index;
    for (let i = 0; i< 3; i++) {
      console.log(this.state.index);
      this.setState((prevState)=> {
          return {index:  prevState.index + 1}
      });
    }
  };

  render() {
    console.log(this);
    return (
      <>
        <h3>Counter {this.counter}</h3>
        <div>Hello {this.state.index}</div>
        <button onClick={this.addCounter}>add counter</button>
      </>
    );
  }
}
class Counter2 extends Counter {
  showCounter = () => {
    console.log('showCounter ', this.counter);
  };
}

let a = new Counter2();
a.showCounter();