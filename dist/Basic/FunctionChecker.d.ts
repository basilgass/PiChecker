import { CheckerAbstract } from '../CheckerAbstract';
export declare class FunctionChecker extends CheckerAbstract {
    private isDevelopped;
    constructor(config: string[] | string);
    get format(): string;
    checkValue(value: string): string;
}
