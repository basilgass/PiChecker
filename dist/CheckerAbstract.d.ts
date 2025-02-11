import { CheckerResult } from './checker.config';
export declare abstract class CheckerAbstract {
    protected constructor(config?: string[] | string);
    protected _secondaryChecker: CheckerAbstract | null;
    get secondaryChecker(): CheckerAbstract | null;
    set secondaryChecker(value: CheckerAbstract | null);
    protected _config: string[];
    get config(): string[];
    set config(value: string[]);
    protected _name: string;
    get name(): string;
    set name(value: string);
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
