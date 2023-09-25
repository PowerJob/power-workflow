import React, { Component } from 'react';
// import { Workflow } from 'max-workflow';
import Workflow from './plugin'

class Test extends Component {
  /** 要创建workflow的容器 */
  workflowContainer = React.createRef<HTMLDivElement>();
  /** flow */
  flow: Workflow;
  componentDidMount() {
    this.initWorkflow();
  }
  /** 初始化图 */
  initWorkflow = () => {
    this.flow = new Workflow({
      container: this.workflowContainer.current,
      width: 1000,
      height: 500,
      layout: 'vertical',
      animate: true,
      mode: 'edit'
    });

    this.flow.graph.on('onSelectedEdge', (node) => {
      console.log(node);
      const nodeItem = this.flow.graph.get("selectedItem");
      const group = nodeItem.getContainer();
      const current = group.getChildByIndex(2);
      current.attr('text', '是')
      console.log(current);
    })

    this.setData();
  }
  /** 设置数据 */
  setData = () => {
    return setTimeout(() => {
      this.flow.setData({
        nodes: [
          {
            id: 'node1',
            type: 'flow-node',
            size: [140, 60],
            titleText: '我是节点1234567890987654323456789876543234567',
            taskStatusValue: 4,
            taskStatus: '已警告',
            leftText: "1234",
            style: {
              fill: "#FE9201",
              stroke: "#D45547",
            },
            icon1: "/icon/paihangbang.svg",
            rightText: 'Max',
            lineDashAnimate: false
          },
          {
            id: 'node2',
            type: 'flow-node',
            taskStatusValue: 9,
            taskStatus: '已取消',
            size: [140, 60],
            titleText: 'test2',
            style: {
              fill: "#E2E2E2",
              stroke: "#A5A5A5",
            },
          },
          {
            id: 'node3',
            type: 'max-diamond-node',
            // size: [140, 60],
            titleText: 'test2',
            sideLength: 100,
            text: '是否',
            style: {
              sideLength: 80,
              textStyle: {
                // fill: '#FFFFFF'
              }
              // fill: "#FE9201",
              // stroke: "#D45547",
            }
          },
          {
            id: 'node4',
            type: 'flow-child-node',
            titleText: 'test2',
            size: [180, 70],
            // titleText: '我是节点',
            // taskStatusValue: 4,
            // taskStatus: '已警告',
            // leftText: "1234",
            // style: {
            //   fill: "#FE9201",
            //   stroke: "#D45547",
            // },
            // icon1: "/icon/paihangbang.svg",
            // rightText: 'Max',
            // lineDashAnimate: false
          },
          // {
          //   id: 'node3',
          //   type: 'flow-node',
          //   size: [120, 50],
          //   titleText: 'test3'
          // }
        ],
        edges: [
          {
            source: 'node1',
            target: 'node2',
            type: 'cvte-polyline',
            label: ''
          },
          {
            source: 'node1',
            target: 'node3',
            type: 'cvte-polyline',
            label: 'Y'
          }
        ],
      })
    }, 2000);
  }

  render() {
    return (
      <div className="xioo-flow-body-flow" ref={this.workflowContainer}></div>
    );
  }
}

export default Test;
