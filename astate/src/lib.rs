extern crate wasm_bindgen;
extern crate web_sys;
extern crate js_sys;

use wasm_bindgen::prelude::*;
use wasm_bindgen::JsValue;
use std::f64;
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
    fn deliver(messages: &js_sys::Array);
}

#[wasm_bindgen(module = "./Dictionary")]
pub extern {

    type Dictionary;

    #[wasm_bindgen(constructor)]
    fn new() -> Dictionary;

    #[wasm_bindgen(method, getter)]
    fn key(this: &Dictionary) -> String;
    #[wasm_bindgen(method, getter)]
    fn value(this: &Dictionary) -> String;
    #[wasm_bindgen(method, setter)]
    fn set_key(this: &Dictionary, key: String) -> Dictionary;
    #[wasm_bindgen(method, setter)]
    fn set_value(this: &Dictionary, value: String) -> Dictionary;
    #[wasm_bindgen(method)]
    fn toString(this: &Dictionary) -> String;
}


#[wasm_bindgen]
pub fn greet() {
    log("Hello from Rust!");
    log_u32(42);
    log_many("Logging", "many values!");
}

#[wasm_bindgen]
pub fn square(x: u32) -> u32 {
    let result: u32 = x * x;
    result
}

// -----------------------------------------------------------------------------

#[wasm_bindgen]
pub fn init_store() -> () {
    let message = js_sys::Map::new();
    message.set(&JsValue::from_str(&"author"), &JsValue::from_str(&"Luke".to_string()));
    message.set(&JsValue::from_str(&"time"), &JsValue::from_f64(1544637680516f64));
    message.set(&JsValue::from_str(&"text"), &JsValue::from_str(&"Morning master!".to_string()));
    let messages: js_sys::Array = js_sys::Array::new();
    messages.push(&message);
    deliver(&messages);
}

#[wasm_bindgen]
pub fn post_message(store: &js_sys::Array, msg: &str, author: &str, time: f64) -> () {
    log("post_message from Rust!");
    log_many(msg, author);
    log("post_message print messages!");

    let message = js_sys::Map::new();
    message.set(&JsValue::from_str(&"author"), &JsValue::from_str(author));
    message.set(&JsValue::from_str(&"time"), &JsValue::from_f64(time));
    message.set(&JsValue::from_str(&"text"), &JsValue::from_str(msg));

    store.push(&message);
    deliver(store);
}

// -----------------------------------------------------------------------------

// #[wasm_bindgen]
// pub fn timed(callback: &js_sys::Function) -> f64 {
//     let j_map = js_sys::Map::new();
//
//
//     let then = js_sys::Date::now();
//     let array = &js_sys::Array::new();
//     let jkey: String = "hello?".to_string();
//
//     j_map.set(&JsValue::from_str(&jkey), &JsValue::from_str(&"rustaceans".to_string()));
//
//     array.push(&j_map);
//     callback.apply(&JsValue::null(), array).unwrap();
//     let now = js_sys::Date::now();
//     now - then
// }
