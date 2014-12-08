/**
 * An example module
 *
 * @author Author name
 * @date 2013-08-18
 */
// Dependencies of the module
import $ from '../../../node_modules/jquery/dist/jquery.js';

// Private variables
var _eventName = '_test';

export function module () {

  // Public API

  // Getter for private variable
  this.getEventName = function () {
    return _eventName;
  };

  // File an event on initialisation
  this.init = function () {
    $(document).trigger(_eventName);
  };
}
