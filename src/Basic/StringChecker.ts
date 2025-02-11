import {CheckerAbstract} from "../CheckerAbstract";

const name = "string"
const description = "string"

export class StringChecker extends CheckerAbstract {
	constructor(config?: string[] | string) {
		super(config)
		this.name = name
		this.description = description
	}

	readonly format = "réponse textuelle"

}
