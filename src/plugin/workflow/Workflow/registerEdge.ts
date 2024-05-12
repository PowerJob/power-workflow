/*
 * @version: 
 * @Author: dee
 * @Date: 2021-02-03 10:12:39
 * @LastEditors: dee
 * @LastEditTime: 2021-02-05 15:40:05
 */
import RegisterManger from './registerManger';

export class RegisterEdge extends RegisterManger {
  name = 'cvte-polyline';
  extendedName = 'polyline';
  constructor(G6) {
    super(G6);
    // this.register();
  }
  
  register() {
    const self = this;
    this.G6.registerEdge(this.name, {
      drawShape: function(cfg, group) {
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
      }
    }, 'polyline');
  };

  draw(cfg, group, inc) {
    
  };

  update(cfg, group, inc) {};
  afterUpdate(cfg, group, inc) {};

  afterDraw(cfg, group, inc) {}

  setState(name, value, item, inc) {};
}