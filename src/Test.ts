import { replacer } from "./Decorator"

//@replacer
class Test {
    constructor() {
        console.log("Test");
    }

    getNum() {
        return 1
    }
}

export { Test }