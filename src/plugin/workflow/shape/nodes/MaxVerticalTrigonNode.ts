import MaxTrigonNode from './MaxTrigonNode';


export default class MaxVerticalTrigonNode extends MaxTrigonNode {
  name = 'max-v-trigon-node'
  constructor(Grid) {
    super(Grid, false);
    this.register();
  }

  getAnchorPoints() {
    return [
      [0.5, 0], // top
      [0.75, 0.5], // right
      [0.5, 1], // bottom
      [0.25, 0.5], // left
    ]
  }
}