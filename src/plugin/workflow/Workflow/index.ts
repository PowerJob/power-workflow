/*
 * @version:
 * @Author: dee
 * @Date: 2021-02-02 16:44:37
 * @LastEditors: dee
 * @LastEditTime: 2021-02-05 16:25:20
 */
import G6, { Graph, TreeGraph } from "@antv/g6";
import BaseNode from '../shape/nodes/BaseNode';
import FlowNode from '../shape/nodes/FlowNode';
import SimpleNode from '../shape/nodes/SimpleNode';
import allNode from '../shape/nodes';

import CircleTestNode from '../shape/nodes/CircleNode';
import CvtePolyline from '../shape/edges/CvtePolyline'
import CvtePolyline1 from '../shape/edges/CvtePolyline1';
import CoverCircle from '../shape/edges/circle';

import { shapeBase } from '@antv/g6-core/lib/element/shapeBase';
import Shape from '@antv/g6-core/lib/element/shape';
import BaseAnchor from '../shape/Anchors/BaseAnchor';

// import HoverNode from '../behavior/nodes/hover';
// import {HoverNode, HoverAnchor, DragNode, DragAnchor, SelectNode, HoverEdge, DeleteItem, addNode, AlignNode} from '../behavior';
import Behaviors from '../behavior';

import { layoutSetting } from './config';
import { FlowUtil } from '../util/Util';

interface ICvteWorkflow {
  /** 图实例 */
  graph: Graph;
  /** 初始化的节点数据 */
  initNodes: any[];
  /** 初始化的边数据 */
  initEdges: any[];
  /** 初始化 */
  // init: () => void;
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
  /** 自适应差值 宽度 传入的时候将启动自适应 */
  diffWidth?: number;
  /** 自适应差值 高度 传入的时候将启动自适应 */
  diffHeight?: number;
  /** 插件列表 */
  plugins?: any[];
  /** 模式 */
  mode?: "edit" | "view";
  /** 初始化的节点数据 */
  initNodes?: any[];
  /** 初始化的边数据 */
  initEdges?: any[];
  /** 节点注册 */
  registerNodes?: any[];
  /** 布局方式 */
  layout?: 'horizontal' | "vertical";
  /** 连线时候的回调 */
  edgeCallback?: (sourceNode, targetNode) => boolean;
  /** 要注册节点的列表 */
  registerNodeList?: any[];
  /** 初始化时是是否执行动画 */
  animate?: boolean;
  /** 注册边, 这里请注意，必需用字面量对象的形式去注册 */
  registerEdgeList?: any[];
  /** 注册行为 */
  registerBehaviors?: any[];
  /** 是否是树展示 */
  treeGroup?: boolean;
  /** 布局参数, 布局的而外参数，会覆盖原有的布局，只有传入layout才有效 */
  layoutParams?: {
    [key: string]: any
  },
  /** 配置默认的节点信息 */
  defaultNode?: any;
  /** 配置默认的边的信息 */
  defaultEdge?: any;
  /** 自定义的模式配置 */
  modes?: {[key: string]: any[]}
}


const gird = new G6.Grid({});

export default class CvteWorkflow implements ICvteWorkflow {
  private container: HTMLElement;
  private width: number;
  private height: number;
  private plugins: any[];
  private mode: "edit" | "view";
  private layout: any;
  private treeGroup = false;
  edgeCallback: (sourceNode, targetNode) => boolean;
  graph: Graph;
  initNodes: any[];
  initEdges: any[];
  registerNodes: any[];
  registerNodeList: any[];
  animate: boolean = false;
  registerEdgeList: any[] = [];
  registerBehaviors: any[] = [];
  diffHeight = 0;
  diffWidth = 0;
  layoutParams: { [key: string]: any } = {}
  util = new FlowUtil();
  G6
  constructor({
    container,
    width = window.innerWidth,
    height = window.innerHeight,
    plugins = [],
    mode = "view",
    initEdges = [],
    initNodes = [],
    registerNodes = [],
    edgeCallback,
    layout,
    registerNodeList,
    animate = false,
    registerEdgeList = [],
    registerBehaviors = [],
    diffHeight = 0,
    diffWidth = 0,
    treeGroup = false,
    layoutParams = {},
    defaultNode = {},
    defaultEdge = {},
    modes = {}
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
    this.layout = layout ? { ...layoutSetting[layout], ...layoutParams } : null;
    this.registerNodeList = registerNodeList || [];
    this.animate = animate;
    this.registerEdgeList = registerEdgeList;
    this.registerBehaviors = registerBehaviors;
    this.diffWidth = diffWidth;
    this.diffHeight = diffHeight;
    this.treeGroup = treeGroup;
    new BaseAnchor(G6);

    this.initRegister();


    this.init(defaultNode, defaultEdge, modes);

    // 如果存在差异值，那么随窗口自适应
    if (this.diffHeight || this.diffWidth) {
      window.addEventListener('resize', this.util.debounce(() => this.autoSize, 50));
    }
  }

  init(defaultNode, defaultEdge, modes) {
    if (this.treeGroup) {
      this.graph = new TreeGraph({
        container: this.container,
        width: this.width,
        height: this.height,
        enabledStack: true,
        plugins: [...this.plugins],
        modes: this.initMode(),
        // layout: this.layout,
        layout: {
          type: 'indented',
          direction: 'LR',
          dropCap: false,
          indent: 300,
          getHeight: () => {
            return 60;
          },
        },
        animate: this.animate,
        defaultNode: {
          type: 'tree-node'
        },
        defaultEdge: {
          type: 'cover-cricle'
        }
      });
      const handleCollapse = (e) => {
        const target = e.target;
        const id = target.get('modelId');
        const item = this.graph.findById(id);
        const nodeModel: any = item.getModel();
        nodeModel.collapsed = !nodeModel.collapsed;
        this.graph.layout();
        this.graph.setItemState(item, 'collapse', nodeModel.collapsed);
      };
      this.graph.on('collapse-text:click', (e) => {
        handleCollapse(e);
      });
      this.graph.on('collapse-back:click', (e) => {
        handleCollapse(e);
      });
    } else {
      this.graph = new Graph({
        container: this.container,
        width: this.width,
        height: this.height,
        enabledStack: true,
        plugins: [...this.plugins],
        modes: this.initMode(modes),
        layout: this.layout,
        animate: this.animate,
        defaultNode: {
          type: 'flow-node',
          ...defaultNode
        },
        defaultEdge: {
          type: 'cvte-polyline',
          ...defaultEdge
        }
      });
    }

    // 设置mode
    if (this.mode) {
      this.graph.setMode(this.mode);
    }
    this.graph.set('edgeEndCallback', this.edgeEndCallback)

    document.addEventListener('click', (e) => {
      if (e.target['nodeName'] === 'CANVAS') {
        return;
      }
      this.graph.set('noKeyDown', true);
    })

    // 初始化数据
    this.initData();
  }

  changeMode() { }
  getWorkflowData() { }
  onSelectedItem() { }
  addNode() { }
  addEdge() { }

  /** 校验container */
  private checkProps() {
    if (!this.container) {
      new Error("container is required!");
      return false;
    }
    return true;
  }

  /** 初始化模式 */
  private initMode(modes = {}) {
    if (this.treeGroup) {
      return {
        default: ['drag-canvas', { type: "zoom-canvas", sensitivity: 1 }],
        edit: ['drag-canvas', 'cover-hover-node', 'cover-hover-anchor', 'cover-drag-node', 'cover-drag-anchor', 'cover-select-node', 'cover-hover-edge', 'cover-delete-item', 'cover-add-node', 'cover-align-node'],
        view: ['drag-canvas', 'cover-select-node'],
        ...modes
      }
    }
    return {
      default: ['drag-canvas', { type: "zoom-canvas", sensitivity: 1 }],
      edit: ['drag-canvas', 'cover-hover-node', 'cover-hover-anchor', 'cover-drag-node', 'cover-drag-anchor', 'cover-select-node', 'cover-hover-edge', 'cover-delete-item', 'cover-add-node', 'cover-align-node'],
      view: ['drag-canvas', 'cover-select-node'],
      ...modes
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
    if (this.layout && this.animate) {
      console.log('我是la')
      setTimeout(() => {
        this.graph.layout();
      }, 200);
    }
  }

  /** 初始化注册 */
  private initRegister() {
    // 注册节点
    [...allNode, BaseNode, FlowNode, ...this.registerNodes].forEach(SelfNode => {
      new SelfNode(this.G6);
    });

    // 行为注册[HoverNode, HoverAnchor, DragNode, DragAnchor, SelectNode, HoverEdge, DeleteItem, addNode, AlignNode]
    [...Behaviors, ...this.registerBehaviors].forEach(Behavior => {
      new Behavior(this.G6);
    });

    // 边注册
    [CvtePolyline].forEach(SelfNode => {
      new SelfNode(this.G6);
    });

    this.registerSideEdge();

    CvtePolyline1(G6);
    CoverCircle(G6);
    SimpleNode(G6);
    CircleTestNode(G6);
    // this.registerNodeByFront();
  }

  /** 自适应视口的大小 */
  private autoSize() {
    const width = window.innerWidth - this.diffWidth;
    const height = window.innerHeight - this.diffHeight;
    this.changeSize(width, height);
  }

  /** 动态设置数据 */
  setData(data) {
    this.graph.data(data);
    this.graph.render();
  }

  /** 设置模式 */
  setMode(mode: string) {
    this.graph.setMode(mode);
  }

  /** 改变视口的大小 */
  changeSize(width: number, height: number) {
    this.graph.changeSize(width, height);
  }

  /** 监听事件 */
  on(eventName: string, handler) {
    this.graph.on(eventName, handler);
  }

  /** 自适应画板 */
  fitView(size: number = 20) {
    this.graph.fitView(size);
  }

  /** 居中 */
  fitCenter() {
    this.graph.fitCenter();
  }

  /** 注册外界的边 */
  registerSideEdge() {
    this.registerEdgeList.forEach(item => {
      const { name, extended, register } = item;
      if (extended) {
        this.G6.registerEdge(name, register, extended);
      } else {
        this.G6.registerEdge(name, register);
      }
    })
  }

  /** 自定义注册测节点 */
  registerNodeByFront = () => {
    this.registerNodeList.forEach((item) => {
      const { nodeDesc } = item;

      this.G6.registerNode(item.nodeName, {
        drawKeyShape(cfg, group) {
          let keyShape = null;
          nodeDesc.forEach((node, index) => {
            if (index === 0) {
              keyShape = this.reloadDrawKeyShape(cfg, group, node);
            } else {
              this.reloadDrawKeyShape(cfg, group, node);
            }
          });
          return keyShape;
        },
        reloadDrawKeyShape(cfg, group, node) {
          let { type, name, ...attrs } = node;
          let other = {};

          // 如果是主视图，则宽度按照外界的计算
          if (attrs.mainShape) {
            other = {
              width: this.size.width,
              height: this.size.height
            }
          }

          attrs = {
            ...attrs,
            ...other
          }

          return group.addShape(type, {
            attrs,
            name
          })
        }
      }, 'simple-node')
    });
  }

  /** 重写drawKeyShape方法 */
  reloadDrawKeyShape = (cfg, group, node) => {
    let { type, name, ...attrs } = node;
    return group.addShape(type, {
      attrs,
      name
    })
  }

  edgeEndCallback = (sourceNode, targetNode) => {
    if (!this.edgeCallback) return true;
    return this.edgeCallback(sourceNode, targetNode);
  }
}
