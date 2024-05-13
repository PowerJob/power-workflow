import Anchor from '../Anchors/AnchorItem';
import nodeStyle from '../../defaultStyle/nodeStyle';


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
      const inc= setInterval(() => {
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

export default function SimpleNode(Grid) {
  Grid.registerNode('simple-node', {
    /** 绘制 */
    draw(cfg, group, inc) {
      this.size = this.computeNodeSize(cfg);
  
      const keyShape = this.drawKeyShape(cfg, group);
      this.initAnchor(group);
      // this.drawAnchor(group);
  
      return keyShape;
    },
    /** 绘制主图形 */
    drawKeyShape(cfg, group) {
      const width = this.size.width;
      const height = this.size.height;
      const { style = {} } = cfg;
      const attrs = {
        ...nodeStyle.base.origin,
        fill: '#BB0552',
        width,
        height,
        ...style
      }
      const keyShape = group.addShape('rect', {
        attrs: attrs,
        name: 'base-node',
        className: 'base-node'
      });

      return keyShape;
    },
    /** 初始化锚点 */
    initAnchor(group) {
      group.anchorShapes = [];
      group.showAnchor = () => {
        this.drawAnchor(group);
      }
      group.clearAnchor = () => {
        this.clearAnchor(group);
      }
    },

    /** 清除锚点 */
    clearAnchor(group) {
      group.anchorShapes && group.anchorShapes.forEach(a => a.remove());
      group.anchorShapes = [];
    },

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
    },
    /** 计算节点的宽高 */
    computeNodeSize(cfg) {
      const size = cfg.size && Array.isArray(cfg.size) ? cfg.size : [180, 70];
      const width: number = size[0] ? size[0] : 180;
      const height: number = size[1] ? size[1] : 70;
      return {width, height}
    },
    getAnchorPoints() {
      return [
        [0.5, 0], // top
        [1, 0.5], // right
        [0.5, 1], // bottom
        [0, 0.5], // left
      ]
    },
    /** 状态变化 */
    setState(name, value, item) {
      stateList[name] && stateList[name].call(this, item, value);
    }
  })
}