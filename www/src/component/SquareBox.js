import React from "react";
import ReactDOM from "react-dom";

export default class SquareBox extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.timed);
    this.state = { num: 2 };
    this.square = this.square.bind(this);
    this.props.timed((res)=>{console.log(res);});
  }

  square() {
    this.setState({num: this.props.square(this.state.num)});
  }

  render() {
    console.log("Create square");
    return (
      <div>
        <p>Num: {this.state.num} </p>
        <button onClick={this.square}>Click me to squre, testing wasm</button>
      </div>);
  }
}
