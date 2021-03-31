import { deepMix, each } from '@antv/util';

const select = ['copy', 'delete']

export default class TooBarPlugin {
  private readonly _cfgs: any;
  constructor(cfgs) {
    this._cfgs = deepMix(this.getDefaultCfg(), cfgs);
  }

  getDefaultCfg() {
    return { container: null };
  }

  get(key) {
    return this._cfgs[key];
  }
  set(key, val) {
    this._cfgs[key] = val;
  }

  initPlugin(graph) {
    const parentNode = this.get('container');
    const children = parentNode.querySelectorAll('.xioo-work-header .xioo-work-header-group div[data-command]');
    each(children, (child) => {
      const name = child.getAttribute('data-command');
      let params = child.getAttribute('data-params');
      params = params ? JSON.parse(params) : {};
      child.addEventListener('click', () => {
        const command = graph.get('MacroCommand');
        // 获取参数
        
        command && command.executeCommand(name, {graph, ...params});
      });
    });
    /** 监听选中事件 */
    graph.on('onSelectNode', (item) => {
      select.forEach(key => {
        const CopyDOM = parentNode.querySelector(`.xioo-work-header .xioo-work-header-group div[data-command='${key}']`);
        CopyDOM.classList.add('actionable');
      })
      // const CopyDOM = parentNode.querySelector(".xioo-work-header .xioo-work-header-group div[data-command='copy']");
      // CopyDOM.classList.add('actionable');
    });
    /** 监听清楚选中事件 */
    graph.on('onClearSelectNode', () => {
      select.forEach(key => {
        const CopyDOM = parentNode.querySelector(`.xioo-work-header .xioo-work-header-group div[data-command='${key}']`);
        CopyDOM.classList.remove('actionable');
      })
      // const CopyDOM = parentNode.querySelector(".xioo-work-header .xioo-work-header-group div[data-command='copy']");
      // CopyDOM.classList.remove('actionable');
    })
  }

  destroy() {
    this.get('canvas').destroy();
    const container = this.get('container');
    container.parentNode.removeChild(container);
  }
}