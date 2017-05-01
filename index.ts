/// <reference path="./src/Test.d.ts" />

import { Test } from "./src/Test";
import { TestSubclass } from "./src/TestSubclass";
import { TestReplacer } from "./src/TestReplacer";
import { replace } from "./src/Replacer";

replace();

//I want to replace this class with TestReplacer
//This is what the replace() method is doing
let test = new Test();
console.log(test.getNum());

//we can add new props and methods, but casting is necessary
//augmenting with type definitions does not help
console.log((test as TestReplacer).getStr()); 

let tuser = new TestSubclass();
console.log(tuser.getNum());

//ERROR: does not work with inheritance, prototype chain points to the original superclass - Test instead of ReplaceTest
console.log((tuser as TestReplacer).getStr()); 
