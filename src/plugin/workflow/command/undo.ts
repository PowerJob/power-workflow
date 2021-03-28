import { clone } from '@antv/util';

export default class UndoCommand {
  execute({ graph }) {
    const undoStack = graph.getUndoStack();
    if (!undoStack || undoStack.length === 1) {
      return;
    }
    const currentData = undoStack.pop();
    if (currentData) {
      const { action } = currentData;
      graph.pushStack(action, clone(currentData.data), 'redo');
      let data = currentData.data.before;

      if (action === 'add') {
        data = currentData.data.after;
      }

      if (!data) return;
      switch (action) {
        case 'visible': {
          Object.keys(data).forEach((key) => {
            const array = data[key];
            if (!array) return;
            array.forEach((model) => {
              const item = graph.findById(model.id);
              if (model.visible) {
                graph.showItem(item, false);
              } else {
                graph.hideItem(item, false);
              }
            });
          });
          break;
        }
        case 'render':
        case 'update':
          Object.keys(data).forEach((key) => {
            const array = data[key];
            if (!array) return;
            array.forEach((model) => {
              graph.updateItem(model.id, model, false);
            });
          });
          break;
        case 'changedata':
          graph.changeData(data, false);
          break;
        case 'delete': {
          Object.keys(data).forEach((key) => {
            const array = data[key];
            if (!array) return;
            array.forEach((model) => {
              const itemType = model.itemType;
              delete model.itemType;
              graph.addItem(itemType, model, false);
            });
          });
          break;
        }
        case 'add':
          Object.keys(data).forEach((key) => {
            const array = data[key];
            if (!array) return;
            array.forEach((model) => {
              graph.removeItem(model.id, false);
            });
          });
          break;
        case 'updateComboTree':
          Object.keys(data).forEach((key) => {
            const array = data[key];
            if (!array) return;
            array.forEach((model) => {
              graph.updateComboTree(model.id, model.parentId, false);
            });
          });
          break;
        default:
      }
    }

    const MacroCommand = graph.get('MacroCommand');
    MacroCommand.executeCommand('docat', { graph });
  }
}