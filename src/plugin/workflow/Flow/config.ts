const layoutDefault = {
  type: 'dagre',
  align: 'DL', // 可选
  nodesep: 20, // 可选
  ranksep: 50, // 可选
  controlPoints: true, // 可选
}

export const layoutSetting = {
  horizontal: {
    ...layoutDefault,
    rankdir: 'LR', // 可选，默认为图的中心
  },
  vertical: {
    ...layoutDefault,
    rankdir: 'TB', // 可选，默认为图的中心
  }
}