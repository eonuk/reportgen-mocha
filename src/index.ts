//const Base = require('mocha/lib/reporters/base');
const Spec = require('mocha/lib/reporters/spec');
import Mocha from 'mocha';
import Debug from './utils/debug';



/**
 * ReportGen Reporter for Mocha
 */
class ReportGenReporter {
    private constants: Mocha.RunnerConstants = Mocha.Runner.constants;
	private debug: Debug;

	constructor(runner: Mocha.Runner) {
        this.debug = new Debug();
        //const stats = runner.stats;

        // data store for test results
        //this._dataStore = new DataStore();

        // Spec Reporter for the console
        new Spec(runner);

        // event listeners
        runner.once(this.constants.EVENT_RUN_BEGIN, this._eventRunBegin.bind(this));
        runner.once(this.constants.EVENT_RUN_END, this._eventRunEnd.bind(this));
        runner.on(this.constants.EVENT_SUITE_BEGIN, this._eventSuiteBegin.bind(this));
        runner.on(this.constants.EVENT_SUITE_END, this._eventSuiteEnd.bind(this));
        runner.on(this.constants.EVENT_HOOK_BEGIN, this._eventHookBegin.bind(this));
        runner.on(this.constants.EVENT_HOOK_END, this._eventHookEnd.bind(this));
        runner.on(this.constants.EVENT_TEST_BEGIN, this._eventTestBegin.bind(this));
        runner.on(this.constants.EVENT_TEST_END, this._eventTestEnd.bind(this));
        runner.on(this.constants.EVENT_TEST_PASS, this._eventTestPass.bind(this));
        runner.on(this.constants.EVENT_TEST_FAIL, this._eventTestFail.bind(this));
        runner.on(this.constants.EVENT_TEST_PENDING, this._eventTestPending.bind(this));
        runner.on(this.constants.EVENT_TEST_RETRY, this._eventTestRetry.bind(this));
    }

    _eventRunBegin() {
        this.debug.log(this.constants.EVENT_RUN_BEGIN);
    }

    _eventRunEnd() {
        this.debug.log(this.constants.EVENT_RUN_END);
    }

    _eventSuiteBegin(suite: Mocha.Suite) {
        this.debug.log(this.constants.EVENT_SUITE_BEGIN, suite, +1);
        //suite.mpStartDate = new Date();
    }

    _eventSuiteEnd(suite: Mocha.Suite) {
        this.debug.log(this.constants.EVENT_SUITE_END, suite, -1);
        // suite.duration = new Date() - suite.mpStartDate;
    }

    _eventHookBegin(hook: Mocha.Hook) {
        this.debug.log(this.constants.EVENT_HOOK_BEGIN, hook);
    }

    _eventHookEnd(hook: Mocha.Hook) {
        this.debug.log(this.constants.EVENT_HOOK_END, hook);
        // this._dataStore.storeHook(hook, this._debug);
    }

    _eventTestBegin(test: Mocha.Test) {
        // Test#fullTitle() returns the suite name(s)
        // prepended to the test title
        this.debug.log(this.constants.EVENT_TEST_BEGIN, test);
    }

    _eventTestEnd(test: Mocha.Test) {
        this.debug.log(this.constants.EVENT_TEST_END, test);
    }

    _eventTestPass(test: Mocha.Test) {
        this.debug.log(this.constants.EVENT_TEST_PASS, test);
    }

    _eventTestFail(test: Mocha.Test, err: Error) {
        this.debug.log(this.constants.EVENT_TEST_FAIL, test);
    }

    _eventTestPending(test: Mocha.Test) {
        this.debug.log(this.constants.EVENT_TEST_PENDING, test);
    }

    _eventTestRetry(test: Mocha.Test, err: Error) {
        this.debug.log(this.constants.EVENT_TEST_RETRY, test);
    }
}

module.exports = ReportGenReporter;