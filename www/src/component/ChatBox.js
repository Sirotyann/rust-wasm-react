import React from "react";
import { useState } from 'react';

let firstLoad = true;
let store = null;

function ChatBox(props) {
  console.log('render ChatBox', props);
  if(firstLoad) {
    store = props.wasm.init_store();
  }

  const [words, setWords] = useState('');
  const [messages, setMessages] = useState(store);

  if(firstLoad) {
    props.wasm.subscribe(store, (data)=> {
      console.log("callback from rust!!", data);
    });
  }

  return (
    <div id="chatBox">
      <div className="chats">
        {messages.map((msg) => (<Chat data={msg} key={msg.get('id')}/>))}
      </div>

      <div className="postBox">
        <input type="text" value={words} onChange={(event)=>{setWords(event.target.value.trim())}}/>
        <button onClick={()=>{
          if(words.length){
            props.wasm.post_message(messages, {
              author: 'Luke',
              text: words,
              time: new Date().getTime()
            });
            setWords('');
          }
        }}>Send</button>
      </div>
    </div>
  );
}

function Chat(props) {
  const time = new Date(props.data.get('time'));
  return (<div className="chat" key={props.id}>
      <div className="author">{props.data.get('author')}</div>
      <div className="content">
        <div className="text">{props.data.get('text')}</div>
        <div className="time">{time?`${time.getHours()}:${time.getMinutes()>=10?time.getMinutes():'0'+time.getMinutes()}:${time.getSeconds()}`:'--'}</div>
      </div>
    </div>);
}

export default ChatBox;
