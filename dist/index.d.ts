import { CheckerResult } from './checker.config';
import { CheckerAbstract } from './CheckerAbstract';
export * from './Basic';
export * from './Custom';
export declare class PiChecker {
    #private;
    constructor(config: string);
    get checker(): CheckerAbstract;
    set checker(value: CheckerAbstract);
    check(value: string, answer: string): CheckerResult;
}
