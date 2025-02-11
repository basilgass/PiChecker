import {CheckerAbstract} from "../CheckerAbstract";

const name = "input"
const description = `input,[paramètres]

**paramètres**
- checker
`

export class InputChecker extends CheckerAbstract {
	constructor(config?: string[] | string) {
		super(config)
		this.name = name
		this.description = description
	}


	readonly format = "Réponse textuelle"
}
