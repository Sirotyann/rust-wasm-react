import React from "react";
import { useState } from 'react';

function ChatBox() {
  const [count, setCount] = useState(0);

  return (
    <div id="chatBox">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me, testing hook
      </button>
    </div>
  );
}

export default ChatBox;
