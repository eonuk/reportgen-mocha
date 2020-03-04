'use strict';

import { expect } from 'chai';

class Calculator {
	add(a:number, b:number) {
		return a+b;
	}

	multiply(a:number, b:number) {
		return a*b;
	}
}


describe('Describe 1', () => {
	let calculator: Calculator;

	before('before hook', () => {
		calculator = new Calculator();
	});

	it('step 1', () => {
		const result = calculator.add(3,6);
		expect(result).to.equal(9);
	});

	it('step 2', () => {
		const result = calculator.multiply(3,6);
		expect(result).to.equal(19);
	});

	it('step 3', () => {

	});

	after('after hook', () => {

	});
});
