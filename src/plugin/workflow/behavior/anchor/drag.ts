import RegisterBehavior from '../../Workflow/registerBehavior';

const Event = {
  // 起始信息
  originInfo: null,
  /** 起始锚点 */
  target: null,
  isSameNode(e) {
    return e.target.getParent() && e.target.getParent().getParent() &&  e.target.getParent().getParent().get('item') === this.originInfo.sourceNode;
  },
  onDragLeave(e) {
    if(!this.originInfo) return;
    e.item.setHotspotActived(false);
    this.originInfo.targetNode = null;
    this.originInfo.targetAnchor = null;
  },
  onDragEnter(e) {
    if(!this.originInfo) return;
    e.item.setHotspotActived(true)
    if(!this.isSameNode(e)) {
      this.originInfo.targetNode = e.target.getParent().getParent().get('item')
      this.originInfo.targetAnchor = e.item.get('index');
    }
  },
  onDrag(e) {
    this._updateEdgeDelegate(this.target, e.x, e.y);
  },
  _updateEdgeDelegate(item, x, y) {
    let edgeShape = item.get('edgeDelegate');
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;
    if(!edgeShape) {
      const parent = self.graph.get('group');
      edgeShape = parent.addShape('line', {
        attrs: {
          x1: this.originInfo.x,
          y1: this.originInfo.y,
          x2: x,
          y2: y,
          stroke: '#1890FF', 
          lineDash: [4, 4], 
          lineWidth: 1
        }
      });
      edgeShape.set('capture', false);
      /** 此处是为了适配不重复添加 */
      item.set('edgeDelegate', edgeShape);
    }
    edgeShape.attr({ x2: x, y2: y });
    this.graph.paint();
  },
  onDragStart(e) {
    const anchorIndex = e.item.get("index");
    const sourceNode = e.target.getParent().getParent().get("item");

    const model = sourceNode.get('model');

    const point = sourceNode.getAnchorPoints(model)[anchorIndex];

    this.originInfo = {
      // x坐标
      x: point.x,
      // y坐标
      y: point.y,
      // 起始节点
      sourceNode: sourceNode,
      // 起始锚点索引
      sourceAnchor: anchorIndex
    }
    this.showAllAnchor();
    this.graph.set('edgeDragging', true);
    this.target = e.item;
  },
  async onDragEnd(e) {
    // this.showAllAnchor('clearAnchor');
    this.clearAllAnchor();
    
    const delegateShape = e.item.get('edgeDelegate');

    if (delegateShape) {
      delegateShape.remove();
      // this.target.set('edgeDelegate', null);
    }

    const edgeEndCallback = this.graph.get('edgeEndCallback')
    const isAddEdge = await edgeEndCallback(this.originInfo.sourceNode, this.originInfo.targetNode);
    if(!isAddEdge) return;
    if(this.originInfo.targetNode) {
      this.graph.add('edge', {
        source: this.originInfo.sourceNode.get('id'),
        target: this.originInfo.targetNode.get('id'),
        sourceAnchor: this.originInfo.sourceAnchor,
        targetAnchor: this.originInfo.targetAnchor,
        type: 'cvte-polyline'
      });
    }
    this.graph.setItemState(this.originInfo.sourceNode, 'hoverNode', false);

    // 添加成功之后触发事件
    this.graph.emit('onDargEdgeEnd', {
      sourceNode: this.originInfo.sourceNode, 
      targetNode:this.originInfo.targetNode
    });
    
    const MacroCommand = this.graph.get('MacroCommand');
    // 改变工具栏激活显示
    MacroCommand && MacroCommand.executeCommand('docat', { graph: this.graph });
  },
  clearAllAnchor() {
    const allNode = this.graph.getNodes();

    allNode.forEach(node => {
      const group = node.getContainer();
      group.clearAnchor();
    });

    /** 
     * 这里有个坑，state是有状态记录的，必须false才可以继续执行下一个true
     */
    this.graph.setItemState(this.originInfo.sourceNode, 'hover', false);
  },
  showAllAnchor(func) {
    const allNode = this.graph.getNodes();
    const sourceGroupId = this.originInfo.sourceNode.getModel().groupId;

    allNode.forEach(node => {
      const group = node.getContainer();
      if(this.originInfo.sourceNode === node) {
        group.anchorShapes.forEach(a => {
          a.get('item').showHotpot();
          const index = a.get('item').get('index');
          if(index === this.originInfo.sourceAnchor) this.graph.setItemState(a.get('item'), 'anchor-active', true);
        });
        
        return;
      }
      group.showAnchor();
      group.anchorShapes.forEach(a => a.get('item').showHotpot())
    });

    // if(func === 'clearAnchor') {
    //   const group = this.originInfo.sourceNode.getContainer();
    //   group[func]();
    // }
  }
}

export default class HoverAnchor extends RegisterBehavior {
  name = 'cover-drag-anchor';
  constructor(Grid) {
    super(Grid);
    this.register(Event);
  }
  getEvents() {
    return {
    //   'anchor:mouseenter': 'onNodeMouseEnter',
      "anchor:dragstart": "onDragStart",
      "anchor:dragend": "onDragEnd",
      "anchor:dragenter": "onDragEnter",
      "anchor:dragleave": "onDragLeave",
      "anchor:drag": "onDrag"
    }
  }
}