import React, { Component } from 'react';

/** 组件 */
import Workflow from '../Workflow';
import Header from './Components/Header';
import NodePanelGroup from './Components/NodePanelGroup';
/** 插件 */
import AddNodePanel from '../plugin/AddNodePanel';
import CommandPlugin from '../plugin/CommandPlugin';
import ToolBarPlugin from '../plugin/ToolBarPlugin';

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
  /** 额外要展示的元素，记得要搞成绝对定位，不要影响到主页面布局 */
  ExtraElement?: React.ReactElement; // ExtraElement
  /** 判断是否可链接边 */
  judgeEdgeEnd?: (sourceNode, targetNode) => boolean;
  /** 注册边, 这里请注意，必需用字面量对象的形式去注册 */
  registerEdgeList?: any[];
  /** 注册节点，要继承BaseNode */
  registerNodeList?: any[];
  /** 节点 */
  registerNodes?: any[];
  /** 注册行为列表 */
  registerBehaviors?: any[]
  /** 是否是树展示 */
  treeGroup?: boolean;
  /** 配置默认的节点信息 */
  defaultNode?: any;
  /** 配置默认的边的信息 */
  defaultEdge?: any;
  /** 自定义的模式配置 */
  modes?: {[key: string]: any[]};
  /** 默认模式 */
  mode?: 'edit' | 'view';
} 

const baseSize = {
  listWidth: 200,
  toolHeight: 48
}

class FlowUtil {
  autoSize = (innerHeight = window.innerHeight, innerWidth = window.innerWidth) => {
    return {
      listWidth: baseSize.listWidth,
      listHeight: innerHeight - baseSize.toolHeight,
      flowWidth: innerWidth - baseSize.listWidth,
      flowHeight: innerHeight - baseSize.toolHeight
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
    commandList: [],
    registerBehaviors: [],
    treeGroup: false
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
    const observer = new ResizeObserver((entity) => {
      const { contentRect: { height, width } } = entity[0];
      console.log(entity);
      this.autoSize(height, width);
    })
    observer.observe(this.xiooFlow.current);
    // this.autoSize();
    // window.addEventListener('resize', this.util.debounce(() => this.autoSize(), 20));
  }

  /** 自适应屏幕 */
  private autoSize(height, width) {
    const size = this.util.autoSize(height, width);
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
    const { initEdges, initNodes, layout, returnGraph, animate, commandList, judgeEdgeEnd, registerNodeList = [], registerEdgeList = [], registerNodes = [], registerBehaviors = [], treeGroup, defaultEdge, defaultNode, modes, mode = 'edit' } = this.props;
    const Command = new CommandPlugin();
    const plugins: any[] = [Command];

    if (this.nodePanelContainer.current) {
      const NodePanel = new AddNodePanel({ container: this.nodePanelContainer.current });
      plugins.push(NodePanel);
    }

    if (this.toolBar.current) {
      const ToolBar = new ToolBarPlugin({ container: this.toolBar.current });
      plugins.push(ToolBar);
    }

    const workflowInstance = new Workflow({
      container: this.workflowContainer.current,
      width: size.flowWidth,
      height: size.flowHeight,
      plugins: plugins,
      // layout: layoutSetting[layout],
      layout: layout,
      initNodes,
      initEdges,
      registerNodes,
      animate,
      registerEdgeList,
      registerBehaviors,
      edgeCallback: judgeEdgeEnd,
      treeGroup,
      defaultEdge,
      defaultNode,
      modes
      // edgeCallback: this.edgeCallback
    });
    workflowInstance.graph.setMode(mode);
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
    const { mode = 'edit' } = this.props;
    return (
      <div className="xioo-flow" id="xioo-flow" ref={this.xiooFlow}>
        {this.props.ExtraElement}
        {
          mode === 'edit' && (
            <div className="xioo-flow-header" ref={this.toolBar}>
              <Header xiooFlow={this.xiooFlow}>
                {this.props.toolbar}
              </Header>
            </div>
          )
        }
        
        <div className="xioo-flow-body" style={{ height: this.state.size.flowHeight }}>
          {
            mode === 'edit' && (
              <div className="xioo-flow-body-node" ref={this.nodePanelContainer} style={{ width: this.state.size.listWidth }}>
                <NodePanelGroup
                  groupNodeList={this.props.groupNodeList}
                />
              </div>
            )
          }
          <div
            className="xioo-flow-body-flow"
            ref={this.workflowContainer}
            style={{ width: mode === 'edit' ? this.state.size.flowWidth : this.state.size.flowWidth + baseSize.listWidth, height: mode === 'edit' ? this.state.size.flowHeight : this.state.size.flowHeight + baseSize.toolHeight }}
          ></div>
          {/* <div className="xioo-flow-body-detail"></div> */}
        </div>
      </div>
    );
  }




}

export default Flow;