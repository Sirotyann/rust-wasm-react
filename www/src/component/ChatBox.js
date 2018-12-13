import React from "react";
import { useState } from 'react';
import { subscribe } from '../../wasm/owl';

let firstLoad = true;

function ChatBox(props) {
  // console.log('render ChatBox firstLoad? ' + firstLoad, props);

  const [words, setWords] = useState('');
  const [messages, setMessages] = useState([]);

  if(firstLoad) {
    subscribe((msgs)=> {
      setMessages(msgs);
    });
    props.wasm.init_store();
  }

  firstLoad = false;

  return (
    <div id="chatBox">
      <div className="chats">
        {messages.map((msg) => (<Chat data={msg} key={msg.get('time')}/>))}
      </div>

      <div className="postBox">
        <input type="text" value={words} onChange={(event)=>{setWords(event.target.value.trim())}}/>
        <button onClick={()=>{
          if(words.length){
            props.wasm.post_message(messages, words, 'Luke', `${new Date().getTime()}`);
            setWords('');

            setTimeout(()=>{
              props.wasm.auto_reply_message(messages, `${new Date().getTime()}`);
            }, Math.floor(Math.random()*2000));
          }
        }}>Send</button>
      </div>
    </div>
  );
}

function Chat(props) {
  const time = new Date(props.data.get('time'));
  return (<div className="chat">
      <div className="author">{props.data.get('author')}</div>
      <div className="content">
        <div className="text">{props.data.get('text')}</div>
        <div className="time">{time?`${time.getHours()}:${fix2(time.getMinutes())}:${fix2(time.getSeconds())}`:'--'}</div>
      </div>
    </div>);
}

const fix2 = (num) => (num>=10?`${num}`:`0${num}`);

export default ChatBox;
