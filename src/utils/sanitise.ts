import { Suite } from 'mocha';

type RGSuite = {
	title: string;
};

/**
 * Sanitise
 */
export default class Sanitise {
	static cleanSuite(suite: Mocha.Suite): RGSuite {
		/* const passingTests = [];
        const failingTests = [];
        const pendingTests = [];
        const skippedTests = []; */

		/* const beforeHooks = _.map(
           [].concat(suite._beforeAll, suite._beforeEach),
           test => cleanTest(test, config)
        );
        const afterHooks = _.map(
           [].concat(suite._afterAll, suite._afterEach),
           test => cleanTest(test, config)
        ); */

		// extract hooks id numbers
		/*const beforeHookIds = suite._beforeAll
            .concat(suite._beforeEach)
            .map(hook => hook.mpId);
        const afterHookIds = suite._afterAll
            .concat(suite._afterEach)
            .map(hook => hook.mpId);
        // extract test id numbers
        const testIds = suite.tests.map(test => test.mpId);
        // extract suite id numbers
        const suiteIds = suite.suites.map(suit => suit.mpId);*/

		// store hooks, tests and suites in one array, sorted in creation order
		/* const childrenIds: any[] = []
			.concat(suite.beforeAll)
			.concat(suite.beforeEach)
			.concat(suite.afterAll)
			.concat(suite.afterEach)
			.concat(suite.tests)
			.concat(suite.suites)
			.map(item => item.mpId)
			.sort((a: number, b: number) => a > b); */

		// console.log(beforeHookIds, afterHookIds, testIds, suiteIds);
		// console.log(childrenIds);
		/*
        const tests = _.map(suite.tests, test => {
            const cleanedTest = cleanTest(test, config);
            duration += test.duration;
            if (cleanedTest.state === "passed")
                passingTests.push(cleanedTest.uuid);
            if (cleanedTest.state === "failed")
                failingTests.push(cleanedTest.uuid);
            if (cleanedTest.pending) pendingTests.push(cleanedTest.uuid);
            if (cleanedTest.skipped) skippedTests.push(cleanedTest.uuid);
            return cleanedTest;
        });
        totalTestsRegistered.total += tests.length;*/

		const obj = {
			mpType: 'suite',
			// uuid: uuid.v4(),
			title: suite.title, // stripAnsi(suite.title),
			// fullFile: suite.file || "",
			file: suite.file ? suite.file.replace(process.cwd(), '') : '',

			/*beforeHooks: beforeHookIds,
            afterHooks: afterHookIds,
            tests: testIds,
            suites: suiteIds,*/
			// children: childrenIds,

			// passes: passingTests,
			// failures: failingTests,
			// pending: pendingTests,
			// skipped: skippedTests,
			//////// duration: suite.duration,
			root: suite.root,
			// rootEmpty: suite.root && tests.length === 0,
			_timeout: suite.timeout
		};

		/*const isEmptySuite =
           _.isEmpty(cleaned.suites) &&
           _.isEmpty(cleaned.tests) &&
           _.isEmpty(cleaned.beforeHooks) &&
           _.isEmpty(cleaned.afterHooks);
		return !isEmptySuite && cleaned;*/

		const s: RGSuite = {
			title: 'fsfdfs'
		};

		return s;
	}

	/**
	 * clean hook
	 */
	static cleanHook(hook: Mocha.Hook) {
		const obj = {
			mpType: 'hook'
		};
		return obj;
	}

	/**
	 * clean test
	 */
	static cleanTest(test: Mocha.Test): object {
		// let code = test.body;
		/* istanbul ignore next */
		// if (code === undefined) {
		//     /* istanbul ignore next: test.fn exists prior to mocha 2.4.0 */
		//     code = test.fn ? test.fn.toString() : "";
		// }
		// test.ctx;

		const obj = {
			mpType: 'test',
			mpState: test.pending ? 'skipped' : test.state,
			title: test.title, // stripAnsi(test.title),
			fullTitle: test.fullTitle, // _.isFunction(test.fullTitle)
			// ? stripAnsi(test.fullTitle())
			// : /* istanbul ignore next */ stripAnsi(test.title),
			timedOut: test.timedOut,
			duration: test.duration || 0,
			// state: test.state,
			speed: test.speed,
			// pass: test.state === 'passed',
			// fail: test.state === 'failed',
			// pending: test.pending,
			// context: stringify(test.context, null, 2),
			// code: code, // code && cleanCode(code),
			err: test.err // (test.err && normalizeErr(test.err, config)) || {},
			// isRoot: test.parent && test.parent.root,
			// uuid: test.uuid || /* istanbul ignore next: default */ uuid.v4(),
			// parentUUID: test.parent && test.parent.uuid,
			// isHook: test.type === 'hook',
		};

		return obj;
	}

	// end-class
}
