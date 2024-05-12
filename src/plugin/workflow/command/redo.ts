import { clone } from '@antv/util';
export default class RedoCommand {
  execute({ graph }) {
    const redoStack = graph.getRedoStack();
    if (!redoStack || redoStack.length === 0) {
      return;
    }
    const currentData = redoStack.pop();
    if (currentData) {
      const { action } = currentData;
      let data = currentData.data.after;
      graph.pushStack(action, clone(currentData.data));
      if (action === 'delete') {
        data = currentData.data.before;
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
        case 'delete':
          if (data.edges) {
            data.edges.forEach((model) => {
              graph.removeItem(model.id, false);
            });
          }
          if (data.nodes) {
            data.nodes.forEach((model) => {
              graph.removeItem(model.id, false);
            });
          }
          if (data.combos) {
            data.combos.forEach((model) => {
              graph.removeItem(model.id, false);
            });
          }
          break;
        case 'add': {
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