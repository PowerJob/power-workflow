export default class FullScreenCommand {
  execute({ graph, domId }) {
    const el = document.getElementById(domId) as any;
    const rfs =
      el.requestFullScreen ||
      el.webkitRequestFullScreen ||
      el.mozRequestFullScreen ||
      el.msRequestFullScreen;
    if (typeof rfs != "undefined" && rfs) {
      rfs.call(el);
      graph.paint();
      // graph.changeSize(600, 600)
      return;
    }
  }
}