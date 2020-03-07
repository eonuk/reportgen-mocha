'use strict';

import { expect } from 'chai';

/**
 * Calculator
 */
class Calculator {
	add(a:number, b:number) {
		return a+b;
	}

	subtract(a:number, b:number) {
		return a+b; // DEFECT!
	}

	multiply(a:number, b:number) {
		return a*b;
	}
}

/**
 * TEST
 */
describe('Calculator Operations', () => {
	let calculator: Calculator;

	before('before hook', () => {
		calculator = new Calculator();
	});

	describe('Addition Operations', () => {
		it('add two integers', () => {
			const result = calculator.add(14, 3);
			expect(result).to.equal(17);
		});

		it('add two floats', () => {
			const result = calculator.add(10.7, 6.2);
			expect(result).to.equal(16.9);
		});
	});

	describe('Subtraction Operations', () => {
		it('add two integers', () => {
			const result = calculator.subtract(14, 3);
			expect(result).to.equal(11);
		});

		it('add two floats', () => {
			const result = calculator.subtract(10.7, 6.2);
			expect(result).to.equal(4.5);
		});
	});

	after('after hook', () => {

	});
});
