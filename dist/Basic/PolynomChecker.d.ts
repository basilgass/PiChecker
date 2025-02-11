import { CheckerAbstract } from '../CheckerAbstract';
export declare class PolynomChecker extends CheckerAbstract {
    constructor(config: string[] | string);
    get format(): string;
    checkFormat(value: string): string;
    checkValue(value: string): string;
}
