

export default function (G6) {
  G6.registerEdge('cover-cricle', {
    draw(cfg, group) {
      let startPoint = cfg.startPoint;
      let endPoint = cfg.endPoint;
      let centerPoint = {
        x: (startPoint.x + endPoint.x) / 2,
        y: (startPoint.y + endPoint.y) / 2
      };
      // 控制点坐标
      let controlPoint = {
        x: (startPoint.x + centerPoint.x) / 2,
        y: startPoint.y
      };
      let path = group.addShape("path", {
        attrs: {
          path: [["M", startPoint.x, startPoint.y], ["Q", controlPoint.x + 8, controlPoint.y, centerPoint.x, centerPoint.y], ["T", endPoint.x - 8, endPoint.y], ["L", endPoint.x, endPoint.y]],
          stroke: "#ccc",
          
          lineWidth: 1.6,
          endArrow: {
            path: "M 12,4 L 4,0 L 12,-4 Z",
            d: 4,
            fill: '#fff',
          }
        }
      });

      return path;
    },
  });
}