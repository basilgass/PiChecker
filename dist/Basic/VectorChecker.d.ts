import { CheckerAbstract } from '../CheckerAbstract';
export declare class VectorChecker extends CheckerAbstract {
    private _colinear;
    constructor(config?: string[] | string);
    get format(): string;
    checkFormat(value: string): string;
    checkValue(value: string): string;
}
