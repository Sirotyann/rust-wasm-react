import React from "react";
import ChatBox from "./component/ChatBox";
import SquareBox from "./component/SquareBox";

export default class Main extends React.Component {
  render() {
    return (<div id="main">
      <SquareBox square={this.props.wasm.square}/>
      <ChatBox/>
    </div>);
  }
}
