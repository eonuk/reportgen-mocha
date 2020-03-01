/**
 * Debug class to the console
 */
export default class Debug {
	private level: number;

	constructor() {
		this.level = 0;
	}

	incrementLevel() {
		this.level++;
	}

	decrementLevel() {
		this.level--;
	}

	/**
	 * @member log logs an operation
	 * @param {string} operation what kind of operation was done
	 * @param {*} obj the data object
	 * @param {string} type the type of the data object
	 */
	public log(operation: string, obj: any, type: string) {
		let msg;
		switch (operation) {
			case 'start':
				this.logMsg(`> start ${type}: ${obj.title}`);
				break;
			case 'end':
				this.logMsg(`< end ${type}: ${obj.title}`);
				break;
			case 'store':
				msg = `+ #${obj.id} store ${type}:`;
				msg += ` ${obj.title}`;
				msg += ` (${obj.duration}ms).`;
				if (obj.mpStats) {
					msg += ` stats: ${JSON.stringify(obj.mpStats)}`;
				}
				this.logMsg(msg);
				break;
		}
	}

	// ---------------------------------------------------
	// PRIVATE

	private get indent() {
		return '  '.repeat(this.level);
	}

	private logMsg(msg: string) {
		console.log(`\u001b[38;5;3m${this.indent}${msg}\u001b[0m`);
	}
}
