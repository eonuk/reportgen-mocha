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
		const title = obj !== undefined ? obj.title : '';
		let symbol = '-';
		const newline = operation.indexOf('end') >= 0 ? '\n' : '';

		// indents
		if (indent > 0) {
			this._level += indent;
			symbol = '>';
		}
		if (indent < 0) {
			this._level += indent;
			symbol = '<';
		}

		// logging
		this.logMsg(`${symbol} ${operation} :: ${title}${newline}`);

		/* case 'store':
			msg = `+ #${obj.id} store ${type}:`;
			msg += ` ${obj.title}`;
			msg += ` (${obj.duration}ms).`;
			if (obj.mpStats) {
				msg += ` stats: ${JSON.stringify(obj.mpStats)}`;
			}
			this.logMsg(msg);
			break; */
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
