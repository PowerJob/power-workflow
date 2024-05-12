import { deepMix, each } from '@antv/util';

import MacroCommand from './MacroCommand';

export default class CommandPlugin {
  private readonly _cfgs: any;

  constructor(cfgs: any = {}) {
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
    /** 为图注册命令执行器 */
    graph.set('MacroCommand', MacroCommand);
  }

  destroy() {
    // this.get('canvas').destroy();
    // const container = this.get('container');
    // container.parentNode.removeChild(container);
  }
}