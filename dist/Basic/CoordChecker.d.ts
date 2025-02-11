import { CheckerAbstract } from '../CheckerAbstract';
export declare class CoordChecker extends CheckerAbstract {
    constructor(config?: string[] | string);
    readonly format = "Coordonn\u00E9es d'un point sous la forme \\((a;b)\\)";
    checkFormat(value: string): string;
    checkValue(value: string): string;
}
