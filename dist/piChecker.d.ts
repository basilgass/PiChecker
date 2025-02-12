import { CheckerAbstract } from './CheckerAbstract';
import { CheckerResult, CHECKERS } from './checker.config';
type CheckerClass = (new (...args: any[]) => CheckerAbstract);
export declare function checkersList(): Record<CHECKERS, CheckerClass>;
export declare class PiChecker {
    #private;
    constructor(config?: string);
    get checker(): CheckerAbstract;
    set checker(value: CheckerAbstract);
    get answer(): string;
    get format(): string;
    get description(): string;
    get secondaryChecker(): CheckerAbstract | null;
    set secondaryChecker(value: CheckerAbstract);
    check(value: string, answer: string): CheckerResult;
}
export {};
