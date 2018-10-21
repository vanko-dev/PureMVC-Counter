/**
 * @class demo.controller.StartupCommand
 * @extends puremvc.MacroCommand
 */
puremvc.define(
  // CLASS INFO
  {
    name: "counter.controller.command.StartupCommand",
    parent: puremvc.MacroCommand
  },

  // INSTANCE MEMBERS
  {
    /** @override */
    initializeMacroCommand: function() {
      // add the PrepareControllerCommand- it will register Commands with the Facade
      this.addSubCommand(counter.controller.command.PrepareControllerCommand);

      // add the SetupViewsCommand- it will register Mediators with the Facade
      this.addSubCommand(counter.controller.command.PrepareViewCommand);

      // add the PrepareModelCommand- it will register Proxys with the Facade
      this.addSubCommand(counter.controller.command.PrepareModelCommand);
    }
  }
);
