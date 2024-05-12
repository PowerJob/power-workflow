import BaseNode from './BaseNode';
import nodeStyle from '../../defaultStyle/nodeStyle';

const colors = {
  B: '#5B8FF9',
  R: '#F46649',
  Y: '#EEBC20',
  G: '#5BD8A6',
  DI: '#A7A7A7',
};

const stateList = {
  /** 控制锚点的显示 */
  'hoverNode': function (item, value) {
    const group = item.getContainer();
    if (value) {
      group.showAnchor()
    } else {
      group.clearAnchor()
    }
  },
  /** 选中锚点 */
  selectNode: function (item, value) {
    const group = item.getContainer();
    const current = group.getChildByIndex(0);
    if (value) {
      current.attr("opacity", 1);
    } else {
      current.attr("opacity", 0.6);
    }
  },
  /** 节点显示隐藏 */
  visibleNode: function (item, value) {
    const group = item.get('group');
    const nodeModel = item.getModel();
    if (value === 'hide') {
      // item.update({
      //   x: nodeModel.startPos.x + 10,
      //   y: nodeModel.startPos.x + 10
      // })
      // item.refresh();
      const startPos = nodeModel.startPos;
      const endPos = nodeModel.endPos;

      const distanceX = Math.abs(endPos.x - startPos.x);
      const distanceY = Math.abs(endPos.Y - startPos.Y);
      let disX = 20 / 1000 * distanceX;
      let disY = 20 / 1000 * distanceY;
      let startX = nodeModel.startPos.x;
      let startY = nodeModel.startPos.x;
      let inc = setInterval(() => {
        if (startX < endPos.x) {
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
  },
  collapse: function (item, value) {
    const group = item.getContainer();
    const collapseText = group.find((e) => e.get('name') === 'collapse-text');
    if (collapseText) {
      if (!value) {
        collapseText.attr({
          text: '-',
        });
      } else {
        collapseText.attr({
          text: '+',
        });
      }
    }
  }
}

export default class TreeNode extends BaseNode {
  name = 'tree-node';
  extendedName = 'rect';
  constructor(Grid) {
    super(Grid, true);
    this.register();
  }
  draw(cfg, group, inc) {
    const {
      name = '',
      variableName,
      variableValue,
      variableUp,
      label,
      collapsed,
      currency,
      status,
      rate,
      width = 202,
      height = 60
    } = cfg;

    const grey = '#CED4D9';
    // 逻辑不应该在这里判断
    const rectConfig = {
      width: width,
      height: height,
      lineWidth: 1,
      fontSize: 12,
      fill: '#fff',
      radius: 4,
      stroke: grey,
      opacity: 1,
    };

    const nodeOrigin = {
      // x: -rectConfig.width / 2,
      // y: -rectConfig.height / 2,
      x: 0,
      y: 0,
    };

    const textConfig = {
      textAlign: 'left',
      textBaseline: 'bottom',
    };

    const rect = group.addShape('rect', {
      attrs: {
        x: nodeOrigin.x,
        y: nodeOrigin.y,
        ...rectConfig,
      },
    });

    const rectBBox = rect.getBBox();

    // label title
    group.addShape('text', {
      attrs: {

        x: 12 + nodeOrigin.x,
        y: 20 + nodeOrigin.y,
        text: name.length > 28 ? name.substr(0, 28) + '...' : name,
        fontSize: 12,
        opacity: 0.85,
        fill: '#000',
        cursor: 'pointer',
        ...(textConfig as any),
      },
      name: 'name-shape',
    });

    // price
    const price = group.addShape('text', {
      attrs: {
        ...textConfig,
        x: 12 + nodeOrigin.x,
        y: rectBBox.maxY - 12,
        text: label,
        fontSize: 16,
        fill: '#000',
        opacity: 0.85,
      },
    });

    // label currency
    group.addShape('text', {
      attrs: {
        ...textConfig,
        x: price.getBBox().maxX + 5,
        y: rectBBox.maxY - 12,
        text: currency,
        fontSize: 12,
        fill: '#000',
        opacity: 0.75,
      },
    });

    // percentage
    const percentText = group.addShape('text', {
      attrs: {
        ...textConfig,
        x: rectBBox.maxX - 8,
        y: rectBBox.maxY - 12,
        text: `${((variableValue || 0) * 100).toFixed(2)}%`,
        fontSize: 12,
        textAlign: 'right',
        fill: colors[status],
      },
    });

    // percentage triangle
    const symbol = variableUp ? 'triangle' : 'triangle-down';
    const triangle = group.addShape('marker', {
      attrs: {
        ...textConfig,
        x: percentText.getBBox().minX - 10,
        y: rectBBox.maxY - 12 - 6,
        symbol,
        r: 6,
        fill: colors[status],
      },
    });
    // variable name
    group.addShape('text', {
      attrs: {
        ...textConfig,
        x: triangle.getBBox().minX - 4,
        y: rectBBox.maxY - 12,
        text: variableName,
        fontSize: 12,
        textAlign: 'right',
        fill: '#000',
        opacity: 0.45,
      },
    });

    // bottom line background
    const bottomBackRect = group.addShape('rect', {
      attrs: {
        x: nodeOrigin.x,
        y: rectBBox.maxY - 4,
        width: rectConfig.width,
        height: 4,
        radius: [0, 0, rectConfig.radius, rectConfig.radius],
        fill: '#E0DFE3',
      },
    });

    // bottom percent
    const bottomRect = group.addShape('rect', {
      attrs: {
        x: nodeOrigin.x,
        y: rectBBox.maxY - 4,
        width: rate * rectBBox.width,
        height: 4,
        radius: [0, 0, 0, rectConfig.radius],
        fill: colors[status],
      },
    });

    // collapse rect
    if (cfg.children && cfg.children.length) {
      group.addShape('rect', {
        attrs: {
          x: rectConfig.width  + 8,
          // y: -8,
          y: rectConfig.height / 2 - 8,
          width: 16,
          height: 16,
          stroke: 'rgba(0, 0, 0, 0.25)',
          cursor: 'pointer',
          fill: '#fff',
        },
        name: 'collapse-back',
        modelId: cfg.id,
      });

      // collpase text
      group.addShape('text', {
        attrs: {
          x: rectConfig.width  + 16,
          // y: -1,
          y: rectConfig.height / 2,
          textAlign: 'center',
          textBaseline: 'middle',
          text: collapsed ? '+' : '-',
          fontSize: 16,
          cursor: 'pointer',
          fill: 'rgba(0, 0, 0, 0.25)',
        },
        name: 'collapse-text',
        modelId: cfg.id,
      });
    }

    this.initAnchor(group);

    // this.drawLinkPoints(cfg, group);
    return rect;
  }

  getAnchorPoints() {
    return [
      [0, 0.5],
      [1, 0.5],
    ];
  }

  /** 状态变化 */
  setState(name, value, item) {
    stateList[name] && stateList[name].call(this, item, value);
  }
}