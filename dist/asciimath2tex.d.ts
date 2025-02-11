export default class AsciiMathParser {
    constructor();
    setup_symbols(): void;
    sort_symbols(): void;
    error(message: any, pos: any): void;
    literal(token: any): {
        tex: any;
        pos: any;
        end: any;
        ttype: string;
    } | undefined;
    longest(matches: any): any;
    escape_text(str: any): any;
    input(str: any): void;
    source(pos?: number, end?: any): any;
    eof(pos?: number): boolean;
    unbracket(tok: any): any;
    parse(str: any): string;
    consume(pos?: number): {
        tex: string;
        exprs: any[];
    };
    strip_space(pos?: number): number;
    match(re: any, pos: any): {
        token: any;
        pos: any;
        match: any;
        end: any;
        ttype: string;
    } | undefined;
    exact(str: any, pos: any): {
        token: any;
        pos: any;
        end: any;
        ttype: string;
    } | undefined;
    expression_list(pos?: number): any;
    expression(pos?: number): any;
    negative_expression(pos?: number): any;
    intermediate_or_fraction(pos?: number): any;
    intermediate(pos?: number): any;
    subsup(pos?: number): {
        tex: string;
        pos: number;
        end: number;
        ttype: string;
        sub: any;
        sup: any;
    } | undefined;
    simple(pos?: number): any;
    negative_simple(pos?: number): any;
    matrix(pos?: number): any;
    matrix_contents(pos?: number, leftright?: boolean): any;
    matrix_cell(pos?: number): any;
    bracketed_expression(pos?: number): any;
    mid_expression(l: any, middle: any, pos: any): {
        tex: string;
        pos: any;
        end: any;
        left: any;
        right: any;
        middle: {
            tex: string;
            exprs: any[];
            pos: any;
            end: any;
            ttype: string;
        };
    } | undefined;
    right_bracket(pos?: number): {
        tex: any;
        pos: number;
        end: any;
        asciimath: any;
        def: any;
        ttype: string;
    } | undefined;
    left_bracket(pos?: number): {
        tex: any;
        pos: number;
        end: any;
        asciimath: any;
        ttype: string;
    } | undefined;
    leftright_bracket(pos: number | undefined, position: any): {
        tex: any;
        pos: number;
        end: any;
        ttype: string;
        def?: undefined;
    } | {
        tex: any;
        pos: number;
        end: any;
        ttype: string;
        def: any;
    } | undefined;
    text(pos?: number): {
        tex: string;
        pos: number;
        end: any;
        ttype: string;
        text: any;
    } | undefined;
    binary(pos?: number): {
        tex: string;
        pos: number;
        end: any;
        ttype: string;
        op: any;
        arg1: any;
        arg2: any;
    } | undefined;
    unary(pos?: number): any;
    constant(pos?: number): any;
    name(pos?: number): {
        tex: any;
        pos: any;
        end: any;
        ttype: string;
    } | undefined;
    greek(pos?: number): {
        tex: string;
        pos: number;
        end: any;
        ttype: string;
    } | undefined;
    number(pos?: number): {
        tex: any;
        pos: any;
        end: any;
        ttype: string;
    } | undefined;
    other_constant(pos?: number): {
        tex: string;
        pos: any;
        end: any;
        ttype: string;
    } | undefined;
    arbitrary_constant(pos?: number): {
        tex: any;
        pos: number;
        end: number;
        ttype: string;
    } | undefined;
}
