import { CheckerAbstract } from '../CheckerAbstract';
export declare class CartesianChecker extends CheckerAbstract {
    #private;
    constructor(config: string[] | string);
    get format(): string;
    checkFormat(value: string): string;
    checkValue(value: string): string;
}
