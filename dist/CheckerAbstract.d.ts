import { CheckerResult, CHECKERS } from './checker.config';
export declare abstract class CheckerAbstract {
    protected constructor(config?: string[] | string);
    protected _secondaryChecker: CheckerAbstract | null;
    get secondaryChecker(): CheckerAbstract | null;
    set secondaryChecker(value: CheckerAbstract | null);
    protected _config: string[];
    get config(): string[];
    set config(value: string[]);
    protected _type: CHECKERS | undefined;
    get type(): CHECKERS | undefined;
    set type(value: CHECKERS);
    protected _description: string;
    get description(): string;
    set description(value: string);
    protected _answer: string;
    get answer(): string;
    set answer(value: string);
    abstract get format(): string;
    check(expected: string, given: string): CheckerResult;
    checkFormat(value: string): string;
    checkValue(value: string): string;
}
