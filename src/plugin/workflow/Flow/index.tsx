import React, { Component } from 'react';

import Workflow from '../Workflow';
import Header from './Components/Header';

import NodePanelGroup from './Components/NodePanelGroup';
import AddNodePanel from '../plugin/AddNodePanel';
import CommandPlugin from '../plugin/CommandPlugin';
import ToolBarPlugin from '../plugin/ToolBarPlugin';
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

interface IProps {
  /** 基准宽度，如果存在将会以其去计算流程图的大小 */
  baseWidth?: number;
  /** 基准高度，如果存在将会以其去计算流程图的大小 */
  baseHeight?: number;
  /** 自定义节点 */
  registerNodeList?: IRegisterNode[];
  /** 节点组 */
  nodePanelGroup?: IPanelGroup[];
  /** 侧边节点 */
  groupNodeList?: any[];
}

const baseSize = {
  listWidth: 200,
  toolHeight: 48
}

class FlowUtil {
  autoSize = () => {
    console.log(document.body.clientHeight)
    console.log(window.innerHeight)
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
      if(!timeout) {
        timeout = setTimeout(func, timer);
        return;
      };
      clearTimeout(timeout);
      timeout = setTimeout(func, timer);
    }
  }

  throttle = () => {}
}

class Flow extends Component<IProps> {

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
    this.setState({size}, () => {
      if(!this.workflowInstance) {
        this.initWorkflow();
      }
    });
    if(this.workflowInstance) {
      console.log(size)
      this.workflowInstance.graph.changeSize(size.flowWidth, size.flowHeight);
    }
  }

  /** 初始化流程图 */
  initWorkflow = () => {
    const { size } = this.state;

    const NodePanel = new AddNodePanel({
      container: this.nodePanelContainer.current
    });

    const Command = new CommandPlugin();

    const ToolBar = new ToolBarPlugin({
      container: this.toolBar.current
    })

    const workflowInstance = new Workflow({
      container: this.workflowContainer.current,
      width: size.flowWidth,
      height: size.flowHeight,
      plugins: [Command, NodePanel, ToolBar],
      layout: {
        type: 'dagre',
        rankdir: 'LR', // 可选，默认为图的中心
        align: 'DL', // 可选
        nodesep: 20, // 可选
        ranksep: 50, // 可选
        controlPoints: true, // 可选
      },
      initNodes: [
        {
          id: 'node1',
          type: 'base-node',
          size: [70, 70],
          // x: 400,
          // y: 200
        },
        {
          id: 'node2',
          type: 'flow-node',
          size: [170, 70],
          // x: 600,
          // y: 200,
          leftText: '1234567',
          titleText: 'ajskdskkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
          taskStatus: 'NAME',
          taskStatusValue: 3,
          rightText: 'asjdka'
        },
        {
          id: 'node3',
          type: 'flow-node',
          size: [170, 70],
          // x: 600,
          // y: 200,
          leftText: '1234567',
          titleText: '获取数据',
          taskStatus: '进行中我真的好',
          rightText: 'asjdka'
        },
        {
          id: 'node4',
          type: 'flow-node',
          size: [170, 70],
          // x: 600,
          // y: 200,
          leftText: '1234567',
          titleText: '获取数据',
          taskStatus: '进行中',
          rightText: 'asjdka'
        },
        {
          id: 'node5',
          type: 'flow-node',
          size: [170, 70],
          // x: 600,
          // y: 200,
          leftText: '1234567',
          titleText: '获取数据',
          taskStatus: '进行中',
          rightText: 'asjdka'
        },
        {
          id: 'node6',
          type: 'flow-node',
          size: [170, 70],
          // x: 600,
          // y: 200,
          leftText: '1234567',
          titleText: '获取数据',
          taskStatus: '进行中',
          rightText: 'asjdka'
        },
        {
          id: 'node7',
          type: 'flow-node',
          size: [170, 70],
          // x: 600,
          // y: 200,
          leftText: '1234567',
          titleText: '获取数据',
          taskStatus: '进行中',
          rightText: 'asjdka'
        },
        {
          id: 'node8',
          type: 'flow-node',
          size: [170, 70],
          // x: 600,
          // y: 200,
          leftText: '1234567',
          titleText: '获取数据111',
          taskStatus: '进行中',
          rightText: 'asjdka',
          icon1: '/icon/aite.svg'
        }
      ],
      initEdges: [
        {
          source: 'node1',
          target: 'node2',
          type: 'cover-cricle'
        },
        {
          source: 'node1',
          target: 'node3',
          type: 'cover-cricle'
        },
        {
          source: 'node2',
          target: 'node4',
          type: 'cover-cricle'
        },
        {
          source: 'node3',
          target: 'node4',
          type: 'cvte-polyline'
        },
        {
          source: 'node1',
          target: 'node5',
          type: 'cvte-polyline'
        },
        {
          source: 'node5',
          target: 'node6',
          type: 'cvte-polyline'
        },
        {
          source: 'node6',
          target: 'node7',
          type: 'cvte-polyline'
        },
        {
          source: 'node5',
          target: 'node8',
          type: 'cvte-polyline'
        }
      ],
      registerNodes: [],
      registerNodeList: this.props.registerNodeList
      // edgeCallback: this.edgeCallback
    });
    workflowInstance.graph.setMode('edit');
    // workflowInstance.graph.fitCenter();
    workflowInstance.graph.layout();
    workflowInstance.graph.on('onDoubleClickNode', (e) => {
      console.log(e)
    });
    this.workflowInstance = workflowInstance;

    RegisterCommand();
  }

  render() {
    return (
      <div className="xioo-flow" id="xioo-flow" ref={this.xiooFlow}>
        <div className="xioo-flow-header" ref={this.toolBar}>
          <Header xiooFlow={this.xiooFlow} />
        </div>
        <div className="xioo-flow-body" style={{height: this.state.size.flowHeight}}>
          <div className="xioo-flow-body-node" ref={this.nodePanelContainer} style={{width: this.state.size.listWidth}}>
            <NodePanelGroup 
              registerNodeList={this.props.registerNodeList} 
              nodePanelGroup={this.props.nodePanelGroup} 
              groupNodeList={this.props.groupNodeList}
            />
          </div>
          <div 
            className="xioo-flow-body-flow" 
            ref={this.workflowContainer} 
            style={{width: this.state.size.flowWidth, height: this.state.size.flowHeight}}
          ></div>
          {/* <div className="xioo-flow-body-detail"></div> */}
        </div>
      </div>
    );
  }

  

  
}

export default Flow;