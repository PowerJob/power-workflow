import React, { Component } from 'react';

import Workflow from '../Workflow';

import AddNodePanel from '../plugin/AddNodePanel';

import './index.less';


interface IProps {
  /** 基准宽度，如果存在将会以其去计算流程图的大小 */
  baseWidth?: number;
  /** 基准高度，如果存在将会以其去计算流程图的大小 */
  baseHeight?: number;
}

const baseSize = {
  listWidth: 200,
  toolHeight: 40
}

class FlowUtil {
  autoSize = () => {
    return {
      listWidth: baseSize.listWidth,
      listHeight: document.body.clientHeight - baseSize.toolHeight,
      flowWidth: document.body.clientWidth - baseSize.listWidth,
      flowHeight: document.body.clientHeight - baseSize.toolHeight
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

class Flow extends Component {

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
      this.workflowInstance.graph.changeSize(size.flowWidth, size.flowHeight);
    }
  }

  /** 初始化流程图 */
  initWorkflow = () => {
    const { size } = this.state;

    const NodePanel = new AddNodePanel({
      container: this.nodePanelContainer.current
    });

    const workflowInstance = new Workflow({
      container: this.workflowContainer.current,
      width: size.flowWidth,
      height: size.flowHeight,
      plugins: [NodePanel],
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
          titleText: '获取数据',
          taskStatus: '进行中',
          rightText: 'asjdka'
        }
      ],
      initEdges: [
        {
          source: 'node1',
          target: 'node2',
          type: 'cvte-polyline'
        },
        {
          source: 'node1',
          target: 'node3',
          type: 'cvte-polyline'
        },
        {
          source: 'node2',
          target: 'node4',
          type: 'cvte-polyline'
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
      // edgeCallback: this.edgeCallback
    });
    workflowInstance.graph.setMode('edit');
    workflowInstance.graph.fitCenter();
    workflowInstance.graph.on('onDoubleClickNode', (e) => {
      console.log(e)
    });
    this.workflowInstance = workflowInstance;
  }

  render() {
    return (
      <div className="xioo-flow">
        <div className="xioo-flow-header"></div>
        <div className="xioo-flow-body" style={{height: this.state.size.flowHeight}}>
          <div className="xioo-flow-body-node" ref={this.nodePanelContainer} style={{width: this.state.size.listWidth}}>
            <div draggable="true" className="xioo-panel-item" data-item="flow-node"></div>
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