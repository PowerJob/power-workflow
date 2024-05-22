import BaseNode from './BaseNode';
import nodeStyle from '../../defaultStyle/nodeStyle';

export default class MaxCircleNode extends BaseNode {
  name = 'max-circle-node'
  constructor(Grid) {
    super(Grid, true);
    this.register();
  }

  /** 绘制图形 */
  drawKeyShape(cfg, group) {
    const width = this.size.width;
    const height = this.size.height;
    const { style = {}, r = 20 } = cfg;
    // const { r = 20 } = style;
    const attrs = {
      ...nodeStyle.default,
      fill: '#0577BB',
      stroke: '#028080',
      ...style,
      x: r,
      y: r,
      r: r,
    }
    const keyShape = group.addShape('circle', {
      attrs: attrs,
      name: 'max-circle-node',
      className: 'max-circle-node'
    });

    this.initAnchor(group);

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
    const { r = 20 } = cfg;
    group.addShape('image', {
      attrs: {
        ...nodeStyle.default,
        img: cfg.icon,
        x: r - (cfg.iconWidth || 20) / 2,
        y: r - (cfg.iconHeight || 20) / 2,
        width: cfg.iconWidth || 20,
        height: cfg.iconHeight || 20,
      },
      name: 'circle-image',
      capture: true,
      draggable: true
    })
  }

  /** 绘制文字 */
  drawText(cfg, group) {
    const { text, style = {}, r = 20 } = cfg;
    const { textStyle = {} } = style;
    group.addShape('text', {
      attrs: {
        text: text ? text : '',
        x: r,
        y: r * 2 + 8,
        textAlign: 'center',
        textBaseline: 'middle',
        fill: '#666',
        fontSize: 10,
        ...textStyle
      },
    })
  } 
}