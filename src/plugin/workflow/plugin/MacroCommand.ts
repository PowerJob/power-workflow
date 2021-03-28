class MacroCommand {
  /** 命令集合 */
  commands:any = {};

  registerCommand(name, Command) {
    this.commands[name] = Command;
  }

  executeCommand(name, cfg) {
    this.commands[name] && this.commands[name].execute(cfg);
  }
}

export default new MacroCommand();