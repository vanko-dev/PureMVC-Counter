puremvc.define(
  // CLASS INFO
  {
    name: "counter.view.mediator.CounterComponentMediator",
    parent: puremvc.Mediator
  },

  // INSTANCE MEMBERS
  {
    /** @override */
    listNotificationInterests: function() {
      return [counter.model.proxy.CounterProxy.COUNTER_CHANGED];
    },

    /** @override */
    handleNotification: function(note) {
      switch (note.getName()) {
        case counter.model.proxy.CounterProxy.COUNTER_CHANGED:
          this.viewComponent.setCounter(note.getBody());
          break;
      }
    },

    /** @override */
    onRegister: function() {
      // Initialize the TextComponentMediator's view component when its
      // registered with the Facade and listen to its TEXT_CHANGED events
      this.setViewComponent(new counter.view.component.CounterComponent());
      // add the TextComponentMediator as a listener for TEXT_CHANGED events
      // when the
      this.viewComponent.addEventListener(
        counter.view.component.CounterComponent.ADD,
        this
      );
    },

    /** @override */
    onRemove: function() {
      // The TextComponentMediator has been removed from the Facade, and so is no longer
      // in use. Clean up by removing event listeners and dereferencing its viewComponent
      this.viewComponent.removeEventListener(
        counter.view.component.TextComponent.ADD,
        this
      );
      this.setViewComponent(null);
    },

    /**
     * Handle the W3CTextComponent.TEXT_CHANGED event
     * @param {Event} textChangedEvent
     * @return {void}
     */
    handleEvent: function(event) {
      this.sendNotification(counter.AppConstants.ADD, event.increment);
    }
  },

  // STATIC MEMBERS
  {
    /**
     * @static
     * @type {string}
     */
    NAME: "CounterMediator"
  }
);
