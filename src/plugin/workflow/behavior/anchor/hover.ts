import RegisterBehavior from '../../Workflow/registerBehavior';

const Event = {
  onNodeMouseEnter(e) {
    this.graph.setItemState(e.item, 'hoverNode', true);
  },
  onNodeMouseLeave(e) {
    const node = e.item.getContainer().getParent();
    node && this.graph.setItemState(node.get('item'), 'hoverNode', false);
  }
}

export default class HoverAnchor extends RegisterBehavior {
  name = 'cover-hover-anchor';
  constructor(Grid) {
    super(Grid);
    this.register(Event);
  }
  getEvents() {
    return {
    //   'anchor:mouseenter': 'onNodeMouseEnter',
      'anchor:mouseleave': 'onNodeMouseLeave'
    }
  }
}