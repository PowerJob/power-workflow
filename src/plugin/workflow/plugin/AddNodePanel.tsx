import { deepMix, each } from '@antv/util';
import { createDom } from '@antv/dom-util';

class AddNodePanel {
  private readonly _cfgs: any;

  constructor(cfgs) {
    this._cfgs = deepMix(this.getDefaultCfg(), cfgs);
  }
  getDefaultCfg() {
    return { container: null };
  }

  get(key) {
    return this._cfgs[key];
  }
  set(key, val) {
    this._cfgs[key] = val;
  }

  initPlugin(graph) {
    const parentNode = this.get('container');
    const children = parentNode.querySelectorAll('div[data-item]');
    each(children, (child,i)=>{
      // const addModel = (new Function("return " + child.getAttribute('data-item')))();
      child.addEventListener('dragstart', e => {
        graph.set('addNodeDragging',true);
        const nodeData = child.getAttribute('data-item');
        const nodeModel = JSON.parse(nodeData);
        const model = {
          nodeType: nodeModel.nodeName,
          offsetX: e.offsetX,
          offsetY: e.offsetY,
          ...nodeModel
        };
        graph.set('addNodeModel', model);
        // e.dataTransfer.setDragImage(ghost, 0, 0);
        // graph.set('addNodeDragging',true);
        // graph.set('addModel',addModel);
      });
      child.addEventListener('dragend', e => {
        graph.emit('canvas:mouseup',e);
        graph.set('addNodeDragging', false);
        // graph.set('addNodeDragging',false);
        // graph.set('addModel',null);
      });
    });
  }

  destroy() {
    this.get('canvas').destroy();
    const container = this.get('container');
    container.parentNode.removeChild(container);
  }
}

export default AddNodePanel;
