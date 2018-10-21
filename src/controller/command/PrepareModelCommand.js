/**
 * @class demo.controller.PrepareModelCommand.js
 */
puremvc.define(
  // CLASS INFO
  {
    name: "counter.controller.command.PrepareModelCommand",
    parent: puremvc.SimpleCommand
  },

  // INSTANCE MEMBERS
  {
    /** @override */
    execute: function(note) {
      // register the TextProxy
      this.facade.registerProxy(new counter.model.proxy.CounterProxy());
    }
  }
);
