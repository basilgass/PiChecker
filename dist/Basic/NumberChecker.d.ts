import { CheckerAbstract } from '../CheckerAbstract';
export declare class NumberChecker extends CheckerAbstract {
    private readonly _isStrict;
    constructor(config?: string[] | string);
    get format(): string;
    checkFormat(value: string): string;
    checkValue(value: string): string;
}
