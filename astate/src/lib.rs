extern crate wasm_bindgen;
extern crate web_sys;

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
