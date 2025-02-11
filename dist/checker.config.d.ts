export interface CheckerResult {
    result: boolean;
    message: string;
    index?: number;
}
export declare enum CHECKERS {
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
    ORDER = "order",
    QCM = "qcm",
    STUDY = "study",
    TABLE_OF_SIGNS = "tos",
    TYPE = "type"
}
export declare function checkerNameToEnum(name: string): CHECKERS;
