import RegisterBehavior from '../../Workflow/registerBehavior';

const Event = {
  /** 基础信息 */
  origin: null,
  /** 当前节点信息 */
  target: null,

  onNodeDragStart(e) {
    this.target = e.item;
    this.origin = {
      x: e.x,
      y: e.y
    }
  },
  onNodeDrag(e) {
    if(!this.origin) return;
    const model = this.target.get('model');
    const origin = this.origin;
    // 起始点的位置
    if(!this.point) {
      this.point = {
        x: model.x,
        y: model.y
      }
    }
    const x = e.x - origin.x + this.point.x;
    const y = e.y - origin.y + this.point.y;
    this.origin = { x: e.x, y: e.y };
    this.point = { x, y };
    this.moveDelegate(this.target, x, y);
  },
  onNodeDragEnd(e) {
    if (!this.origin) {
      return;
    }

    const delegateShape = e.item.get('delegateShape');

    const bbox = delegateShape.getBBox();

    const x = bbox.x + 3;
    const y = bbox.y + 3;

    delegateShape.remove();

    this.target.set('delegateShape', null);

    this.graph.updateItem(this.target, {x, y});


    const MacroCommand = this.graph.get('MacroCommand');
    MacroCommand && MacroCommand.executeCommand('docat', { graph: this.graph });

    this.point = null;
    this.origin = null;
    this.graph.emit('afternodedragend');
  },
  moveDelegate(item, x, y) {
    let shape = item.get('delegateShape');
    const bbox = item.get('keyShape').getBBox();
    const keyShape = item.getKeyShape();
    const keyShapeAttr = keyShape.attr();
    if(!shape) {
      const parent = this.graph.get('group');
      const attrs = {
        stroke: keyShapeAttr.stroke ? keyShapeAttr.stroke : '#1890FF',
        fill: keyShapeAttr.fill ? keyShapeAttr.fill : '#1890FF',
        fillOpacity: .08,
        lineDash: [4, 4],
        radius: 4,
        lineWidth: 1,
      }

      const other: any = {};

      if(keyShapeAttr.r) {
        other.radius = bbox.width / 2
      }

      shape = parent.addShape('rect', {
        attrs: {
          width: bbox.width,
          height: bbox.height,
          x: x - bbox.width / 2,
          y: y - bbox.height / 2,
          nodeId: item.get('id'),
          ...attrs,
          ...other,
        }
      });

      // if(keyShapeAttr.r) {
      //   shape = parent.addShape('circle', {
      //     attrs: {
      //       r: keyShapeAttr.r,
      //       x: x,
      //       y: y,
      //       // x: x - bbox.width / 2,
      //       // y: y - bbox.height / 2,
      //       nodeId: item.get('id'),
      //       ...attrs
      //     }
      //   })
      // } else {
      //   shape = parent.addShape('rect', {
      //     attrs: {
      //       width: bbox.width,
      //       height: bbox.height,
      //       x: x - bbox.width / 2,
      //       y: y - bbox.height / 2,
      //       nodeId: item.get('id'),
      //       ...attrs
      //     }
      //   });
      // }

      
      // shape.set('capture', false);
      item.set('delegateShape', shape);
    }

    shape.attr({ x: x, y: y });

    this.graph.paint();

    this.graph.emit('afternodedrag', shape);
  }
}

export default class DragNode extends RegisterBehavior {
  name = 'cover-drag-node';
  constructor(Grid) {
    super(Grid);
    this.register(Event);
  }
  getEvents() {
    return {
      "node:dragstart": "onNodeDragStart",
      'node:drag': 'onNodeDrag',
      "node:dragend": 'onNodeDragEnd'
    }
  }
}