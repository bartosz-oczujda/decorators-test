import { TestReplacer } from "./TestReplacer";

function replacer<TFunction extends Function>(target: TFunction): TFunction {
    let newConstructor = <Function> TestReplacer
    return <TFunction>newConstructor;
}

export { replacer }