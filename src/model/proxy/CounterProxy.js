/**
 * @class demo.model.TextProxy
 * @extends puremvc.Proxy
 */
puremvc.define(
  // CLASS INFO
  {
    name: "counter.model.proxy.CounterProxy",
    parent: puremvc.Proxy
  },

  // INSTANCE MEMBERS
  {
    counter: 0,

    setCounter: function(value) {
      // Store the text
      this.counter += value;

      // Send a notification that the text changed
      this.sendNotification(
        counter.model.proxy.CounterProxy.COUNTER_CHANGED,
        this.counter
      );
    }
  },

  // CLASS MEMBERS
  {
    /**
     * The TextProxy's name.
     *
     * @static
     * @type {string}
     */
    NAME: "CounterProxy",

    /**
     * A notification that the text has changed.
     */
    COUNTER_CHANGED: "counterChanged"
  }
);
