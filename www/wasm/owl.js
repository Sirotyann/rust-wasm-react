

const deliver = (messages) => {
    console.log("messages are delivered", messages);
    if(_callback) {
      _callback.call(null, messages);
    }
}

let _callback = null;

const subscribe = (callback) => {
  _callback = callback
}

export { deliver, subscribe };
