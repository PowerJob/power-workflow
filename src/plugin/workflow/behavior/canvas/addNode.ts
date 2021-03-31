import RegisterBehavior from '../../Workflow/registerBehavior';

const Event = {
  onMouseUp(e) {
    // 判断节点是否正在拖拽
    const addNodeDragging = this.graph.get('addNodeDragging');
    if(!addNodeDragging) return;
    // 获取主图的组
    // const group = this.graph.get('group');
    // 获取添加节点的类型
    const addNodeModel = this.graph.get('addNodeModel');
    // 视口坐标转换
    const viewPoint = this.graph.getPointByClient(e.clientX, e.clientY);
    const x = viewPoint.x - addNodeModel.offsetX;
    const y = viewPoint.y - addNodeModel.offsetY;
    // 随机id
    const nodeId = new Date().getTime();

    const model = {
      type: addNodeModel.nodeType,
      id: `${nodeId}`,
      x,
      y,
      style: {
        ...addNodeModel
      },
      ...addNodeModel.model
    };
    // 添加并重绘
    this.graph.addItem('node', model);
    this.graph.paint();

    this.graph.emit('onAddPanelNode', model);

    const MacroCommand = this.graph.get('MacroCommand');
    MacroCommand && MacroCommand.executeCommand('docat', { graph: this.graph });
  }
}

export default class CoverAddNode extends RegisterBehavior {
  name = 'cover-add-node';
  constructor(Grid) {
    super(Grid);
    this.register(Event);
  }
  getEvents() {
    return {
    //   'anchor:mouseenter': 'onNodeMouseEnter',
        'canvas:mouseup': 'onMouseUp',
    }
  }
}