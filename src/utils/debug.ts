import Mocha from 'mocha';

/**
 * Debug class to the console
 */
export default class Debug {
	// private
	private _level: number;

	constructor() {
		this._level = 0;
	}

	/**
	 * log information to console
	 */
	public log(
		operation: string,
		obj?: Mocha.Suite | Mocha.Hook | Mocha.Test,
		indent = 0
	) {
		// string setup for loggin
		const title = obj !== undefined ? obj.title : '';
		let symbol = '-';

		// symbol
		symbol = indent !== 0 ? "*" : symbol;

		// indenting level inward
		this._level += indent < 0 ? indent : 0;

		// logging
		this.logMsg(`${symbol} ${operation} :: ${title}`);

		// indent level outward
		this._level += indent > 0 ? indent : 0;
	}

	// ---------------------------------------------------
	// PRIVATE

	private get indent() {
		return '  '.repeat(this._level);
	}

	private logMsg(msg: string) {
		console.log(`\u001b[38;5;3m${this.indent}${msg}\u001b[0m`);
	}
}
