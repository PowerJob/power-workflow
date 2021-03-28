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
    let width = this.size.width;
    let height = this.size.height;
    const { style = {} } = cfg;
    const attrs = {
      // ...nodeStyle.base.origin,
      // width,
      // height,
      // ...style
      ...nodeStyle.default,
      x: style.r || 20,
      y: style.r || 20,
      r: style.r || 20,
      fill: '#0577BB',
      stroke: '#028080',
      ...style
    }
    const keyShape = group.addShape('circle', {
      attrs: attrs,
      name: 'max-circle-node',
      className: 'max-circle-node'
    });

    this.initAnchor(group);

    this.drawIcon(cfg, group);

    return keyShape;
  }

  /** 绘制图标 */
  drawIcon(cfg, group) {
    group.addShape('image', {
      attrs: {
        ...nodeStyle.default,
        img: cfg.icon,
        x: cfg.style.r - (cfg.iconWidth || 20) / 2,
        y: cfg.style.r - (cfg.iconHeight || 20) / 2,
        width: cfg.iconWidth || 20,
        height: cfg.iconHeight || 20,
      },
      name: 'circle-image',
      capture: true,
      draggable: true
    })
  }
}