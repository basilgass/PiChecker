import { CheckerAbstract } from '../CheckerAbstract';
export declare class EquationChecker extends CheckerAbstract {
    private isCentreRayon;
    private isReduced;
    private isCanonical;
    private isSommet;
    constructor(config: string[] | string);
    get format(): string;
    checkFormat(value: string): string;
    checkValue(value: string): string;
}
