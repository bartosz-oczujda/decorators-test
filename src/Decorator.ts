import { ReplaceTest } from "./ReplaceTest";

function replacer<TFunction extends Function>(target: TFunction): TFunction {
    let newConstructor = ReplaceTest.prototype.constructor
    newConstructor.prototype = Object.create(ReplaceTest.prototype);
    return <TFunction>newConstructor;
}

export { replacer }