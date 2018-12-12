extern crate wasm_bindgen;
extern crate web_sys;
extern crate js_sys;

use wasm_bindgen::prelude::*;
use wasm_bindgen::JsValue;

//-----------------------------------------------------------------------------

#[wasm_bindgen]
extern {
    fn alert(s: &str);

    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);

    #[wasm_bindgen(js_namespace = console, js_name = log)]
    fn log_u32(a: u32);

    #[wasm_bindgen(js_namespace = console, js_name = log)]
    fn log_many(a: &str, b: &str);
}

#[wasm_bindgen(module = "./owl")]
extern "C" {
    fn deliver(message: &str, data: &str);
}

#[wasm_bindgen]
pub fn greet() {
    // alert("Hello, it is a wasm-taste!");
    log("Hello from Rust!");
    log_u32(42);
    log_many("Logging", "many values!");
}

#[wasm_bindgen]
pub fn square(x: u32) -> u32 {
    let result: u32 = x * x;
    let sres: String = result.to_string();
    deliver("a message", &sres);
    result
}

// -----------------------------------------------------------------------------

#[wasm_bindgen]
pub fn init_store() -> js_sys::Map {
    js_sys::Map::new()
}

#[wasm_bindgen]
pub fn subscribe(store: &js_sys::Map, callback: &js_sys::Function) -> () {
    store.set(&JsValue::from_str("callback"), callback);
}

#[wasm_bindgen]
pub fn post_message(store: &js_sys::Map, msg: &str, author: &str) -> () {
    let messageMap: js_sys::Array = js_sys::Array::from(
                                        &store.get(&JsValue::from_str("messageList"))
                                    );
    let newMessageWrapped: js_sys::Array = js_sys::Array::of1(&JsValue::from_str(msg));
    let newMessageMap: js_sys::Array = messageMap.concat(&newMessageWrapped);
    store.set(&JsValue::from_str(&"messageList"), &newMessageMap);

    let callback: js_sys::Function = js_sys::Function::from(
                                            &store.get(&JsValue::from_str(&"callback"))
                                     );
    callback.apply(&JsValue::null());
}

// -----------------------------------------------------------------------------

#[wasm_bindgen]
pub fn timed(callback: &js_sys::Function) -> f64 {
    let then = js_sys::Date::now();
    let array = &js_sys::Array::new();
    let refr: String = "hello?".to_string();
    array.push(&JsValue::from_str(&refr));
    callback.apply(&JsValue::null(), array).unwrap();
    let now = js_sys::Date::now();
    now - then
}

