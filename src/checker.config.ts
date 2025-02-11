export interface CheckerResult {
    result: boolean,
    message: string,
    index?: number
}

export enum CHECKERS {
    // Basic checkers
    CARTESIAN = "cartesian",
    COORDINATES = "coord",
    EQUATION = "equation",
    EXACT = "exact",
    EXPONENTIAL = "exp",
    FRACTION = "fraction",
    FUNCTION = "function",
    INPUT = "input",
    LOGARITHM = "log",
    NUMBER = "number",
    POLYNOMIAL = "polynom",
    PRIMITIVE = "primitive",
    RATIONAL = "rational",
    SCIENTIFIC = "scientific",
    SOLUTION = "solution",
    STRING = "string",
    VECTOR = "vector",

    // Custom checkers
    ORDER = "order",
    QCM = "qcm",
    STUDY = "study",
    TABLE_OF_SIGNS = "tos",
    TYPE = "type"
}

export function checkerNameToEnum(name: string): CHECKERS {
    switch (name) {
        case "exact":
            return CHECKERS.EXACT
        case "polynom":
            return CHECKERS.POLYNOMIAL
        case "rational":
            return CHECKERS.RATIONAL
        case "equ":
        case "equation":
            return CHECKERS.EQUATION
        case "cart":
        case "cartesian":
            return CHECKERS.CARTESIAN
        case "fn":
        case "function":
            return CHECKERS.FUNCTION
        case "nb":
        case "number":
            return CHECKERS.NUMBER
        case "fr":
        case "frac":
        case "fraction":
            return CHECKERS.FRACTION
        case "scn":
            return CHECKERS.SCIENTIFIC
        case "tos":
            return CHECKERS.TABLE_OF_SIGNS
        case "study":
            return CHECKERS.STUDY
        case "sol":
        case "solution":
            return CHECKERS.SOLUTION
        case "coord":
            return CHECKERS.COORDINATES
        case "vector":
            return CHECKERS.VECTOR
        case "log":
            return CHECKERS.LOGARITHM
        case "exp":
            return CHECKERS.EXPONENTIAL
        case "primitive":
            return CHECKERS.PRIMITIVE
        default:
            return CHECKERS.STRING
    }

}