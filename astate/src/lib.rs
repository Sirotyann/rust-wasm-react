extern crate wasm_bindgen;
extern crate web_sys;
extern crate js_sys;

use wasm_bindgen::prelude::*;

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

//#[wasm_bindgen]
//pub fn subscribe(view: &str, fun: &?) {
//}

#[wasm_bindgen]
pub fn timed(callback: &js_sys::Function) -> f64 {
    let j_map = js_sys::Map::new();


    let then = js_sys::Date::now();
    let array = &js_sys::Array::new();
    let jkey: String = "hello?".to_string();

    j_map.set(&JsValue::from_str(&jkey), &JsValue::from_str(&"rustaceans".to_string()));

    array.push(&j_map);
    callback.apply(&JsValue::null(), array).unwrap();
    let now = js_sys::Date::now();
    now - then
}
