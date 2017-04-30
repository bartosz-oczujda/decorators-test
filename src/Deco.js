import { Test } from "./Test";
import { ReplaceTest } from "./ReplaceTest";

export function decorate() {
    Test = ReplaceTest;
    //Test.prototype = Object.create(ReplaceTest.prototype);
}
