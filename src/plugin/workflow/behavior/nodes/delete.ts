import RegisterBehavior from '../../Workflow/registerBehavior';

const Event = {
  onKeyDown(e) {
    const item = this.graph.get('selectedItem');
    if(this.graph.get('noKeyDown')) {
      return;
    }
    if(e.keyCode === 8 && item) {
      this.graph.remove(item);
      this.graph.set('selectedItem', null);
    }
  }
}

export default class HoverNode extends RegisterBehavior {
  name = 'cover-delete-item';
  constructor(Grid) {
    super(Grid);
    this.register(Event);
  }
  getEvents() {
    return {
      'keydown': 'onKeyDown'
    }
  }
}