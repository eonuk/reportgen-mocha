//const Base = require('mocha/lib/reporters/base');
const Spec = require('mocha/lib/reporters/spec');
import Mocha from 'mocha';
import Debug from './utils/debug';



/**
 * @class
 * @summary this reporter outputs test results, indenting two spaces per suite
 */
class ReportGenReporter {
	private debug: Debug;

	constructor(runner: Mocha.Runner) {
        this.debug = new Debug();
        //const stats = runner.stats;

        // data store for test results
        //this._dataStore = new DataStore();

        // Spec Reporter for the console
        new Spec(runner);

        // event listeners
        runner.once(Mocha.Runner.constants.EVENT_RUN_BEGIN, this._eventRunBegin.bind(this));
        runner.once(Mocha.Runner.constants.EVENT_RUN_END, this._eventRunEnd.bind(this));
        runner.on(Mocha.Runner.constants.EVENT_SUITE_BEGIN, this._eventSuiteBegin.bind(this));
        runner.on(Mocha.Runner.constants.EVENT_SUITE_END, this._eventSuiteEnd.bind(this));
        runner.on(Mocha.Runner.constants.EVENT_HOOK_BEGIN, this._eventHookBegin.bind(this));
        runner.on(Mocha.Runner.constants.EVENT_HOOK_END, this._eventHookEnd.bind(this));
        runner.on(Mocha.Runner.constants.EVENT_TEST_BEGIN, this._eventTestBegin.bind(this));
        runner.on(Mocha.Runner.constants.EVENT_TEST_END, this._eventTestEnd.bind(this));
        runner.on(Mocha.Runner.constants.EVENT_TEST_PASS, this._eventTestPass.bind(this));
        runner.on(Mocha.Runner.constants.EVENT_TEST_FAIL, this._eventTestFail.bind(this));
        runner.on(Mocha.Runner.constants.EVENT_TEST_PENDING, this._eventTestPending.bind(this));
        runner.on(Mocha.Runner.constants.EVENT_TEST_RETRY, this._eventTestRetry.bind(this));
    }

    _eventRunBegin() {}

    _eventRunEnd() {
        //console.log(`${this.indent()}end_run`);
    }

    _eventSuiteBegin(suite: Mocha.Suite) {
        this.debug.log('start', suite, 'suite');
        this.debug.incrementLevel();
        //suite.mpStartDate = new Date();
    }

    _eventSuiteEnd(suite: Mocha.Suite) {
        this.debug.decrementLevel();
        // suite.duration = new Date() - suite.mpStartDate;
    }

    _eventHookBegin(hook: Mocha.Hook) {
        hook;
        //this._debug.log("start", hook, "hook");
    }

    _eventHookEnd(hook: Mocha.Hook) {
        //this._debug.log("end", hook, "hook");
        //this._dataStore.storeHook(hook, this._debug);
    }

    _eventTestBegin(test: Mocha.Test) {
        test;
        // Test#fullTitle() returns the suite name(s)
        // prepended to the test title
        //this._debug.log("start", test, "test");
    }

    _eventTestEnd(test: Mocha.Test) {
        //this._debug.log("start", test, "test");
        //this._dataStore.storeTest(test, this._debug);
    }

    _eventTestPass(test: Mocha.Test) {
        test;
        //console.log(`${this.indent()}pass: ${test.fullTitle()}`);
    }

    _eventTestFail(test: Mocha.Test, err: Error) {
        test;
        err;
        //console.log(`${this.indent()}fail: ${test.fullTitle()} - error: ${err.message}`);
    }

    _eventTestPending(test: Mocha.Test) {
        test;
        //console.log(`${this.indent()}pending: ${test.fullTitle()}`);
    }

    _eventTestRetry(test: Mocha.Test, err: Error) {
        test;
        err;
        /*console.log(
            `${this.indent()}retry: ${test.fullTitle()} - error: ${err.message}`
        );*/
    }
}

module.exports = ReportGenReporter;