import { CheckerAbstract } from '../CheckerAbstract';
export declare class RationalChecker extends CheckerAbstract {
    constructor(config: string[] | string);
    get format(): string;
    checkValue(value: string): string;
}
