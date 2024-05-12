export default class BlowCommand {
  execute({ graph, value }) {
    // 获取当前视视口的大小
    const zoom = graph.getZoom();
    const newValue = zoom + value;
    // 放大
    graph.zoomTo(newValue);
  }
}