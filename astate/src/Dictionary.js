class Dictionary {
    constructor() {
      this._key = '';
      this._value = '';
    }

    get key() {
        return this._key;
    }

    set key(k) {
        return this._key = k;
    }

    get value() {
        return this._value;
    }

    set value(v) {
        return this._value = v;
    }

    build(key, value){
        this.key = key;
        this.value = value;
        return this;
    }

    toString() {
        return `${this._key}:${this._value}`;
    }
}

export { Dictionary };
