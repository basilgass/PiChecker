import { CheckerAbstract } from '../CheckerAbstract';
export declare class FractionChecker extends CheckerAbstract {
    private expectReduced;
    constructor(config?: string[] | string);
    get format(): string;
    checkFormat(value: string): string;
    checkValue(value: string): string;
}
