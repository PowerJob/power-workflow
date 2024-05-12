import BaseNode from './BaseNode';
import nodeStyle from '../../defaultStyle/nodeStyle';

export default class MaxDiamondNode extends BaseNode {
  name = 'max-diamond-node'
  constructor(Grid, isRegister = true) {
    super(Grid, true);
    isRegister && this.register();
  }

  /** 绘制图形 */
  drawKeyShape(cfg, group) {
    const { style = {}, sideLength = 50 } = cfg;
    // const { sideLength = 50 } = style;
    const dot = sideLength / 2;
    const points = [
        [dot, 0],
        [0, dot],
        [dot, sideLength],
        [sideLength, dot]
    ]

    /** 箭头的位置 */

    const attrs = {
      ...nodeStyle.default,
      // points,
      path: [
        ['M', dot, 0],
        ['L', 0, dot],
        ['L', dot, sideLength],
        ['L', sideLength, dot],
        ['Z']
      ],
      fill: '#0577BB',
      stroke: '#028080',
      ...style
    }
    const keyShape = group.addShape('path', {
      attrs: attrs,
      name: 'max-diamond-node',
      className: 'max-diamond-node'
    });

    this.initAnchor(group, cfg);

    this.drawIcon(cfg, group);

    this.drawText(cfg, group);

    this.addShapeApi(cfg, group);

    return keyShape;
  }

  /** addShapeApi */
  addShapeApi(cfg, group) {
    // 主题边框
    const updateKeyShape = (props) => {
      this.updateShape(group, {index: 0, ...props})
      return group;
    }

    // 图标
    const updateIcon = (props) => {
      this.updateShape(group, {index: 1, ...props})
    }

    // 文字
    const updateText = (props) => {
      this.updateShape(group, {index: 2, ...props})
    }

    group.updateKeyShape = updateKeyShape;
    group.updateIcon = updateIcon;
    group.updateText = updateText;

  }

  /** 绘制图标 */
  drawIcon(cfg, group) {
    const { style: { position = 'top' }, sideLength = 50 } = cfg;

    const iconWidth = cfg.iconWidth || 20;
    const iconHeight = cfg.iconHeight || 20;

    const x = sideLength / 2 - iconWidth / 2;
    const y = sideLength / 2 - iconHeight / 2;

    group.addShape('image', {
      attrs: {
        ...nodeStyle.default,
        img: cfg.icon,
        x,
        y,
        width: iconWidth,
        height: iconHeight
      },
      name: 'circle-image',
      capture: true,
      draggable: true
    })
  }

  /** 绘制文字 */
  drawText(cfg, group) {
    const { style = {}, sideLength = 50 } = cfg;
    const { textStyle = {} } = style;
    if(cfg.text) {
      group.addShape('text', {
        attrs: {
          x: sideLength / 2, // 居中
          y: sideLength + 8,
          textAlign: 'center',
          textBaseline: 'middle',
          text: cfg.text,
          fill: '#666',
          fontSize: 10,
          ...textStyle
        },
        draggable: true,
        name: 'zhao'
      })
    }
    
  }

//   getAnchorPoints(cfg) {
//     const { style: { sideLength = 100, position = 'top' } } = cfg;

//     return [
//         [0.5, 0],
//         [0, 0.5],
//         [0, 1]
//     ]

//     if(position === 'top' || position === 'bottom') {
//       return [
//         [0.5, 0], // top
//         [0.75, 0.5], // right
//         [0.5, 1], // bottom
//         [0.25, 0.5], // left
//       ]
//     }

//     return [
//       [0.5, 0.25], // top
//       [1, 0.5], // right
//       [0.5, 0.75], // bottom
//       [0, 0.5], // left
//     ]
//   }
}