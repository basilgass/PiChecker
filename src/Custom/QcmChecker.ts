import {CheckerAbstract} from "../CheckerAbstract";

const name = "qcm"
const description = "qcm,[paramètres]"

export class QcmChecker extends CheckerAbstract{
	readonly format = ""

	constructor(config: string[]|string){
		super(config)
		this.name = name
		this.description = description
	}

}
