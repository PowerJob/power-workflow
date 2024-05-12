/*
 * @version: 
 * @Author: dee
 * @Date: 2021-02-03 10:12:39
 * @LastEditors: dee
 * @LastEditTime: 2021-02-05 15:40:05
 */
import RegisterManger from './registerManger';

export class RegisterNode extends RegisterManger {
  name = '';
  extendedName = '';
  constructor(G6) {
    super(G6);
    // this.register();
  }
  
  register() {
    const self = this;
    this.G6.registerNode(this.name, {
      draw: function(cfg, group) {
        return self.draw.call(self, cfg, group, this);
      },
      afterDraw: function(cfg, group) {
        return self.afterDraw.call(self, cfg, group, this);
      },
      update: function(cfg, group) {
        self.update.call(self, cfg, group, this);
      },
      afterUpdate: function(cfg, group) {
        self.afterUpdate.call(self, cfg, group, this);
      },
      setState: function(name, value, item){
        self.setState.call(self, name, value, item, this)
      },
      getAnchorPoints: function(cfg) {
        return self.getAnchorPoints.call(self, cfg, this);
      },
      drawAnchor: function() {
        return self.drawAnchor && self.drawAnchor.apply(self, arguments);
      },
      test: () => {}
    }, this.extendedName);
  };

  draw(cfg, group, inc) {
    const keyShape = group.addShape('rect', {
      attrs: {
        width: 170,
        height: 70,
        fill: '#C7E4FF',
			  stroke: '#61B3FF',
			  opacity: 0.6,
			  lineWidth: 2,
			  radius: 8,
			  cursor: 'move'
      },
      name: 'power-rect-node',
      className: 'base-node'
    });
    return keyShape;
  };

  update(cfg, group, inc) {};
  afterUpdate(cfg, group, inc) {};

  afterDraw(cfg, group, inc) {}

  setState(name, value, item, inc) {};

  drawAnchor(group) {}

  getAnchorPoints(cfg, inc) {
    return [
      [0.5, 0], // top
      [1, 0.5], // right
      [0.5, 1], // bottom
      [0, 0.5], // left
    ]
  }
}