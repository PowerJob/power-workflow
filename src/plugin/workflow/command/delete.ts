export default class DeleteCommand {
  execute({ graph }) {
    const item = graph.get('selectedItem');
    if(!item) return;
    // 移除节点
    graph.remove(item);
    // 选中节点置null
    graph.set('selectedItem', null);
    // 触发清空选中事件
    graph.emit('onClearSelectNode', null);
    // 改变样式
    const MacroCommand = graph.get('MacroCommand');
    MacroCommand.executeCommand('docat', { graph });
  }
}