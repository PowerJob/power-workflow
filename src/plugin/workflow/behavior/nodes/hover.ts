/*
 * @version: 
 * @Author: dee
 * @Date: 2021-02-05 16:06:28
 * @LastEditors: dee
 * @LastEditTime: 2021-02-05 17:28:55
 */

import RegisterBehavior from '../../Workflow/registerBehavior';

const Event = {
  onNodeMouseEnter(e) {
    this.graph.setItemState(e.item, 'hoverNode', true);
  },
  onNodeMouseLeave(e) {
    // 判断目标元素不是锚点
    if(e.target.cfg.name === 'anchor-shape') return;
    this.graph.setItemState(e.item, 'hoverNode', false);
  }
}

export default class HoverNode extends RegisterBehavior {
  name = 'cover-hover-node';
  constructor(Grid) {
    super(Grid);
    this.register(Event);
  }
  getEvents() {
    return {
      'node:mouseenter': 'onNodeMouseEnter',
      'node:mouseleave': 'onNodeMouseLeave'
    }
  }
}