import {CheckerAbstract} from "../CheckerAbstract";

const name = "type"
const description = "type"

export class TypeChecker extends CheckerAbstract {
    constructor(config:string[]|string) {
        super(config)
        this.name = name
        this.description = description
    }


    readonly format = "Cliquer sur les bonnes lettres."

}
