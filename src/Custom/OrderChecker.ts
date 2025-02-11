import {CheckerAbstract} from "../CheckerAbstract";

const name = "order"
const description = `order,[paramètres]

**paramètres**
aucun
`

export class OrderChecker extends CheckerAbstract {

	constructor(config: string[] | string) {
		super(config)
		this.name = name
		this.description = description
	}

	readonly format = ""

}
