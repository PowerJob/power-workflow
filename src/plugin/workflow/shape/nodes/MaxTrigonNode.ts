import BaseNode from './BaseNode';
import nodeStyle from '../../defaultStyle/nodeStyle';

export default class MaxCircleNode extends BaseNode {
  name = 'max-trigon-node'
  constructor(Grid, isRegister = true) {
    super(Grid, true);
    isRegister && this.register();
  }

  /** 绘制图形 */
  drawKeyShape(cfg, group) {
    let width = this.size.width;
    let height = this.size.height;
    const { style = {} } = cfg;
    const { sideLength = 100, position = 'top' } = style;
    const side8 = sideLength * 0.8;
    const side5 = sideLength * 0.5;
    const side1 = sideLength;

    /** 箭头的位置 */
    const pointsPos = {
      right: [
        [0, 0],
        [0, side1],
        [side8, side5]
      ],
      bottom: [
        [0, 0],
        [side1, 0],
        [side5, side8]
      ],
      top: [
        [side5, 0],
        [0, side8],
        [side1, side8]
      ],
      left: [
        [0, side5],
        [side8, 0],
        [side8, side1]
      ]
    }

    const attrs = {
      // ...nodeStyle.base.origin,
      // width,
      // height,
      // ...style
      ...nodeStyle.default,
    //   x: style.r || 20,
    //   y: style.r || 20,
    //   r: style.r || 20,
      points: pointsPos[position],
      fill: '#0577BB',
      stroke: '#028080',
      ...style
    }
    const keyShape = group.addShape('polygon', {
      attrs: attrs,
      name: 'max-trigon-node',
      className: 'max-trigon-node'
    });

    this.initAnchor(group, cfg);

    this.drawIcon(cfg, group);

    return keyShape;
  }

  /** 绘制图标 */
  drawIcon(cfg, group) {
    const { style: { sideLength = 100, position = 'top' } } = cfg;

    const iconWidth = cfg.iconWidth || 20;
    const iconHeight = cfg.iconHeight || 20;

    const inValue = {
      top: {
        x: 0, 
        y: 0,
      },
      right: {
        x: -10,
        y: 0
      },
      bottom: {
        x: 0,
        y: -20
      },
      left: {
        x: 0,
        y: 0
      }
    }

    const instance = inValue[position];

    const x = sideLength / 2 - iconWidth / 2 + instance.x;
    const y = sideLength / 2 - iconHeight / 2 + instance.y;

    group.addShape('image', {
      attrs: {
        ...nodeStyle.default,
        img: cfg.icon,
        x,
        y,
        // x: cfg.style.r - (cfg.iconWidth || 20) / 2,
        // y: cfg.style.r - (cfg.iconHeight || 20) / 2,
        width: iconWidth,
        height: iconHeight
      },
      name: 'circle-image',
      capture: true,
      draggable: true
    })
  }

  getAnchorPoints(cfg) {
    const { style: { sideLength = 100, position = 'top' } } = cfg;

    if(position === 'top' || position === 'bottom') {
      return [
        [0.5, 0], // top
        [0.75, 0.5], // right
        [0.5, 1], // bottom
        [0.25, 0.5], // left
      ]
    }

    return [
      [0.5, 0.25], // top
      [1, 0.5], // right
      [0.5, 0.75], // bottom
      [0, 0.5], // left
    ]
  }
}