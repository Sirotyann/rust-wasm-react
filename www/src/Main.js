import React from "react";
import ChatBox from "./component/ChatBox";
import SquareBox from "./component/SquareBox";

const test_post_message = (store, msg) => {
  console.log('test_post_message', store, msg);
}

const test_subscribe = (store, callback) => {
  console.log('test_subscribe', store, callback);
}

const test_init_store = ()=> {
  const luke = new Map();
  luke.set('id', 1);
  luke.set('author', 'Luke');
  luke.set('time', 1544637680516);
  luke.set('text', 'Morning master!');

  const joda = new Map();
  joda.set('id', 2);
  joda.set('author', 'Joda');
  joda.set('time', 1544637737755);
  joda.set('text', 'Hi Luke!');

  return {messageList: [luke, joda]};
};


export default class Main extends React.Component {
  render() {

    const wasm = {...this.props.wasm};
    // wasm.init_store = test_init_store;
    // wasm.post_message = test_post_message;
    // wasm.subscribe = test_subscribe;
    // <SquareBox square={this.props.wasm.square} timed={this.props.wasm.timed}/>
    return (<div id="main">
          <ChatBox wasm={wasm}/>
        </div>
    );


      // <div id="main">
      //   <button onClick={() => this.g_rustStore = this.props.wasm.init_store() }>{"1) Initialize store"}</button>
      //   <br/>
      //   <button onClick={
      //       () => console.log(this.props.wasm.subscribe(function () { console.log("Callback!") }))
      //       }>
      //         {"2) Subscribe"}
      //   </button>
      //   <button onClick={
      //       () => console.log(this.props.wasm.subscribe("testviewname", function () { console.log("Callback!") }))
      //       }>
      //         {"3) Add message"}
      //   </button>
      //
      // </div>
  }
}
