class HtmlNode {
  nodeList = {};

  add(name, Component) {
    this.nodeList[name] = Component;
  }

  addList(list) {
    // Object.keys()
  }
}

export default HtmlNode