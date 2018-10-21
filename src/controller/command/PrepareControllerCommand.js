/**
 * @class demo.controller.PrepareControllerCommand.js
 */
puremvc.define(
  // CLASS INFO
  {
    name: "counter.controller.command.PrepareControllerCommand",
    parent: puremvc.SimpleCommand
  },

  // INSTANCE MEMBERS
  {
    /** @override */
    execute: function(note) {
      // register teh ProcessTextCommand to handle the PROCESS_TEXT notification
      this.facade.registerCommand(
        counter.AppConstants.ADD,
        counter.controller.command.AddCommand
      );
    }
  }
);
