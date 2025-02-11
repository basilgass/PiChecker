import {checkerNameToEnum, type CheckerResult, CHECKERS} from "./checker.config";
import  {type CheckerAbstract} from "./CheckerAbstract";
import {
    CartesianChecker,
    CoordChecker,
    EquationChecker,
    ExactChecker,
    ExpChecker,
    FractionChecker,
    FunctionChecker,
    InputChecker,
    LogChecker,
    NumberChecker,
    PolynomChecker,
    PrimitiveChecker,
    RationalChecker,
    ScientificChecker, SolutionChecker, StringChecker, VectorChecker
} from "./Basic";
import {OrderChecker, QcmChecker, StudyChecker, TableofsignChecker, TypeChecker} from "./Custom";

export * from './Basic'
export * from './Custom'

export class PiChecker {
    #checker: CheckerAbstract

    constructor(config: string) {
        // Split the config to get the main checker and the sub checker
        // name,a,b,c,[checker:name,d,e,f,g]

        const [mainCheckerConfig, subCheckerConfig] = config.split("checker:")


        this.#checker = this.#loadCheckerTo(mainCheckerConfig)
        if(subCheckerConfig !== undefined){
            this.#checker.secondaryChecker = this.#loadCheckerTo(subCheckerConfig)
        }
    }


    get checker(): CheckerAbstract {
        return this.#checker;
    }

    set checker(value: CheckerAbstract) {
        this.#checker = value;
    }

    check(value: string, answer: string): CheckerResult {
        return this.#checker.check(value, answer)
    }

    #parseConfig(config: string): { checker: CHECKERS, options: string[] } {
        const [checker, ...options] = config.split(',')
        return {checker: checkerNameToEnum(checker), options: options.filter(o => o !== "")}
    }


    #loadCheckerTo(config: string): CheckerAbstract {
        const {checker, options} = this.#parseConfig(config)
        const checkerClass = this.#loadChecker(checker)

        if (checkerClass === null) {
            throw new Error(`Checker ${checker} not found`)
        }

        return new checkerClass(options)
    }

    #loadChecker(checker: CHECKERS): (new (...args: any[]) => CheckerAbstract) | null {
        switch (checker) {
            case CHECKERS.CARTESIAN:
                return CartesianChecker
            case CHECKERS.COORDINATES:
                return CoordChecker
            case CHECKERS.EQUATION:
                return EquationChecker
            case CHECKERS.EXACT:
                return ExactChecker
            case CHECKERS.EXPONENTIAL:
                return ExpChecker
            case CHECKERS.FRACTION:
                return FractionChecker
            case CHECKERS.FUNCTION:
                return FunctionChecker
            case CHECKERS.INPUT:
                return InputChecker
            case CHECKERS.LOGARITHM:
                return LogChecker
            case CHECKERS.NUMBER:
                return NumberChecker
            case CHECKERS.POLYNOMIAL:
                return PolynomChecker
            case CHECKERS.PRIMITIVE:
                return PrimitiveChecker
            case CHECKERS.RATIONAL:
                return RationalChecker
            case CHECKERS.SCIENTIFIC:
                return ScientificChecker
            case CHECKERS.SOLUTION:
                return SolutionChecker
            case CHECKERS.STRING:
                return StringChecker
            case CHECKERS.VECTOR:
                return VectorChecker

            case CHECKERS.ORDER:
                return OrderChecker
            case CHECKERS.QCM:
                return QcmChecker
            case CHECKERS.STUDY:
                return StudyChecker
            case CHECKERS.TABLE_OF_SIGNS:
                return TableofsignChecker
            case CHECKERS.TYPE:
                return TypeChecker
        }

        return null
    }
}