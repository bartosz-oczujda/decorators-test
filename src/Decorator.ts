import { ReplaceTest } from "./ReplaceTest";

function replacer<TFunction extends Function>(target: TFunction): TFunction {
    let newConstructor = <Function> ReplaceTest
    return <TFunction>newConstructor;
}

export { replacer }