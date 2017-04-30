import { Test } from "./src/Test";
import { TestUser } from "./src/TestUser";

import { decorate } from "./src/Deco";

console.log("START");

decorate();

let test = new Test();
console.log(test.getNum());

let tuser = new TestUser();
console.log(tuser.test.getNum());
