import React from "react";
import { useState } from 'react';

class ChatBox extends React.Component {
  render(){
    return (<div id="chatBox">

    </div>);
  }
}
// 
// const ChatBox = () => {
//   const [messages] = useState(0);
// }

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me, testing hook
      </button>
    </div>
  );
}

export default Example;
