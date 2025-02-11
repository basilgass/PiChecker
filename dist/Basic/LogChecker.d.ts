import { CheckerAbstract } from '../CheckerAbstract';
export declare class LogChecker extends CheckerAbstract {
    constructor(config?: string[] | string);
    readonly format = "r\u00E9ponse sous la forme \\(\\log(a)-3/5\\)";
    checkFormat(value: string): string;
    checkValue(value: string): string;
}
