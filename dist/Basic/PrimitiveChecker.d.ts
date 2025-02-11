import { CheckerAbstract } from '../CheckerAbstract';
export declare class PrimitiveChecker extends CheckerAbstract {
    constructor(config?: string[] | string);
    readonly format = "primitive d'une fonction";
    checkValue(value: string): string;
}
