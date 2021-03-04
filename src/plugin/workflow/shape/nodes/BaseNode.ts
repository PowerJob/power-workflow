/*
 * @version: 
 * @Author: dee
 * @Date: 2021-02-03 14:38:50
 * @LastEditors: dee
 * @LastEditTime: 2021-02-05 15:40:43
 */
import { RegisterNode } from '../../Workflow/registerNode';
import nodeStyle from '../../defaultStyle/nodeStyle';
import Anchor from '../Anchors/AnchorItem'

interface ISize {
  width: number;
  height: number;
}

const stateList = {
  /** 控制锚点的显示 */
  'hoverNode': function(item, value){
    const group = item.getContainer();
    if(value) {
      group.showAnchor()
    } else {
      group.clearAnchor()
    }
  },
  /** 选中锚点 */
  selectNode: function(item, value) {
    const group = item.getContainer();
    const current = group.getChildByIndex(0);
    if(value) {
      current.attr("opacity", 1);
    } else {
      current.attr("opacity", 0.6);
    }
  }
}

export default class BaseNode extends RegisterNode {
  name = 'base-node';
  size: ISize = {width: 180, height: 70}
  canvas:any = null
  constructor(Grid, extendsed = false) {
    super(Grid);
    if(!extendsed) this.register();
  }
  draw(cfg, group, inc) {
    this.size = this.computeNodeSize(cfg);

    const keyShape = this.drawKeyShape(cfg, group);
    // this.drawAnchor(group);

    return keyShape;
  }

  afterDraw(cfg, group, inc) {
    // console.log(group)
    // group.showAnchor(group);
  }

  getTextWidth(text) {
    // re-use canvas object for better performance
    this.canvas = this.canvas || document.createElement("canvas")
    var context = this.canvas.getContext("2d");
    context.font = "10px";
    var metrics = context.measureText(text) ;

    return metrics.width - text.length * 2;
  }

  getTextWidth1(fontSize, text){
    var span = document.createElement("span")
    span.style.fontSize = fontSize
    var result:any = {}
    result.width = span.offsetWidth
    result.height = span.offsetWidth
    span.style.visibility = "hidden"
    document.body.appendChild(span)
    if  (typeof span.textContent != "undefined")
        span.textContent = text
    else
      span.innerText = text
    result = span.offsetWidth - result.width
    span.parentNode.removeChild(span)

    

    return result - text.length * 1.5;
  }

  /** 绘制主图形 */
  drawKeyShape(cfg, group) {
    let width = this.size.width;
    let height = this.size.height;
    const { style = {} } = cfg;
    const attrs = {
      ...nodeStyle.base.origin,
      width,
      height,
      ...style
    }
    const keyShape = group.addShape('rect', {
      attrs: attrs,
      name: 'base-node',
      className: 'base-node'
    });

    this.initAnchor(group);

    return keyShape;
  }

  /** 初始化锚点 */
  initAnchor(group) {
    group.anchorShapes = [];
    group.showAnchor = () => {
      this.drawAnchor(group);
    }
    group.clearAnchor = () => {
      this.clearAnchor(group);
    }
  }

  /** 绘制锚点 */
  drawAnchor(group) {
    const bbox = group.get('children')[0].getBBox();
    this.getAnchorPoints().forEach((point, index) => {
      const anchorContainer = group.addGroup();
      new Anchor({
        group: anchorContainer,
        index: index,
        model:{
          style:{
            x: bbox.minX + bbox.width * point[0],
            y: bbox.minY + bbox.height * point[1]
          }
        }
      });
      group.anchorShapes.push(anchorContainer);
    });

    // group.anchorShapes.forEach(a => a.get('item').showHotpot())
  }

  /** 清除锚点 */
  clearAnchor(group) {
    group.anchorShapes && group.anchorShapes.forEach(a => a.remove());
    group.anchorShapes = [];
  }

  /** 计算节点的宽高 */
  computeNodeSize(cfg): ISize {
    let size = cfg.size && Array.isArray(cfg.size) ? cfg.size : [180, 70];
    let width: number = size[0] ? size[0] : 180;
    let height: number = size[1] ? size[1] : 70;
    return {width, height}
  }

  getAnchorPoints() {
    return [
      [0.5, 0], // top
      [1, 0.5], // right
      [0.5, 1], // bottom
      [0, 0.5],
    ]
  }

  /** 状态变化 */
  setState(name, value, item) {
    stateList[name] && stateList[name].call(this, item, value);
  }
}