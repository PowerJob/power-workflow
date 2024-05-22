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
  },
  /** 节点显示隐藏 */
  visibleNode: function(item, value) {
    const group = item.get('group');
    const nodeModel = item.getModel();
    if(value === 'hide') {
      // item.update({
      //   x: nodeModel.startPos.x + 10,
      //   y: nodeModel.startPos.x + 10
      // })
      // item.refresh();
      const startPos = nodeModel.startPos;
      const endPos = nodeModel.endPos;

      const distanceX = Math.abs(endPos.x - startPos.x);
      const distanceY = Math.abs(endPos.Y - startPos.Y);
      const disX = 20 / 1000 * distanceX;
      const disY = 20 / 1000 * distanceY;
      let startX = nodeModel.startPos.x;
      let startY = nodeModel.startPos.x;
      const inc = setInterval(() => {
        if(startX < endPos.x) {
          clearInterval(inc);
        }
        item.update({
          x: startX -= disX,
          y: startY -= disY
        })
      }, 20)
      // group.animate({
      //   x: nodeModel.startPos.x,
      //   y: nodeModel.startPos.y,
      //   opacity: 0
      // }, {
      //   repeat: false,
      //   duration: 1000,
      //   easing: 'easeCubic',
      // });
    } else {
      // group.animate({
      //   opacity: 1
      // }, {
      //   repeat: false,
      //   duration: 1000,
      //   easing: 'easeCubic',
      // });
    }
  }
}

/** 计算字符的长度 */
const calcStrLen = function calcStrLen(str) {
  let len = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 0 && str.charCodeAt(i) < 128) {
      len++;
    } else {
      len += 2;
    }
  }
  return len;
};

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
    // console.log(this.size);

    const keyShape = this.drawKeyShape(cfg, group);
    // this.drawAnchor(group);

    return keyShape;
  }

  afterDraw(cfg, group, inc) {
    // group.showAnchor(group);
  }

  updateShape(group, {index = 0, ...props}) {
    const currentShape = group.getChildByIndex(index);
    currentShape.attr(props);
  }

  /** 计算文字宽度 */
  getTextWidth(text) {
    // re-use canvas object for better performance
    this.canvas = this.canvas || document.createElement("canvas")
    const context = this.canvas.getContext("2d");
    context.font = "10px";
    const metrics = context.measureText(text) ;

    return metrics.width - text.length * 2;
  }

  getTextWidth1(fontSize, text){
    const span = document.createElement("span")
    span.style.fontSize = fontSize
    let result:any = {}
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

  /** 计算文字的宽度 */
  getTextWidth2(fontSize, text) {
    const fontWidth = fontSize; //字号+边距
    const width = this.calcStrLen(text) * fontWidth;
    return width / 2;
  }

  /** 计算字符数 */
  calcStrLen(str) {
    let len = 0;
    for (let i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) > 0 && str.charCodeAt(i) < 128) {
        len = ++len + 0.2;
      } else {
        len += 2;
      }
    }
    return len;
  }

  /** 判断宽度可以容纳多少字符 */
  withByContain(width, fontSize) {
    const fontWidth = fontSize;
    return width * 2 / fontWidth;
  }

  /** 根据宽度自动计算文字的显示 */


  /** 文字超出指定宽度显示省略号 */
  textWidthToEllipsis({ text, threshold = 4, width = this.size.width, fontSize = 12 }) {
    // 加两个字符的空白
    const containCharacter = this.withByContain(width, fontSize) - threshold;
    let finalText = '';
    let len = 0;
    for (let i = 0; i < text.length; i++) {
      if (text.charCodeAt(i) > 0 && text.charCodeAt(i) < 128) {
        len++;
      } else {
        len += 2;
      }
      if(len > containCharacter) {
        finalText += '...'
        break;
      }
      finalText += text[i];
    }
    return finalText;
  }

  /** 绘制主图形 */
  drawKeyShape(cfg, group) {
    const width = this.size.width;
    const height = this.size.height;
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
  initAnchor(group, cfg = {}) {
    group.anchorShapes = [];
    group.showAnchor = () => {
      this.drawAnchor(group, cfg);
    }
    group.clearAnchor = () => {
      this.clearAnchor(group);
    }
  }

  /** 绘制锚点 */
  drawAnchor(group, cfg = {}) {
    const bbox = group.get('children')[0].getBBox();
    this.getAnchorPoints(cfg).forEach((point, index) => {
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
    const size = cfg.size && Array.isArray(cfg.size) ? cfg.size : [180, 70];
    const width: number = size[0] ? size[0] : 180;
    const height: number = size[1] ? size[1] : 70;
    return {width, height}
  }

  getAnchorPoints(cfg) {
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