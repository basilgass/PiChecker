import { CheckerAbstract } from '../CheckerAbstract';
export declare class ExactChecker extends CheckerAbstract {
    private isSoft;
    constructor(config?: string[] | string);
    readonly format = "r\u00E9ponse sous forme exacte, r\u00E9duite";
    checkValue(value: string): string;
}
