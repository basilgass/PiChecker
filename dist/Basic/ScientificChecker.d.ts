import { CheckerAbstract } from '../CheckerAbstract';
export declare class ScientificChecker extends CheckerAbstract {
    private digits;
    constructor(config: string[] | string);
    get format(): string;
    checkValue(value: string): string;
}
