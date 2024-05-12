export default class CopyCommand {
  execute({ graph }) {
    this.operationStyle('undo', graph);
    this.operationStyle('redo', graph);
  }

  operationStyle(attr, graph) {
    const dom = document.querySelector(`div[data-command="${attr}"]`);

    if(attr === 'undo') {
      const undoStack = graph.getUndoStack();
      this.addStyle(dom, !undoStack || undoStack.length === 1);
    }

    if(attr === 'redo') {
      const redoStack = graph.getRedoStack();
      this.addStyle(dom, !redoStack || redoStack.length === 0);
    }
  }

  addStyle(dom, isStyle) {
    if(isStyle) {
      dom.classList.remove('actionable');
    } else {
      dom.classList.add('actionable');
    }
  }
}