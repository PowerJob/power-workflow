import React, { Component } from 'react';

/** 组件 */
import Workflow from '../Workflow';
import Header from './Components/Header';
import NodePanelGroup from './Components/NodePanelGroup';
/** 插件 */
import AddNodePanel from '../plugin/AddNodePanel';
import CommandPlugin from '../plugin/CommandPlugin';
import ToolBarPlugin from '../plugin/ToolBarPlugin';
import { ToolGroup, ToolItem } from './Components/Toolbar'

/** 配置 */
import { layoutSetting } from './config';
import RegisterCommand from '../command';

import './index.less';

interface IRegisterNode {
  /** 组键值 */
  groupKey?: string;
  /** 节点名称 */
  nodeName?: string;
  /** 节点描述 */
  nodeDesc?: any[];
}

interface IPanelGroup {
  /** 组名称 */
  groupName: string;
  /** 组键值 */
  groupKey: string;
  /** 是否默认展示 */
  defaultOpen: boolean;
  /** 图标 */
  icon?: any;
}

interface ICommond {
  /** 命令值 */
  command: string;
  /** 命令对象 */
  CommandObject: any;
}

interface IProps {
  /** 基准宽度，如果存在将会以其去计算流程图的大小 */
  baseWidth?: number;
  /** 基准高度，如果存在将会以其去计算流程图的大小 */
  baseHeight?: number;
  /** 侧边节点 */
  groupNodeList?: any[];
  /** 初始化渲染的节点, 这里请注意，如果节点是异步获取的请使用api设置节点 */
  initNodes?: any[];
  /** 初始化的边, 同节点 */
  initEdges?: any[];
  /** 布局走向 */
  layout?: 'horizontal' | "vertical";
  /** 返回图的实例 */
  returnGraph?: (graph) => void;
  /** 要监听的事件列表 */
  listeners?: {[key: string]: any};
  /** 初始化时是是否执行动画 */
  animate?: boolean;
  /** 自定义toolBar */
  toolbar?: React.ReactElement;
  /** 命令列表 */
  commandList?: ICommond[];
}

const baseSize = {
  listWidth: 200,
  toolHeight: 48
}

class FlowUtil {
  autoSize = () => {
    return {
      listWidth: baseSize.listWidth,
      listHeight: window.innerHeight - baseSize.toolHeight,
      flowWidth: window.innerWidth - baseSize.listWidth,
      flowHeight: window.innerHeight - baseSize.toolHeight
    }
  }

  debounce = (func, timer) => {
    let timeout = null;
    return () => {
      if (!timeout) {
        timeout = setTimeout(func, timer);
        return;
      };
      clearTimeout(timeout);
      timeout = setTimeout(func, timer);
    }
  }

  throttle = () => { }
}

class Flow extends Component<IProps> {

  static defaultProps = {
    groupNodeList: [],
    initNodes: [],
    initEdges: [],
    listeners: {},
    animate: false,
    commandList: []
  }

  /** toobar实例 */
  toolBar = React.createRef<HTMLDivElement>();
  /** 整个DOM实例 */
  xiooFlow = React.createRef<HTMLDivElement>();

  util = new FlowUtil();

  /** 图的容器 */
  workflowContainer = React.createRef<HTMLDivElement>();
  /** 菜单面板容器 */
  nodePanelContainer = React.createRef<HTMLDivElement>();
  /** 流程图实例 */
  workflowInstance: Workflow = null;

  state = {
    size: {
      listWidth: 0,
      listHeight: 0,
      flowWidth: 0,
      flowHeight: 0
    }
  }

  componentDidMount() {
    this.autoSize();
    window.addEventListener('resize', this.util.debounce(() => this.autoSize(), 20));
  }

  /** 自适应屏幕 */
  private autoSize() {
    const size = this.util.autoSize();
    this.setState({ size }, () => {
      if (!this.workflowInstance) {
        this.initWorkflow();
      }
    });
    if (this.workflowInstance) {
      this.workflowInstance.graph.changeSize(size.flowWidth, size.flowHeight);
    }
  }

  /** 初始化流程图 */
  initWorkflow = () => {
    const { size } = this.state;
    const { initEdges, initNodes, layout, returnGraph, animate, commandList } = this.props;

    const NodePanel = new AddNodePanel({ container: this.nodePanelContainer.current });

    const Command = new CommandPlugin();

    const ToolBar = new ToolBarPlugin({ container: this.toolBar.current });

    const workflowInstance = new Workflow({
      container: this.workflowContainer.current,
      width: size.flowWidth,
      height: size.flowHeight,
      plugins: [Command, NodePanel, ToolBar],
      layout: layoutSetting[layout],
      initNodes,
      initEdges,
      registerNodes: [],
      animate
      // edgeCallback: this.edgeCallback
    });
    workflowInstance.graph.setMode('edit');
    // workflowInstance.graph.fitCenter();
    // workflowInstance.graph.layout();
    workflowInstance.graph.on('onDoubleClickNode', (e) => {
      
    });

    workflowInstance.graph.on('onDargEdgeEnd', (e) => {
      console.log(e)
    });
    this.workflowInstance = workflowInstance;
    this.registerListener();

    returnGraph && returnGraph(this.workflowInstance);
    RegisterCommand(commandList);
  }

  /** 注册要监听的事件 */
  registerListener = () => {
    const { listeners } = this.props;

    Object.keys(listeners).forEach(key => {
      this.workflowInstance.graph.on(key, listeners[key]);
    });
  }

  handleHeaderChange = (key) => {
    
  }

  render() {
    return (
      <div className="xioo-flow" id="xioo-flow" ref={this.xiooFlow}>
        <div className="xioo-flow-header" ref={this.toolBar}>
          <Header xiooFlow={this.xiooFlow}>
            {this.props.toolbar}
          </Header>
        </div>
        <div className="xioo-flow-body" style={{ height: this.state.size.flowHeight }}>
          <div className="xioo-flow-body-node" ref={this.nodePanelContainer} style={{ width: this.state.size.listWidth }}>
            <NodePanelGroup
              groupNodeList={this.props.groupNodeList}
            />
          </div>
          <div
            className="xioo-flow-body-flow"
            ref={this.workflowContainer}
            style={{ width: this.state.size.flowWidth, height: this.state.size.flowHeight }}
          ></div>
          {/* <div className="xioo-flow-body-detail"></div> */}
        </div>
      </div>
    );
  }




}

export default Flow;