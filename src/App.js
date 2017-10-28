import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state = {num: props.num};
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);

  }
  incrementCount() {
    this.setState(prevState => ({
      num: prevState.num + 1
    }));
  }
  decrementCount() {
    this.setState(prevState => ({
      num: prevState.num - 1
    }));
  }
  render() {
    return (
    <div>
    <button onClick={this.incrementCount}>Increment</button>
    <button onClick={this.decrementCount}>Decrement</button>
    <div className="Counter">{this.state.num}</div>
    </div> );
  }
}


class App extends Component {

  render() {
    return (
      <Counter num={0}/>
    );
  }
}

export default App;
