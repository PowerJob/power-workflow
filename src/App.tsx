/*
 * @version: 
 * @Author: dee
 * @Date: 2021-02-02 12:08:08
 * @LastEditors: dee
 * @LastEditTime: 2021-02-03 15:32:37
 */
import React, { Component } from 'react'
import Workflow, { RegisterNode } from './plugin';
import FLow from './plugin/workflow/Flow'

class MyNode extends RegisterNode {
  name = 'test-node'
  constructor(G6) {
    super(G6);
    this.register();
  }
  draw(cfg, group, inc) {
    const keyShape = group.addShape('rect', {
      attrs: {
        width: 170,
        height: 70,
        fill: '#C7E4FF',
			  stroke: '#61B3FF',
			  opacity: 0.6,
			  lineWidth: 2,
			  radius: 8,
			  cursor: 'move'
      },
      name: 'power-rect-node',
      className: 'base-node'
    });
    return keyShape;
  }
}


export default class App extends Component {

  refWlf = React.createRef<HTMLDivElement>();
  cvteFlow: any = null;
  componentDidMount() {
    const cvteFlow = new Workflow({
      container: this.refWlf.current,
      width: 1000,
      height: 600,
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
      registerNodes: [MyNode],
      edgeCallback: this.edgeCallback
    });
    cvteFlow.graph.setMode('edit');
    cvteFlow.graph.fitView(20);
    cvteFlow.graph.on('onDoubleClickNode', (e) => {
      console.log(e)
    });
    this.cvteFlow = cvteFlow;
  }

  edgeCallback = (sourceNode, targetNode) => {
    console.log(sourceNode)
    return true;
  }

  handleClick = () => {
    this.cvteFlow.graph.add('node', {
      id: `${Math.random()}`,
      type: 'flow-node',
      size: [180, 70],
      x: 0,
      y: 0,
      leftText: '111',
      titleText: 'asjdkasjd',
    })
  }

  render() {
    return (
      <div>
        <div className="wlf-g6" ref={this.refWlf}></div>
      </div>
    )
  }
}
