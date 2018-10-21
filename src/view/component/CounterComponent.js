/**
 * @class demo.view.TextComponent
 * @implements EventListener
 *
 * TextComponent is implemented without any abstract concept of a UiComponent
 * or Sprite, and uses standard HTML5 methods to manipulate the DOM. It
 * does however implement the {@link #handleEvent W3C EventListener interface}
 * which means it can be passed directly to HTMLElement#addEventListener, rather
 * than providing a Function, leading to tidier code and no need for Function#bind
 * to preserve the execution scope of its methods.
 */
puremvc.define(
  // CLASS INFO
  {
    name: "counter.view.component.CounterComponent",

    /** @constructor */
    constructor: function() {
      // use HTML5 querySelector for DOM retrieval
      this.label = document.querySelector("label");
      this.btnAdd = document.querySelector("#add");
      this.btnSubtract = document.querySelector("#subtract");

      this.btnAdd.addEventListener("click", () =>
        this.dispatchTextChangedEvent(1)
      );
      this.btnSubtract.addEventListener("click", () =>
        this.dispatchTextChangedEvent(-1)
      );
    }
  },

  // INSTANCE MEMBERS
  {
    /**
     * @private
     * @type {HTMLInputElement}
     */
    label: null,

    /**
     * @private
     * @type {HTMLInputElement}
     */
    btnAdd: null,

    /**
     * @private
     * @type {HTMLInputElement}
     */
    btnSubtract: null,

    /**
     * Set the ouput fields text value
     * @param {string}
     * @return {void}
     */
    setCounter: function(value) {
      this.label.textContent = value;
    },

    /**
     * Add EventListeners to TextComponent. TextComponent will
     * dispatch only TextComponent#TEXT_CHANGED events, but
     * you can still listen to other events generated by its
     * DOM elements as they propagate through #textForm
     *
     * @param {string} type
     * @param {Function|Object} listener
     * @param {boolean} bubbles
     * @return {void}
     */
    addEventListener: function(type, listener, useCapture) {
      // delegate to #textForm
      document.addEventListener(type, listener, useCapture);
    },

    /**
     * @private
     * Read the inputText fields value and dispatch a text changed event
     * via TextComponents #textForm element.
     * @return {void}
     */
    dispatchTextChangedEvent: function(increment) {
      // use W3C compliant synthetic events dispatch api (SORRY, NO IE SUPPORT)
      var event = document.createEvent("Events");
      event.initEvent(this.constructor.ADD, false, false);
      event.increment = increment;
      document.dispatchEvent(event);
    }
  },

  // STATIC MEMBERS
  {
    /**
     * @static
     * @type {string}
     */
    ADD: "add"
  }
);