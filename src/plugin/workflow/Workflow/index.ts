/*
 * @version:
 * @Author: dee
 * @Date: 2021-02-02 16:44:37
 * @LastEditors: dee
 * @LastEditTime: 2021-02-05 16:25:20
 */
import G6, { Graph } from "@antv/g6";
import BaseNode from '../shape/nodes/BaseNode';
import FlowNode from '../shape/nodes/FlowNode';
import CvtePolyline from '../shape/edges/CvtePolyline'
import CvtePolyline1 from '../shape/edges/CvtePolyline1'

import { shapeBase } from '@antv/g6-core/lib/element/shapeBase';
import Shape from '@antv/g6-core/lib/element/shape';
import BaseAnchor from '../shape/Anchors/BaseAnchor';

// import HoverNode from '../behavior/nodes/hover';
import {HoverNode, HoverAnchor, DragNode, DragAnchor, SelectNode, HoverEdge, DeleteItem, addNode} from '../behavior'



interface ICvteWorkflow {
  /** 图实例 */
  graph: Graph;
  /** 初始化的节点数据 */
  initNodes: any[];
  /** 初始化的边数据 */
  initEdges: any[];
  /** 初始化 */
  init: () => void;
  /** 改变模式 */
  changeMode: (mode: "edit" | "view") => void;
  /** 获取流程编排的信息 */
  getWorkflowData: () => any;
  /** 监听节点选中的事件，主要是选中节点和边 */
  onSelectedItem: () => void;
  /** 添加节点 */
  addNode: () => void;
  /** 添加边 */
  addEdge: () => void;
}

interface IProps {
  /** 流程图的容器 */
  container: HTMLElement;
  /** 容器宽度,默认全屏 */
  width?: number;
  /** 容器高度,默认全屏 */
  height?: number;
  /** 插件列表 */
  plugins?: any[];
  /** 模式 */
  mode?: "edit" | "view";
  /** 初始化的节点数据 */
  initNodes?: any[];
  /** 初始化的边数据 */
  initEdges?: any[];
  /** 节点注册 */
  registerNodes: any[];
  /** 布局方式 */
  layout?: any;
  /** 连线时候的回调 */
  edgeCallback?: (sourceNode, targetNode) => boolean
}


const gird = new G6.Grid({});

export default class CvteWorkflow implements ICvteWorkflow {
  private container: HTMLElement;
  private width: number;
  private height: number;
  private plugins: any[];
  private mode: "edit" | "view";
  private layout: any;
  edgeCallback: (sourceNode, targetNode) => boolean;
  graph: Graph;
  initNodes: any[];
  initEdges: any[];
  registerNodes: any[];
  G6
  constructor({
    container,
    width = document.body.clientWidth,
    height = document.body.clientHeight,
    plugins = [],
    mode = "view",
    initEdges = [],
    initNodes = [],
    registerNodes = [],
    edgeCallback,
    layout
  }: IProps) {
    this.container = container;
    const check = this.checkProps();
    if (!check) return;
    this.width = width;
    this.height = height;
    this.plugins = plugins;
    this.mode = mode;
    this.initEdges = initEdges;
    this.initNodes = initNodes;
    this.G6 = G6;
    this.registerNodes = registerNodes;
    this.edgeCallback = edgeCallback;
    this.layout = layout;
    new BaseAnchor(G6);

    this.initRegister();


    this.init();
  }

  init() {
    this.graph = new Graph({
      container: this.container,
      width: this.width,
      height: this.height,
      enabledStack: true,
      plugins: [gird, ...this.plugins],
      modes: this.initMode(),
      layout: this.layout
    });

    this.graph.set('edgeEndCallback', this.edgeEndCallback)

    document.addEventListener('click', (e) => {
      if(e.target['nodeName'] === 'CANVAS') {
        return;
      }
      this.graph.set('noKeyDown', true);
    })

    // 初始化数据
    this.initData();
  }
  changeMode() {}
  getWorkflowData() {}
  onSelectedItem() {}
  addNode() {}
  addEdge() {}

  /** 校验container */
  private checkProps() {
    if (!this.container) {
      new Error("container is required!");
      return false;
    }
    return true;
  }

  /** 初始化模式 */
  private initMode() {
    return {
      default: ['drag-canvas', {type: "zoom-canvas", sensitivity: 1}],
      edit: ['drag-canvas', 'cover-hover-node', 'cover-hover-anchor', 'cover-drag-node', 'cover-drag-anchor', 'cover-select-node', 'cover-hover-edge', 'cover-delete-item', 'cover-add-node'],
      view: ['drag-canvas', 'cover-select-node', 'cover-drag-node']
    }
  }

  /** 数据初始化 */
  private initData() {
    const data = {
      nodes: this.initNodes,
      edges: this.initEdges
    }
    this.graph.data(data);
    this.graph.render();
  }

  /** 初始化注册 */
  private initRegister() {
    // 注册节点
    [BaseNode, FlowNode, ...this.registerNodes].forEach(SelfNode => {
      new SelfNode(this.G6);
    });
    
    // 行为注册
    [HoverNode, HoverAnchor, DragNode, DragAnchor, SelectNode, HoverEdge, DeleteItem, addNode].forEach(SelfNode => {
      new SelfNode(this.G6);
    });

    // 边注册
    // [CvtePolyline].forEach(SelfNode => {
    //   new SelfNode(this.G6);
    // });

    CvtePolyline1(G6)
  }

  edgeEndCallback = (sourceNode, targetNode) => {
    if(!this.edgeCallback) return true;
    return this.edgeCallback(sourceNode, targetNode);
  }
}
