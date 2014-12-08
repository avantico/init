/**
 * An example specification for the example module
 * Loads the module and runs the test suite
 * Module path is relative to the current path
 */
'use strict';

import Module from './module';

// Test suite INIT
describe('INIT', function () {
  var module = new Module();

  console.log(module);

  it('is available', function () {
    expect(module).not.toBe(null);
  });

  it('has getter for event name', function () {
    expect(module.getEventName()).toBe('_test');
  });

  it('fires event on init', function () {
    var eventCalled;

    $(document).on(module.getEventName(), function () {
      eventCalled = true;
    });

    module.init();

    expect(eventCalled).toBeTruthy();
  });
});
