/**
 * @class demo.controller.PrepareW3CViewCommand
 * @extends puremvc.SimpleCommand
 */
puremvc.define(
  // CLASS INFO
  {
    name: "counter.controller.command.PrepareViewCommand",
    parent: puremvc.SimpleCommand
  },

  // INSTANCE TRAITS
  {
    /** @override */
    execute: function(note) {
      // register the TextComponentMediator
      this.facade.registerMediator(
        new counter.view.mediator.CounterComponentMediator()
      );
    }
  }
);
