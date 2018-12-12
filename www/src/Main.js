import React from "react";
import ChatBox from "./component/ChatBox";
import SquareBox from "./component/SquareBox";


export default class Main extends React.Component {
  render() {
    return (
        <div id="main">
          <button onClick={() => this.g_rustStore = this.props.wasm.init_store() }>{"1) Initialize store"}</button>
          <br/>
          <button onClick={
              () => console.log(this.props.wasm.subscribe(function () { console.log("Callback!") }))
              }>
                {"2) Subscribe"}
          </button>
          <button onClick={
              () => console.log(this.props.wasm.subscribe("testviewname", function () { console.log("Callback!") }))
              }>
                {"3) Add message"}
          </button>

        </div>
    );
      /*
    return (<div id="main">
      // <SquareBox square={this.props.wasm.square} timed={this.props.wasm.timed}/>
      // <ChatBox/>
      <button onClick={console.info (this.props.wasm)} />
      // <button onClick={this.props.wasm.subscribe("Dumbo", function() {console.info("yu da man");})} />
    </div>);
    */
  }
}
