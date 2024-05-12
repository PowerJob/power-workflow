class MacroCommand {
  /** 命令集合 */
  commands:any = {};

  /** 注册命令 */
  registerCommand(name, Command) {
    if(this.commands[name]) new Error(`the ${name} command already exists`);
    this.commands[name] = Command;
  }

  /** 执行命令 */
  executeCommand(name, cfg) {
    this.commands[name] && this.commands[name].execute(cfg);
  }
}

export default new MacroCommand();