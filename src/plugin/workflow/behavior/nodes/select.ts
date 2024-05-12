import RegisterBehavior from '../../Workflow/registerBehavior';

const Event = {
  onNodeClick(e) {
    this.clearAllSelected();
    this.graph.setItemState(e.item, 'selectNode', true);
    this.graph.set('selectedItem', e.item);
    const group = e.item.get('group');
    this.graph.emit('onSelectNode', e.item, group);
    this.graph.set('noKeyDown', false);
  },
  onEdgeClick(e) {
    this.clearAllSelected();
    this.graph.setItemState(e.item, 'selectEdge', true);
    this.graph.set('selectedItem', e.item);
    this.graph.set('noKeyDown', false);
    const group = e.item.get('group');
    this.graph.emit('onSelectedEdge', e.item, group)
  },
  onCanvasClick(e) {
    this.graph.set('noKeyDown', false);
    this.clearAllSelected();
  },
  clearAllSelected() {
    let selectedNode = this.graph.findAllByState('node', 'selectNode');
    this.graph.set('selectedItem', null);
    let selectedEdge = this.graph.findAllByState('edge', 'selectEdge');
    selectedNode.forEach(node => {
      this.graph.setItemState(node, 'selectNode', false);
    });
    selectedEdge.forEach(node => {
      this.graph.setItemState(node, 'selectEdge', false);
    });
    this.graph.emit('onClearSelectNode', null);
  },
  onNodeDoubleClick(e) {
    this.graph.setItemState(e.item, 'selectNode', true);
    this.graph.set('selectedItem', e.item);
    this.graph.emit('onDoubleClickNode', e.item);
    this.graph.set('noKeyDown', false);
  },
  onEdgeDoubleClick(e) {
    this.clearAllSelected();
    this.graph.setItemState(e.item, 'selectEdge', true);
    this.graph.set('selectedItem', e.item);
    this.graph.set('noKeyDown', false);
    const group = e.item.get('group');
    this.graph.emit('onDoubleClickEdge', e.item, group)
  }
}

export default class SelectNode extends RegisterBehavior {
  name = 'cover-select-node';
  constructor(Grid) {
    super(Grid);
    this.register(Event);
  }
  getEvents() {
    return {
      'node:click': 'onNodeClick',
      'canvas:click': 'onCanvasClick',
      'edge:click': 'onEdgeClick',
      'node:dblclick': 'onNodeDoubleClick',
      'edge:dblclick': 'onEdgeDoubleClick'
    }
  }
}