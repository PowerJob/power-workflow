import RegisterBehavior from '../../Workflow/registerBehavior';

const Event = {
  onEdgeMouseEnter(e) {
    this.graph.setItemState(e.item, 'hoverEdge', true);
  },
  onEdgeMouseLeave(e) {
    this.graph.setItemState(e.item, 'hoverEdge', false);
  }
}

export default class HoverNode extends RegisterBehavior {
  name = 'cover-hover-edge';
  constructor(Grid) {
    super(Grid);
    this.register(Event);
  }
  getEvents() {
    return {
      'edge:mouseenter': 'onEdgeMouseEnter',
      'edge:mouseleave': 'onEdgeMouseLeave'
    }
  }
}