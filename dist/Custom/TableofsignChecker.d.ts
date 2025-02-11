import { CheckerAbstract } from '../CheckerAbstract';
export declare class TableofsignChecker extends CheckerAbstract {
    private grows;
    private coords;
    constructor(config: string[] | string);
    get format(): string;
    checkValue(value: string): string;
}
