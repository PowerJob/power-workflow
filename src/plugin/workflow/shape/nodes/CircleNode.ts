import nodeStyle from '../../defaultStyle/nodeStyle';
export default function CircleTestNode(Grid) {
  Grid.registerNode('circle-test-node', {

    /** 主要就是写这个方法 */
    drawKeyShape(cfg, group) {
      let width = this.size.width;
      let height = this.size.height;
      const { style = {} } = cfg;
      const attrs = {
        ...nodeStyle.base.origin,
        fill: '#BB0552',
        // width,
        // height,
        r: 50,
        ...style
      }
      const keyShape = group.addShape('circle', {
        attrs: attrs,
        name: 'circle-test-node-1',
        className: 'circle-test-node'
      });

      return keyShape;
    },
    /** 改变锚点就写这个方法 */
    getAnchorPoints() {
      return [
        [0.5, 0], // top
        [1, 0.5], // right
        [0.5, 1], // bottom
        // [0, 0.5], // left
      ]
    },
  }, 'simple-node');
}