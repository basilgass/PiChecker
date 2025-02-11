import { CheckerAbstract } from './CheckerAbstract';
import { CheckerResult } from './checker.config';
export declare class PiChecker {
    #private;
    constructor(config: string);
    get checker(): CheckerAbstract;
    set checker(value: CheckerAbstract);
    check(value: string, answer: string): CheckerResult;
}
