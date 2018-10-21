puremvc.define(
  // CLASS INFO
  {
    name: "counter.controller.command.AddCommand",
    parent: puremvc.SimpleCommand
  },

  // INSTANCE MEMBERS
  {
    /** @override */
    execute: function(note) {
      // Get the text to be processed from the notification
      var increment = note.getBody();

      // Get the TextProxy
      var proxy = this.facade.retrieveProxy(
        counter.model.proxy.CounterProxy.NAME
      );

      // Process the text
      var newCounter = proxy.getData() + increment;

      // Set the updated text on the TextProxy
      proxy.setCounter(newCounter);
    }
  }
);
