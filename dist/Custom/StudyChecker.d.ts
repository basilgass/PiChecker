import { CheckerAbstract } from '../CheckerAbstract';
export declare class StudyChecker extends CheckerAbstract {
    constructor(config: string[] | string);
    readonly format = "Tracer le graphe";
    checkValue(value: string): string;
}
