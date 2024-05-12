import RegisterBehavior from '../../Workflow/registerBehavior';

const Event = {
  onNodeMouseEnter(e) {
    this.graph.setItemState(e.item, 'hoverNode', true);
  },
  onAnchorMouseLeave(e) {
    const node = e.item.getContainer().getParent();
    this.graph.setItemState(e.item, 'hoverAnchor', false);
    node && this.graph.setItemState(node.get('item'), 'hoverNode', false);
  },
  onAnchorMouseEnter(e) {
    this.graph.setItemState(e.item, 'hoverAnchor', true);
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
      'anchor:mouseleave': 'onAnchorMouseLeave',
      'anchor:mouseenter': 'onAnchorMouseEnter'
    }
  }
}