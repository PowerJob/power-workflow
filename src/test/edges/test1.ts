export default {
  name: 'max-test1',
  extended: 'cubic',
  register: {
    drawShape(cfg, group) {
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
          // endArrow: true
          endArrow: {
            path: "M 10,0 L 20,10 L 20,-10 Z",
            d: 10,
            // lineDash: [ 0, 0 ],
            fill: '#fff',
          }
        }
      });
      return path;
    },
  }
}