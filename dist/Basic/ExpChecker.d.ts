import { CheckerAbstract } from '../CheckerAbstract';
export declare class ExpChecker extends CheckerAbstract {
    constructor(config?: string[] | string);
    readonly format = "polyn\u00F4me avec des exponentielles <br/>\\((x-3)e^{x^2-3}\\)";
    checkValue(value: string): string;
}
