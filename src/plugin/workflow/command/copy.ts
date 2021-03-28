export default class CopyCommand {
  execute({graph}) {
    const item = graph.get('selectedItem');
    if(!item) {
      return;
    }
    const model = item.get('model');
    const id = Math.random();
    graph.addItem('node', {
      ...model,
      x: model.x + 10,
      y: model.y + 10,
      id: `${id}`
    });
    graph.paint();
    const MacroCommand = graph.get('MacroCommand');
    MacroCommand.executeCommand('docat', { graph });
  }
}