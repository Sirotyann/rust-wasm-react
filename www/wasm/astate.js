/* tslint:disable */
import * as wasm from './astate_bg';
import { deliver } from './owl';

let cachedTextDecoder = new TextDecoder('utf-8');

let cachegetUint8Memory = null;
function getUint8Memory() {
    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory;
}

function getStringFromWasm(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));
}

export function __wbg_log_8a4c28ef7d780f2c(arg0, arg1) {
    let varg0 = getStringFromWasm(arg0, arg1);
    console.log(varg0);
}

export function __wbg_log_47b183b218cfd97f(arg0) {
    console.log(arg0);
}

export function __wbg_log_1a7ed2ec0bcd496b(arg0, arg1, arg2, arg3) {
    let varg0 = getStringFromWasm(arg0, arg1);
    let varg2 = getStringFromWasm(arg2, arg3);
    console.log(varg0, varg2);
}

const heap = new Array(32);

heap.fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

export function __wbg_deliver_775ed8352db12905(arg0) {
    deliver(getObject(arg0));
}
/**
* @returns {void}
*/
export function greet() {
    return wasm.greet();
}

/**
* @param {number} arg0
* @returns {number}
*/
export function square(arg0) {
    return wasm.square(arg0);
}

/**
* @returns {void}
*/
export function init_store() {
    return wasm.init_store();
}

let stack_pointer = 32;

function addBorrowedObject(obj) {
    if (stack_pointer == 1) throw new Error('out of js stack');
    heap[--stack_pointer] = obj;
    return stack_pointer;
}

let cachedTextEncoder = new TextEncoder('utf-8');

let WASM_VECTOR_LEN = 0;

function passStringToWasm(arg) {

    const buf = cachedTextEncoder.encode(arg);
    const ptr = wasm.__wbindgen_malloc(buf.length);
    getUint8Memory().set(buf, ptr);
    WASM_VECTOR_LEN = buf.length;
    return ptr;
}
/**
* @param {any} arg0
* @param {string} arg1
* @param {string} arg2
* @param {number} arg3
* @returns {void}
*/
export function post_message(arg0, arg1, arg2, arg3) {
    const ptr1 = passStringToWasm(arg1);
    const len1 = WASM_VECTOR_LEN;
    const ptr2 = passStringToWasm(arg2);
    const len2 = WASM_VECTOR_LEN;
    try {
        return wasm.post_message(addBorrowedObject(arg0), ptr1, len1, ptr2, len2, arg3);

    } finally {
        heap[stack_pointer++] = undefined;
        wasm.__wbindgen_free(ptr1, len1 * 1);
        wasm.__wbindgen_free(ptr2, len2 * 1);

    }

}

/**
* @param {any} arg0
* @returns {number}
*/
export function timed(arg0) {
    try {
        return wasm.timed(addBorrowedObject(arg0));

    } finally {
        heap[stack_pointer++] = undefined;

    }

}

let heap_next = heap.length;

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

export function __wbg_new_208e1332becb0e22() {
    return addHeapObject(new Array());
}

export function __wbg_push_797a2105ee49f111(arg0, arg1) {
    return getObject(arg0).push(getObject(arg1));
}

let cachegetUint32Memory = null;
function getUint32Memory() {
    if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== wasm.memory.buffer) {
        cachegetUint32Memory = new Uint32Array(wasm.memory.buffer);
    }
    return cachegetUint32Memory;
}

export function __wbg_apply_06baec4c607d06cd(arg0, arg1, arg2, exnptr) {
    try {
        return addHeapObject(getObject(arg0).apply(getObject(arg1), getObject(arg2)));
    } catch (e) {
        const view = getUint32Memory();
        view[exnptr / 4] = 1;
        view[exnptr / 4 + 1] = addHeapObject(e);

    }
}

export function __wbg_new_f3a9162fd42082aa() {
    return addHeapObject(new Map());
}

export function __wbg_set_0e745d1613607024(arg0, arg1, arg2) {
    return addHeapObject(getObject(arg0).set(getObject(arg1), getObject(arg2)));
}

export function __wbg_now_7e59c3475b182c97() {
    return Date.now();
}

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

export function __wbindgen_object_drop_ref(i) { dropObject(i); }

export function __wbindgen_string_new(p, l) {
    return addHeapObject(getStringFromWasm(p, l));
}

export function __wbindgen_number_new(i) { return addHeapObject(i); }

export function __wbindgen_number_get(n, invalid) {
    let obj = getObject(n);
    if (typeof(obj) === 'number') return obj;
    getUint8Memory()[invalid] = 1;
    return 0;
}

export function __wbindgen_is_null(idx) {
    return getObject(idx) === null ? 1 : 0;
}

export function __wbindgen_is_undefined(idx) {
    return getObject(idx) === undefined ? 1 : 0;
}

export function __wbindgen_boolean_get(i) {
    let v = getObject(i);
    if (typeof(v) === 'boolean') {
        return v ? 1 : 0;
    } else {
        return 2;
    }
}

export function __wbindgen_is_symbol(i) {
    return typeof(getObject(i)) === 'symbol' ? 1 : 0;
}

export function __wbindgen_string_get(i, len_ptr) {
    let obj = getObject(i);
    if (typeof(obj) !== 'string') return 0;
    const ptr = passStringToWasm(obj);
    getUint32Memory()[len_ptr / 4] = WASM_VECTOR_LEN;
    return ptr;
}

export function __wbindgen_throw(ptr, len) {
    throw new Error(getStringFromWasm(ptr, len));
}

